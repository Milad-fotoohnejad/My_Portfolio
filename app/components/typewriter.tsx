"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  trigger?: boolean;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text = "",
  speed = 70,
  trigger = false,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!trigger || !text) return;
  
    setDisplayedText(""); // Clear before typing
  
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
  
    return () => clearInterval(interval);
  }, [trigger, text, speed]);
  

  return <h1 className={className}>{displayedText}</h1>;
};

export default Typewriter;
