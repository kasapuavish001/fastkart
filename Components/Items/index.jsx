import styles from "./item.module.scss";
import Carrot from "../../public/assests/icons/menuicons/carrot.svg";
import Meat from "../../public/assests/icons/menuicons/meat.svg";
import MugHot from "../../public/assests/icons/menuicons/mug-hot.svg";
import RightArr from "../../public/assests/icons/arrow-right.svg";
import Link from "next/link";
import Image from "next/image";
import MainItem from "../MainItems";
import Slider from "../Slider";
import DisplaySection from "../DisplaySection";
import CUpBoard from "../CupBoard";
import { useTheme } from "next-themes";
const index = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className={styles.main}>
      <div
        className={`${styles.right} ${theme === "dark" ? styles.darkmode : ""}`}
      >
        <div id="menu" className={styles.category}>
          <p className={styles.title}>Category</p>
          <ul>
            <li>
              <Link href="#">
                <Carrot className={styles.icons} />
                Vegetables & Friuts
              </Link>
            </li>
            <li>
              <Link href="#">
                <Meat className={styles.icons} />
                Meat & SeaFood
              </Link>
            </li>
            <li>
              <Link href="#">
                <MugHot className={styles.icons} />
                Beverages
              </Link>
            </li>
            <li>
              <Link href="#">
                <Carrot className={styles.icons} />
                Vegetables & Friuts
              </Link>
            </li>
            <li>
              <Link href="#">
                <Meat className={styles.icons} />
                Meat & SeaFood
              </Link>
            </li>
            <li>
              <Link href="#">
                <MugHot className={styles.icons} />
                Beverages
              </Link>
            </li>
            <li>
              <Link href="#">
                <Meat className={styles.icons} />
                Meat & SeaFood
              </Link>
            </li>
            <li>
              <Link href="#">
                <MugHot className={styles.icons} />
                Beverages
              </Link>
            </li>
            <li>
              <Link href="#">
                <Meat className={styles.icons} />
                Meat & SeaFood
              </Link>
            </li>
            <li>
              <Link href="#">
                <MugHot className={styles.icons} />
                Beverages
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.values}>
          <ul>
            <li>
              <Link href="#">Value of the day</Link>
            </li>
            <li>
              <Link href="#">Top 50 Offer</Link>
            </li>
            <li>
              <Link href="#">New Arrivals</Link>
            </li>
          </ul>
        </div>

        <div className={styles.imgs}>
          <div className={styles.box}>
            <h6>Seafood</h6>
            <h3>
              FRESHES <span>PRODUCTS</span>
            </h3>
            <h4>every hour</h4>
            <button>
              Shop Now <RightArr className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.left}>
        <MainItem />
        <Slider />
        <DisplaySection />
        <CUpBoard />
      </div>
    </div>
  );
};

export default index;
