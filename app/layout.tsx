// app/RootLayout.tsx
import type { Metadata } from "next";
import { SharedLayout } from "./SharedLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "myBlog App",
  description: "Built by Keith Baskerville",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-gray-900 transition-all duration-300">
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}

