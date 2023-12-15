import React, { useEffect, useState } from "react";

const SplashScreen = ({ finishLoading, isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading(); // This will hide the splash screen after a delay
          }, 1200); // Adjust the delay time as needed
          return 100;
        }
        return newProgress;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`${!isLoading && "translate-y-[-700px]"
          } splash-screen splash-screen1 transition-all duration-1000`}></div>
      <div
        className={`${!isLoading && "opacity-0 invisible"
          } transition-all duration-300 loading-info`}>
        {/* <p className="loading-text ">LOADING</p> */}
        <img src="/images/logo-symbol.png" alt="logo" className="loading-text max-w-[200px]" />
        <div className={`${!isLoading && "!w-[100%]"} progress-bar-background`}>
          <div
            // className="h-[100%] transition-all duration-1000 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            className="h-[100%] transition-all duration-1000 bg-white"
            style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div
        className={`${!isLoading && "translate-y-[700px]"
          } splash-screen splash-screen2 transition-all duration-1000`}></div>
    </>
  );
};

export default SplashScreen;
