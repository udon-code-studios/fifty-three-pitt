import { useState, useEffect } from "react";

function useTailwindScreenSize() {
  const [screenSize, setScreenSize] = useState(null); // Start with `null` to defer rendering on the server.

  useEffect(() => {
    const getScreenSize = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        return "xl";
      } else if (window.matchMedia("(min-width: 1024px)").matches) {
        return "lg";
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        return "md";
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        return "sm";
      } else {
        return "xs";
      }
    };

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    // Set initial screen size on mount
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs only on the client

  return screenSize;
}

export default useTailwindScreenSize;
