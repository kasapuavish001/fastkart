"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./page.module.scss";
import SunIcon from "../../public/assests/icons/singleitem/brightness.svg";
import MoonIcon from "../../public/assests/icons/singleitem/moon-stars.svg";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.darkbtn}>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <MoonIcon className={styles.icon} />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <SunIcon className={styles.icon} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
