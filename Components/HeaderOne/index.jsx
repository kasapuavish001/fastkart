"use client";
import Image from "next/image";
import styles from "./Headerone.module.scss";
import LocIcon from "../../public/assests/icons/marker.svg";
import DownIcon from "../../public/assests/icons/angle-small-down.svg";
import SearchIcon from "../../public/assests/icons/search.svg";
import PhoneIcon from "../../public/assests/icons/phone-call.svg";
import HeartIcon from "../../public/assests/icons/heart.svg";
import CartIcon from "../../public/assests/icons/shopping-cart.svg";
import PersonIcon from "../../public/assests/icons/user.svg";
import MenuIcon from "../../public/assests/icons/menu.svg";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
const data = [
  "Hyderabad",
  "Karimnagar",
  "Khammam",
  "Adoni",
  "Amaravati",
  "Anantapur",
  "Chandragiri",
  "Chittoor",
  "Dowlaiswaram",
  "Eluru",
];

const index = () => {
  const [map, setMap] = useState(false);
  const [loc, setLoc] = useState("Your Location");
  const [menu, setMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <div className={`${styles.top} ${theme === "dark" ? styles.darkmode : ""}`}>
      <div className="contain">
        <div className={styles.header}>
          <div className={styles.main}>
            <div
              onClick={() => {
                setMenu(!menu);
                // menu
                document.body.style.overflow = "hidden";
                // : (document.body.style.overflow = "hidden");
              }}
              className={styles.menuicon}
            >
              <MenuIcon className={styles.icon} />
            </div>
            <div className={menu ? styles.menublock : null}>
              <ul className={menu ? `${styles.menu}` : `${styles.hide}`}>
                <li className={styles.sp}>
                  Menu
                  <button
                    onClick={() => {
                      setMenu(!menu);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    ✖
                  </button>
                </li>
                <li>Home</li>
                <li>Shop</li>
                <li>Product</li>
                <li>MegaMenu</li>
                <li>Seller</li>
              </ul>
            </div>

            <div className={styles.img}>
              <Link href="/">
                <Image
                  className={styles.image}
                  src="/../public/assests/images/1.png"
                  width={20000}
                  height={700000}
                />
              </Link>
            </div>
          </div>
          <div
            onClick={() => {
              setMap(!map);
              document.body.style.overflow = "hidden";
            }}
            className={styles.location}
          >
            <button className={styles.button}>
              <div className={styles.locicon}>
                <span className={styles.spanloc}>
                  <LocIcon className={styles.Locicon} />
                </span>
                <p className={styles.titles}>{loc}</p>
                <span>
                  <DownIcon className={styles.Arricon} />
                </span>
              </div>
            </button>
          </div>
          {map && (
            <div className={styles.maps}>
              <div className={styles.box} style={{ overflow: "hidden" }}>
                <div className={styles.ourmap}>
                  <p className={styles.title}>Choose your Delivery Location</p>
                  <p className={styles.subtitle}>
                    Enter your address and we will specify the offer for your
                    area.
                  </p>
                  <div className={styles.inputs}>
                    <SearchIcon className={styles.icon} />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Search Your Area"
                    />
                  </div>
                  <div className={styles.listbox}>
                    <h6>Select a Location</h6>
                  </div>
                  <ul>
                    {data.map((each) => {
                      return (
                        <li>
                          <button
                            onClick={() => {
                              setLoc(each);
                              setMap(!map);
                              document.body.style.overflow = "auto";
                            }}
                          >
                            {each}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <div
                    onClick={() => {
                      setMap(!map);
                      document.body.style.overflow = "auto";
                    }}
                    className={styles.close}
                  >
                    <p>✖</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className={styles.location2}
            onClick={() => {
              setMap(!map);
            }}
          >
            <button className={styles.btn}>
              <div className={styles.locicon}>
                <span className={styles.spanloc}>
                  <LocIcon className={styles.Locicon} />
                </span>
              </div>
            </button>
            {map && (
              <div className={styles.maps}>
                <div className={styles.box}>
                  <div className={styles.ourmap}>
                    <p className={styles.title}>
                      Choose your Delivery Location
                    </p>
                    <p className={styles.subtitle}>
                      Enter your address and we will specify the offer for your
                      area.
                    </p>
                    <div className={styles.inputs}>
                      <SearchIcon className={styles.icon} />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Search Your Area"
                      />
                    </div>
                    <div className={styles.listbox}>
                      <h6>Select a Location</h6>
                    </div>
                    <ul>
                      {data.map((each) => {
                        return (
                          <li>
                            <button
                              onClick={() => {
                                setLoc(each);
                                setMap(!map);
                              }}
                            >
                              {each}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                    <div
                      onClick={() => {
                        setMap(!map);
                      }}
                      className={styles.close}
                    >
                      <p>✖</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="i'm Searching For....." />
            <span className={styles.sispan}>
              <SearchIcon className={styles.searchicon} />
            </span>
          </div>
          <div className={styles.icons}>
            <ul className={styles.outter}>
              <li>
                <Link href="#">
                  <span>
                    <PhoneIcon className={styles.icon} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>
                    <HeartIcon className={styles.icon} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className={styles.cart}>
                    <CartIcon className={styles.icon} />
                    <div className={styles.count}>
                      <p>2</p>
                    </div>
                  </span>
                </Link>
              </li>
              <li className={styles.profile}>
                <Link href="#">
                  <span>
                    <PersonIcon className={styles.icon} />
                  </span>
                </Link>
                <ul
                  className={`${styles.inner} ${
                    theme === "dark" ? styles.darkmode : ""
                  }`}
                >
                  <li>
                    <Link href="/login">Log In</Link>
                  </li>
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                  <li>
                    <Link href="/forgot">Forget Password</Link>
                  </li>
                  <li>
                    <Link href="/about"> About Us</Link>
                  </li>
                  <li>
                    <Link href="/application">Application Form</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link href="#" className={styles.person}>
              <span>
                <PersonIcon className={styles.icon} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
