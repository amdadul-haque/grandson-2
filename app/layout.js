import { ToastContainer } from "react-toastify";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { poppins } from "@/fonts";
import AnimatedCursor from "react-animated-cursor";
import ContactUs from "@/components/ContactUs";


export const metadata = {
  title: {
    template: '%s',
    default: 'Profesjonalna Produkcja Video i Video Marketing - Grandson Media',
  },
  description: 'Odkryj profesjonalne usługi produkcji wideo i marketingu wideo w Grandson Media. Tworzymy treści, które przyciągają uwagę i realizują cele marketingowe',
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
        <ContactUs />
        <Footer />
        <AnimatedCursor
          innerSize={8}
          outerSize={17}
          color="0, 189, 233"
          outerAlpha={0.2}
          innerStyle={{
            backgroundColor: "rgb(212, 20, 90)",

            borderRadius: "50%",
            width: "50%",
          }}
          outerStyle={{
            backgroundColor: "transparent",
            border: "2px solid rgb(212, 20, 90)",
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
      </body>
    </html>
  );
}
