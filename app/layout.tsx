import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";
import Header from "./components/header";
import { Analytics } from "@vercel/analytics/react";
import CoverParticles from "./components/cover-particles";

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
        <CoverParticles />
        <Navbar />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
