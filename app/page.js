import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
    </main>
  );
}
