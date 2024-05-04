import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { poppins } from "@/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Profesjonalna Produkcja Video i Video Marketing - Grandson Media",
  description: "Odkryj profesjonalne usługi produkcji wideo i marketingu wideo w Grandson Media. Tworzymy treści, które przyciągają uwagę i realizują cele marketingowe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={poppins.className}>
        <ToastContainer position="top-right" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
