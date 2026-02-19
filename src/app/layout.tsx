import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KAMP & Associates — Chartered Accountants",
    template: "%s | KAMP & Associates CA",
  },
  description:
    "KAMP & Associates is a trusted Chartered Accountancy firm offering GST registration, income tax filing, company registration, audit, compliance, and business advisory services across India.",
  keywords: [
    "Chartered Accountant",
    "CA firm India",
    "GST registration",
    "Income tax filing",
    "Company registration",
    "LLP registration",
    "Tax advisory",
    "Audit services",
    "Compliance services",
    "KAMP Associates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
