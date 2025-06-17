import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSLAVA 50 LET",
  description: "Oslava 50. narozenin (25 + 25) Oťas a Filda",
  openGraph: {
    title: "OSLAVA 50 LET",
    description: "Oslava 50. narozenin (25 + 25) Oťas a Filda",
    images: [
      {
        url: "https://oslava25.vercel.app/fotopozvanka.jpg",
        width: 1200,
        height: 630,
        alt: "Pozvánka na oslavu 50 let",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
