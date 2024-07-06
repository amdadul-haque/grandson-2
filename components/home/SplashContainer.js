'use client'
import React, { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen';
import { usePathname } from 'next/navigation';

const SplashContainer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [isLoading]);


  return (
    <>
      <SplashScreen
        isLoading={isLoading}
        finishLoading={() => setIsLoading(false)}
        isHome={isHome}
      />
    </>
  )
}

export default SplashContainer