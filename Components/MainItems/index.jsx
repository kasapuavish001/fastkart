"use client";
import styles from "./MainItem.module.scss";
import ClockIcon from "../../public/assests/icons/clock-three.svg";
import SingleItem from "../SingleItem";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const index = () => {
  const { theme, setTheme } = useTheme();
  const [sec, setSec] = useState(59);
  const [min, setMin] = useState(59);
  useEffect(() => {
    var time = setInterval(() => {
      setSec(sec - 1);
    }, 1000);
    if (sec === 0) {
      setSec(59);
      setMin(min - 1);
    }

    return () => {
      clearInterval(time);
    };
  }, [sec]);

  return (
    <div className={styles.main}>
      <div
        className={`${styles.header} ${
          theme === "dark" ? styles.dark : ""
        }`}
      >
        <div className={styles.maintitle}>
          <p className={styles.title}>Top Save Today</p>
          <p className={styles.subtitle}>
            Don't miss this opportunity at a special discount just for this
            week.
          </p>
        </div>
        <div className={styles.timer}>
          <ClockIcon className={styles.icon} />
          <div className={styles.div}>
            <p className={styles.text}>Expires in :</p>
          </div>
          <div className={styles.div}>
            <p className={styles.text}>14 :</p>
          </div>
          <div className={styles.div}>
            <p className={styles.text}>23 :</p>
          </div>
          <div className={styles.div}>
            <p className={styles.text}>{min} :</p>
          </div>
          <div className={styles.div}>
            <p className={styles.text}>{sec}</p>
          </div>
        </div>
      </div>
      <div className={`${styles.display} ${
          theme === "dark" ? styles.dark : ""
        }`}>
        <div className={styles.item}>
          <SingleItem img="/../public/assests/images/mainitems/item1.png" />
        </div>
        <div className={styles.item}>
          <SingleItem img="/../public/assests/images/mainitems/item3.png" />
        </div>
        <div className={styles.item}>
          <SingleItem img="/../public/assests/images/mainitems/item2.png" />
        </div>
        <div className={styles.item}>
          <SingleItem img="/../public/assests/images/mainitems/item3.png" />
        </div>
        <div className={styles.item}>
          <SingleItem img="/../public/assests/images/mainitems/item1.png" />
        </div>
        <div className={styles.item}>
          <SingleItem img="/../public/assests/images/mainitems/item3.png" />
        </div>
      </div>
    </div>
  );
};

export default index;
