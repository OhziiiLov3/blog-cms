"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!session) {
      setModalOpen(true);
    }
  }, [session]);

  return (
    <>
      <LoginModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      {session ? children : null}
    </>
  );
}

