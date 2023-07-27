'use client';

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation';
import HomePage from "./pages/home";
import CMProjectPage from "./pages/cm_project/page";
import VIUProjectPage from "./pages/viu_project/page";
import WCProjectPage from "./pages/wc_project/page";
import ContactPage from "./pages/contact/page";
import Navigation from "./components/navigation";
import "./globals.css";
import { RouteContext } from './RouteContext';

export default function Home() {
  const [currentRoute, setCurrentRoute] = useState<string>("/");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setCurrentRoute(pathname);
    }
  }, [pathname]);

  const renderContent = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage />;
      case '/pages/cm_project':
        return <CMProjectPage />;
      case '/pages/viu_project':
        return <VIUProjectPage />;
      case '/pages/wc_project':
        return <WCProjectPage />;
      case '/pages/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <div className="grid-container">
        <div>
          <Navigation />
        </div>
        <div className="content">
          {renderContent()}
        </div>
      </div>
    </RouteContext.Provider>
  );
}
