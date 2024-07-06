'use client';
import React, { useEffect, useState } from "react";

const SplashScreen = ({ finishLoading, isLoading, isHome }) => {
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading();
          }, isHome ? 1200 : 120);
          return 100;
        }
        return newProgress;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`${!isLoading && "translate-y-[-700px]"} splash-screen splash-screen1 transition-all duration-1000`}></div>
      <div className={`${!isLoading && "opacity-0 invisible"} transition-all duration-300 loading-info`}>
        <img src="/images/logo-symbol.png" alt="logo" className="loading-text max-w-[200px]" />
        {isHome &&
          <div className={`${!isLoading && "!w-[100%]"} progress-bar-background`}>
            <div className="h-[100%] transition-all duration-1000 bg-white" style={{ width: `${progress}%` }}></div>
          </div>
        }
      </div>
      <div className={`${!isLoading && "translate-y-[700px]"} splash-screen splash-screen2 transition-all duration-1000`}></div>
    </>
  );
};

export default SplashScreen;
