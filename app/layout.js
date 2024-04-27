import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarqueeText from "./components/MarqueText";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Mohmmed Aqeeb — Frontend Developer",
  description: "The portfolio of Mohmmed Aqeeb, Front-End Developer.",
  keywords: [
    "mohmmed aqeeb",
    "aqeeb pathan",
    "mohmmed aqeeb pathan",
    "aqeeb frontend",
    "aqeeb",
  ],
  author: [{ name: "Mohmmed Aqeeb Pathan" }],
  url: "https://aqeeb.dev",
  siteName: "Mohmmed Aqeeb's Portfolio",
  type: "website",
  publisher: "Mohmmed Aqeeb Pathan",
  creator: "Mohmmed Aqeeb Pathan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <MarqueeText />
      </body>
    </html>
  );
}
