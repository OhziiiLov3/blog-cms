"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import logo from "../assets/images/postme-2.svg";
import ToggleTheme from "./ToggleTheme";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white px-4 py-4 transition-all duration-300">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1">
          <Image src={logo} width={50} height={50} alt="postMe logo" priority />
          <h1 className="text-3xl font-bold dark:text-white text-gray-900">postMe</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {["Home", "Blog", "Chat", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-800 font-bold dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition duration-300 font-medium"
            >
              {item}
            </Link>
          ))}

          <FiSearch size={22} className="cursor-pointer text-gray-800 dark:text-gray-300 hover:text-blue-400" />

          <ToggleTheme />
          <LoginButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            {["Home", "Blog", "Chat", "About"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <LoginButton />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

