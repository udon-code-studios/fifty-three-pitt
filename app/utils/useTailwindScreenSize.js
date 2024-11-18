"use client";

import { useState, useEffect } from "react";

function useTailwindScreenSize() {
  const getScreenSize = () => {
    if (typeof window === "undefined") return "xs"; // Default to xs if window is undefined

    if (window.matchMedia("(min-width: 1280px)").matches) {
      return "xl";
    } else if (window.matchMedia("(min-width: 1024px)").matches) {
      return "lg";
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      return "md";
    } else if (window.matchMedia("(min-width: 640px)").matches) {
      return "sm";
    } else {
      return "xs"; // Default size if none of the above match
    }
  };

  const [screenSize, setScreenSize] = useState(getScreenSize);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return screenSize;
}

export default useTailwindScreenSize;
