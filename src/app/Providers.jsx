"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./page.module.scss";
export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {children}
    </ThemeProvider>
  );
}
