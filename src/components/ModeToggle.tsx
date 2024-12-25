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

  return (
    <Toggle
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group/toggle h-8 w-8 px-0"
    >
      {/* Show SunIcon when dark theme is active */}
      <SunIcon className="hidden [html.dark_&]:block h-4 w-4" />
      {/* Show MoonIcon when light theme is active */}
      <MoonIcon className="hidden [html.light_&]:block h-4 w-4" />
    </Toggle>
  );
}
