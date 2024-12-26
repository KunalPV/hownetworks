"use client"; // This ensures it's treated as a Client Component

import { ThemeProvider } from "next-themes";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      
    >
      {children}
    </ThemeProvider>
  );
}
