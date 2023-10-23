"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import PanelLayout from "../../Components/PanelLayout";
import Banner from "../../Components/Banner";
import Item from "../../Components/Items";
import Token from "../../Components/Secondbanner";
import styles from "./page.module.scss";
import NewsLetter from "../../Components/Newsletter";
import Cookies from "../../Components/Cookies";
import { useEffect, useState } from "react";
import BactToTop from "../../Components/BackToTop";
import SunIcon from "../../public/assests/icons/singleitem/brightness.svg";
import MoonIcon from "../../public/assests/icons/singleitem/moon-stars.svg";
const page = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(!show);
  }, []);

  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, [backToTopButton]);
  return (
    <PanelLayout>
      <div className="contain">
        <Banner />
        <div className={styles.item}>
          <Item />
        </div>
        <div className="token">
          <Token />
        </div>
        <div className={styles.NewsLetter}>
          <NewsLetter />
        </div>
      </div>
      {show && (
        <div className={styles.cookie}>
          <Cookies a={show} fun={setShow} />
        </div>
      )}

      <div className={styles.topbtn}>
        {backToTopButton && (
          <BactToTop BactToTop={backToTopButton} funs={setBackToTopButton} />
        )}
      </div>
    </PanelLayout>
  );
};

export default page;
