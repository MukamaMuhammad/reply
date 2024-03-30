import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@components/Nav";
import Footer from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lolenti Muhammad Portfolio Website",
  description: "This is Lolenti Muhammad's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto bg-foreground text-gray-100">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
