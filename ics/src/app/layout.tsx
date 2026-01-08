import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroLoader from "./IntroLoader";
import SubHeader from "@/components/SubHeader";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infinite Code School - Brighter Tomorrow",
  description: "Empowering students with world-class coding education and innovative learning experiences for a brighter digital future.",
  icons: {
    icon: '/logo_code.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        <IntroLoader />
        <Header />
        <SubHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}