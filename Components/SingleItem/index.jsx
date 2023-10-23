"use client";

import Link from "next/link";
import styles from "./SIngleitem.module.scss";
import Image from "next/image";
import StarIcon from "../../public/assests/icons/menuicons/star.svg";
import DarkStarIcon from "../../public/assests/icons/menuicons/darkstar.svg";
import PlusIcon from "../../public/assests/icons/menuicons/plus-small.svg";
import MinusIcon from "../../public/assests/icons/menuicons/horizontal-rule.svg";
import CompareIcon from "../../public/assests/icons/singleitem/refresh.svg";
import HeartIcon from "../../public/assests/icons/singleitem/heart.svg";
import EyeIcon from "../../public/assests/icons/singleitem/eye.svg";
import { useState } from "react";
import { useTheme } from "next-themes";
const index = (props) => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const {theme}=useTheme();
  return (
    <div className={`${styles.main} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.image}>
        <Link href="#">
          <Image
            className={styles.img}
            src={props.img}
            width={10000}
            height={10000}
          />
        </Link>
        <ul className={styles.popup}>
          <li>
            <EyeIcon className={styles.icon} />
            <div className={styles.box}>
              <p>View</p>
            </div>
          </li>
          <li>
            <CompareIcon className={styles.icon} />
            <div className={styles.box}>
              <p>Compare</p>
            </div>
          </li>
          <li>
            <HeartIcon className={styles.icon} />
            <div className={styles.box}>
              <p>Wishlist</p>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.details}>
        <Link href="#">
          <h6>Fantasy Crunchy Choco Chip Cookies</h6>
        </Link>
      </div>
      <div className={styles.price}>
        <span>$26.69</span>
        <del>28.56</del>
      </div>
      <div className={styles.stars}>
        <ul>
          <li>
            <DarkStarIcon className={styles.icon} />
          </li>
          <li>
            <DarkStarIcon className={styles.icon} />
          </li>
          <li>
            <DarkStarIcon className={styles.icon} />
          </li>
          <li>
            <DarkStarIcon className={styles.icon} />
          </li>
          <li>
            <StarIcon className={styles.icon} />
          </li>
        </ul>
        <h6>In Stock</h6>
      </div>
      <div className={styles.add}>
        <button className={styles.button}>
          <span
            onClick={() => {
              setCount(count - 1);
              if (count == 1) {
                setShow(false);
              }
            }}
            className={show ? `${styles.span}` : `${styles.hide}`}
          >
            <MinusIcon className={`${styles.minusicon}`} />
          </span>
          <p>{count == 0 ? "Add" : count}</p>
          <span
            onClick={() => {
              setCount(count + 1);
              setShow(true);
            }}
            className={styles.span}
          >
            <PlusIcon className={styles.plusicon} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default index;
