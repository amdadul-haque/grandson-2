import { ToastContainer } from "react-toastify";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { poppins } from "@/fonts";

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
        {children}
      </body>
    </html>
  );
}
