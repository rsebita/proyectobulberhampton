import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";
import Header from "./components/header";


const urbanist = Urbanist({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Bulber Hampton ⚽",
  description: "Bulber Hampton by Sebastián Ramírez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
