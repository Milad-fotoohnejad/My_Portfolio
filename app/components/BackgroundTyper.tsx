"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type Line = { text: string; pauseMs?: number; speedMs?: number };

interface Props {
  lines: Line[];
  defaultSpeedMs?: number;
  defaultPauseMs?: number;
  loop?: boolean;
  maxVisibleLines?: number; // how many lines stay on screen
  className?: string;       // optional extra classes
}

export default function BackgroundTyper({
  lines,
  defaultSpeedMs = 40,
  defaultPauseMs = 800,
  loop = true,
  maxVisibleLines = 6,
  className = "",
}: Props) {
  const prefersReduced = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    []
  );

  const [shown, setShown] = useState<string[]>([]);
  const runningRef = useRef(true);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  useEffect(() => {
    runningRef.current = true;

    const run = async () => {
      do {
        for (let li = 0; li < lines.length && runningRef.current; li++) {
          const { text, speedMs, pauseMs } = lines[li];
          const speed = speedMs ?? defaultSpeedMs;
          const pause = pauseMs ?? defaultPauseMs;

          if (prefersReduced) {
            // Instantly append the whole line
            setShown((prev) => {
              const next = [...prev, text].slice(-maxVisibleLines);
              return next;
            });
          } else {
            // Type char-by-char
            for (let i = 1; i <= text.length && runningRef.current; i++) {
              const partial = text.slice(0, i);
              setShown((prev) => {
                const arr = [...prev];
                // replace the last in-progress line OR append new one
                if (arr.length && arr[arr.length - 1].length < text.length && arr[arr.length - 1].startsWith(text.slice(0, i - 1))) {
                  arr[arr.length - 1] = partial;
                } else {
                  arr.push(partial);
                }
                return arr.slice(-maxVisibleLines);
              });
              await new Promise<void>((res) => timers.current.push(window.setTimeout(res, speed)));
            }
          }

          // Pause after the line completes
          await new Promise<void>((res) => timers.current.push(window.setTimeout(res, pause)));
        }
      } while (loop && runningRef.current);
    };

    // prime with empty array
    setShown([]);
    run();

    return () => {
      runningRef.current = false;
      clearTimers();
    };
  }, [lines, defaultSpeedMs, defaultPauseMs, loop, maxVisibleLines, prefersReduced]);

  return (
    <div className={`story-typer-bg ${className}`}>
      <div className="story-typer-inner">
        {shown.map((line, idx) => (
          <div key={idx} className="story-typer-line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
