"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { AboutUs, Hero, Oferta, Portfolio, SplashScreen } from "@/components/home";
import { ContactUs } from "@/components";

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
      <Oferta />
      <Portfolio />
      <AboutUs />
      <ContactUs />
    </Layout>
  );
}
