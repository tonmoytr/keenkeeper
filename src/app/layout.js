import { Geist, Geist_Mono, Sen } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sen = Sen({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "A Digital Diary App",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={` ${sen.className} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
