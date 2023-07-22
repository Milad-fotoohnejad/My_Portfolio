import React from "react";
import HomePage from "./pages/home";
import Navigation from "./components/navigation";
import "./globals.css";

// interface PageLayoutProps {
//   children: React.ReactNode;
// }

export default function Home() {
  return (
    <div className="grid-container">
      <div>
        <Navigation />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}
