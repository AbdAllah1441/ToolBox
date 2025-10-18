import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        className="cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <SunIcon className="w-4 h-4 text-white" />
        ) : (
          <MoonIcon className="w-4 h-4 text-black" />
        )}
      </button>
    </div>
  );
};
