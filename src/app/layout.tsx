
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import { Toaster } from "@/components/ui/toaster"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HowNetWorks - Edging and Gooning Over Your Data",
  description: "Websites are edging you with cookies and trackers, gooning over every click you make. It’s time to finish the job, mog their algorithms, and rizz-proof your online game.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProviderWrapper>
          <header>
            <Navbar />
          </header>
          {children}
          <Toaster />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
