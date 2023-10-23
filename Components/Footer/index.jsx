import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";
import ProductICon from "../../public/assests/icons/footer/product.svg";
import DiscountIcon from "../../public/assests/icons/footer/discount.svg";
import MarketIcon from "../../public/assests/icons/footer/market.svg";
import DeliveryIocn from "../../public/assests/icons/footer/delivery.svg";
import PlaystoreIocn from "../../public/assests/icons/footer/playstore.svg";
import AppstoreIocn from "../../public/assests/icons/footer/appstore.svg";
import HomeIocn from "../../public/assests/icons/home.svg";
import MessageIocn from "../../public/assests/icons/envelope.svg";
import PhoneIocn from "../../public/assests/icons/phone-call.svg";
import { useTheme } from "next-themes";
// import img from "../../public/assests/images/1.png";
const index = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.footer} ${theme === "dark" && styles.dark}`}>
      <div className="contain">
        <div className={styles.container}>
          <div className={styles.servicecontain}>
            <div className={styles.servicebox}>
              <div className={styles.img}>
                <ProductICon className={styles.icon}/>
              </div>
              <div className={styles.details}>
                <p>Every Fresh Products</p>
              </div>
            </div>
            <div className={styles.servicebox}>
              <div className={styles.img}>
                <DeliveryIocn className={styles.icon} />
              </div>
              <div className={styles.details}>
                <p>Free Delivery For Order Over $50</p>
              </div>
            </div>
            <div className={styles.servicebox}>
              <div className={styles.img}>
                <DiscountIcon className={styles.icon} />
              </div>
              <div className={styles.details}>
                <p>Daily Mega Discounts</p>
              </div>
            </div>
            <div className={styles.servicebox}>
              <div className={styles.img}>
                <MarketIcon className={styles.icon} />
              </div>
              <div className={styles.details}>
                <p>Best Price On The Market</p>
              </div>
            </div>
          </div>

          <div className={styles.main}>
            <div className={`${styles.row} ${styles.one}`}>
              <div className={styles.logo}>
                <Image
                  className={styles.icon}
                  src="/../public/assests/images/1.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className={styles.detail}>
                <p className={styles.para}>
                  We are a friendly bar serving a variety of cocktails, wines
                  and beers. Our bar is a perfect place for a couple.
                </p>
                <ul>
                  <li>
                    <HomeIocn className={styles.icon} />
                    <p>1418 Riverwood Drive, CA 96052, US</p>
                  </li>
                  <li>
                    <MessageIocn className={styles.icon} />
                    <p>support@fastkart.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.row} ${styles.two}`}>
              <p className={styles.title}>Categories</p>
              <ul>
                <li>
                  <a href="#">Vegetables & Fruit</a>
                </li>
                <li>
                  <a href="#">Beverages</a>
                </li>
                <li>
                  <a href="#">Meats & Seafood</a>
                </li>
                <li>
                  <a href="#">Frozen Foods</a>
                </li>
                <li>
                  <a href="#">Biscuits & Snacks</a>
                </li>
                <li>
                  <a href="#">Grocery & Staples</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.row} ${styles.three}`}>
              <p className={styles.title}>Useful Links</p>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.row} ${styles.four}`}>
              <p className={styles.title}>Help Center</p>
              <ul>
                <li>
                  <a href="#">Your Order</a>
                </li>
                <li>
                  <a href="#">Your Account</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
                <li>
                  <a href="#">Your Wishlist</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className={`${styles.row} ${styles.five}`}>
              <p className={styles.title}>Contact Us</p>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <PhoneIocn className={styles.icons} />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.light}>Hotline 24/7 :</p>
                    <p className={styles.dark}>+91 888 104 2340</p>
                  </div>
                </li>
                <li>
                  <div className={styles.icon}>
                    <MessageIocn className={styles.icons} />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.light}>Hotline 24/7 :</p>
                    <p className={styles.dark}>+91 888 104 2340</p>
                  </div>
                </li>
              </ul>

              <ul>
                <p className={styles.download}>Download App :</p>
                <div className={styles.links}>
                  <li>
                    <a href="https://play.google.com/store/apps">
                      <PlaystoreIocn />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/in/app-store/">
                      <AppstoreIocn />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
{
  /* <Link href="/about">About</Link>
<Link href="/application">Application Form</Link> */
}
