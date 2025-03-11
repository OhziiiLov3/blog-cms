"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ToggleTheme = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Ensure theme is rendered after component mounts to avoid SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering of the toggle until the component is mounted
  if (!mounted) return null;

  // Adjust theme to "resolvedTheme" when "system" theme is selected
  const currentTheme = theme === "system" ? resolvedTheme : theme;

  // Handle theme change and close dropdown
  const handleThemeChange = (mode: string) => {
    setTheme(mode);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-2 rounded-md text-gray-800 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition duration-300"
      >
        {currentTheme === "dark" ? <FiSun size={22} /> : <FiMoon size={22} />}
      </button>

      {dropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-lg rounded-lg py-2 z-50"
          onBlur={() => setDropdownOpen(false)}
          tabIndex={0}
        >
          <button
            className={`flex items-center w-full text-left px-4 py-2 hover:text-blue-500 font-medium ${
              currentTheme === "light" ? "text-blue-500 font-bold" : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => handleThemeChange("light")}
          >
            <FiSun size={20} className="mr-2" /> Light Mode
          </button>

          <button
            className={`flex items-center w-full text-left px-4 py-2 hover:text-blue-500 font-medium ${
              currentTheme === "dark" ? "text-blue-500 font-bold" : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => handleThemeChange("dark")}
          >
            <FiMoon size={20} className="mr-2" /> Dark Mode
          </button>

          <button
            className={`flex items-center w-full text-left px-4 py-2 hover:text-blue-500 font-medium ${
              currentTheme === "system" ? "text-blue-500 font-bold" : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => handleThemeChange("system")}
          >
            <FiSun size={20} className="mr-2" /> System
          </button>
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
