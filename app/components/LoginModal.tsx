"use client";

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FaGithub, FaTimes } from "react-icons/fa";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-200/80 dark:bg-gray-800/80"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-800 hover:text-red-500 cursor-pointer"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl text-center text-black font-bold mb-4">
          {isLogin ? "Login" : "Create an Account"}
        </h2>

        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center bg-black hover:bg-gray-700 text-white font-bold p-2 rounded-lg mb-4 cursor-pointer"
        >
          <FaGithub className="mr-2" /> Continue with GitHub
        </button>

        <div className="text-center text-gray-500 mb-4 font-semibold">
          or enter by email
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full text-gray-800 p-2 border rounded-lg cursor-pointer"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              className="w-full text-gray-800 p-2 border rounded-lg cursor-pointer"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 font-bold hover:bg-blue-700 text-white p-2 rounded-lg cursor-pointer"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 font-semibold cursor-pointer"
          >
            {isLogin ? "Create an account" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
