"use client";

import * as React from "react";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      className="cursor-pointer transition-all"
      variant="outline"
      size="icon"
      onClick={() => toggleTheme()}
    >
      {theme === "dark" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all text-blue-500  " />
      ) : (
        <MoonStarIcon className="h-[1.2rem] w-[1.2rem]  transition-all " />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
