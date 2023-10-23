import Link from "next/link";
import styles from "./Header.module.scss";
import DownIcon from "../../public/assests/icons/angle-small-down.svg";
import MenuIcon from "../../public/assests/icons/bars-sort.svg";
import BlotIcon from "../../public/assests/icons/bolt.svg";
import CarrotIcon from "../../public/assests/icons/menuicons/carrot.svg";
import MeatIcon from "../../public/assests/icons/menuicons/meat.svg";
import MugIcon from "../../public/assests/icons/menuicons/mug-hot.svg";
import { useTheme } from "next-themes";
const index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="contain">
      <div className={`${styles.main} ${theme === "dark" ? styles.darkmode : ""}`}>
        <div className={styles.menu}>
          <MenuIcon className={styles.menuicon} />
          All Categories
          <ul className={styles.menulist}>
            <li>
              <Link href="#">
                <CarrotIcon className={styles.icon} />
                <p>Vegetables & Friuts</p> ➣
              </Link>
            </li>
            <li>
              <Link href="#">
                <MeatIcon className={styles.icon} />
                <p>Meat & SeaFood</p> ➣
              </Link>
            </li>
            <li>
              <Link href="#">
                <MugIcon className={styles.icon} />
                <p>Beverages</p> ➣
              </Link>
            </li>
            <li>
              <Link href="#">
                <CarrotIcon className={styles.icon} />
                <p>Vegetables & Friuts</p> ➣
              </Link>
            </li>
            <li>
              <Link href="#">
                <MeatIcon className={styles.icon} />
                <p>Meat & SeaFood</p> ➣
              </Link>
            </li>
            <li>
              <Link href="#">
                <MugIcon className={styles.icon} />
                <p>Beverages</p> ➣
              </Link>
            </li>
          </ul>
        </div>
        <ul className={styles.menuoption}>
          <li>
            <Link href="#">
              Home
              <DownIcon className={styles.Arricon} />
            </Link>
            <ul className={styles.optionlist}>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              Shop
              <DownIcon className={styles.Arricon} />
            </Link>
            <ul className={styles.optionlist}>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              Product
              <DownIcon className={styles.Arricon} />
            </Link>
            <ul className={styles.optionlist}>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              Mega Menu
              <DownIcon className={styles.Arricon} />
            </Link>
            <ul className={styles.optionlist}>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              Blog
              <DownIcon className={styles.Arricon} />
            </Link>
            <ul className={styles.optionlist}>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              Pages
              <DownIcon className={styles.Arricon} />
            </Link>
            <ul className={styles.optionlist}>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              Seller
              <DownIcon className={styles.Arricon} />
            </Link>
            <ul className={styles.optionlist}>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Vegetables & Friuts</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Meat & SeaFood</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>Beverages</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <button className={styles.deal}>
          <BlotIcon className={styles.bloticon} />
          Deal Today
        </button>
      </div>
    </div>
  );
};

export default index;
