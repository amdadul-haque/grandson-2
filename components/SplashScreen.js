import React, { useEffect, useState } from "react";

const SplashScreen = ({ finishLoading }) => {
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
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="splash-screen">
      <p className="loading-text">LOADING</p>
      <div className="progress-bar-background">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SplashScreen;
