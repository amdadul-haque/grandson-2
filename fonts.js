import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";


export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
