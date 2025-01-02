import { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "HowNetWorks - Demystifying the Internet's Hidden Mechanics",
  description: "Explore the secrets of the digital world with HowNetWorks. Learn about internet through interactive playgrounds and insights into how the internet collects and uses your data.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
