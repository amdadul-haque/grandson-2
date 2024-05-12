"use client";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import FacebookMsg from "@/components/FacebookMsg";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SplashScreen from "@/components/SplashScreen";
import { poppins } from "@/fonts";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

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
      <main className={`overflow-hidden ${poppins.className}`}>
        <>
          <SplashScreen
            isLoading={isLoading}
            finishLoading={() => setIsLoading(false)}
          />
          <Hero />
          <Services />
          <Portfolio />
          <AboutUs />
        </>
        <FacebookMsg />
      </main>
      
    </>
  );
}
