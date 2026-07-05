"use client"

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import UnicornScene from "unicornstudio-react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const Component = () => {
  const { width, height } = useWindowSize();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by rendering a blank container on the server
  // and only rendering the WebGL scene once mounted on the client.
  if (!mounted || width === 0 || height === 0) {
    return <div className={cn("flex flex-col items-center w-full h-full unicorn-container")} />;
  }

  return (
    <div className={cn("flex flex-col items-center w-full h-full unicorn-container")}>
        <UnicornScene 
          production={true} 
          projectId="jYxrWzSRtsXNqZADHnVH" 
          width={width} 
          height={height} 
        />
    </div>
  );
};
