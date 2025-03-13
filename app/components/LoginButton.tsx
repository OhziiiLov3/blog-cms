"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  const { data: session } = useSession();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      {session ? (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      )}

      <LoginModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default LoginButton;
