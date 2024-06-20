"use client";
import { poppins } from "@/fonts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { AboutUs, Hero, Portfolio, Services, SplashScreen } from "@/components/home";

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
    <Layout>
      <SplashScreen
        isLoading={isLoading}
        finishLoading={() => setIsLoading(false)}
      />
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
    </Layout>
  );
}
