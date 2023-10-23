"use client";

import React, { useEffect, useState } from "react";
import HeaderTop from "../HeaderTop";
import HeaderOne from "../HeaderOne";
import HeaderTwo from "../HeaderTwo";
import styles from "./header.module.scss";

const Header = () => {
  const [Offset, SetOffset] = useState(false);
  useEffect(() => {
    if (typeof window == "object") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });
  const controlNavbar = () => {
    if (window.scrollY > 50) {
      SetOffset(true);
    } else {
      SetOffset(false);
    }
  };
  return (
    <div className={styles.headers}>
      <HeaderTop />
      <div
        className={` ${Offset ? styles.header_nav : ""}`}
        style={{
          background: Offset ? "#fff" : "transparent",
          boxShadow: Offset ? "0 0 10px #00000040" : "none",
        }}
      >
        <HeaderOne />
      </div>
      <HeaderTwo />
    </div>
  );
};

export default Header;
