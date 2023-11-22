// Navigation.tsx
import React, { useContext, useState, useEffect } from "react";
import { RouteContext } from "../RouteContext";
import MobileNav from "./mobileNav";
import DesktopNav from "./desktopNav";

const Navigation = () => {
    const { currentRoute, setCurrentRoute } = useContext(RouteContext);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set the initial value
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav>
            {isMobile ? (
                <MobileNav />
            ) : (
                <DesktopNav />
            )}
        </nav>
    );
};

export default Navigation;
