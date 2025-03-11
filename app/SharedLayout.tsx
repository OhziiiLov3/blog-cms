// app/SharedLayout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from "./components/ThemeProvider"; // Import ThemeProvider component

export function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <section className="mx-auto max-w-3xl px-2 sm:px-6 xl:max-w-4xl xl:px-0">
      <Navbar/>
        {children} 
      </section>
    </ThemeProvider>
  );
}
