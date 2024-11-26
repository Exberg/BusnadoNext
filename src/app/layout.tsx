// app/layout.js
import { Metadata } from "next";
import { Concert_One } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

// Import Concert One font
const concertOne = Concert_One({
  subsets: ["latin"], // Use the 'latin' subset (most common)
  weight: "400",      // Concert One only has 400 weight
  display: "swap",    // Use 'swap' for better performance
});

export const metadata: Metadata = {
  title: "Busnado",
  description: "Busnado - UTM Bus Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={concertOne.className}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}