"use client";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SplashScreen from "@/components/SplashScreen";
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
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <>
      <main className="overflow-hidden">
        <>
          <SplashScreen
            isLoading={isLoading}
            finishLoading={() => setIsLoading(false)}
          />
          <Navbar />
          <Hero />
          <AboutUs />
          <Services />
          <Portfolio />
          <ContactUs />
          <Footer />
          <AnimatedCursor
            innerSize={8}
            outerSize={17}
            color="0, 189, 233"
            outerAlpha={0.2}
            innerStyle={{
              backgroundColor: "rgb(0, 189, 233)",

              borderRadius: "50%",
              width: "50%",
            }}
            outerStyle={{
              backgroundColor: "transparent",
              border: "2px solid rgb(0, 189, 233)",
              padding: "20px",
              borderRadius: "50%",
              width: "100px",
            }}
            showSystemCursor={true}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "li",
              "button",
              ".link",
            ]}
          />
        </>
      </main>
    </>
  );
}
