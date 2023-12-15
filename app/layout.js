import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Grandson Media",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{
        children}
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
