// app/RootLayout.tsx

import type { Metadata } from "next";
import { SharedLayout } from "./SharedLayout"; // Import SharedLayout
import './globals.css';

// Metadata for the app
export const metadata: Metadata = {
  title: "myBlog App",
  description: "Built by Keith Baskerville",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className="antialiased bg-white dark:bg-gray-900">
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}

