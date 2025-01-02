"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  // Fallback for hydration or undefined `resolvedTheme`
  const isDarkMode = resolvedTheme === "dark";

  return (
    <Toggle
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDarkMode}
      className="group/toggle h-8 w-8 px-0"
    >
      {isDarkMode ? (
        <SunIcon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-4 w-4" aria-hidden="true" />
      )}
    </Toggle>
  );
}
