"use client";
import React, { useState } from "react";
import styles from "./HeaderTop.module.scss";
import Image from "next/image";
import DownIcon from "../../public/assests/icons/angle-small-down.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useTheme } from "next-themes";
const index = () => {
  const { theme, setTheme } = useTheme();
  const [Show, SetShow] = useState(false);
  const [Show1, SetShow1] = useState(false);
  const Options = [
    {
      id: "1",
      name: "English",
      url: "/../public/assests/images/united-kingdom.png",
    },
    {
      id: "2",
      name: "Germany",
      url: "/../public/assests/images/germany.png",
    },
    {
      id: "3",
      name: "Turkish",
      url: "/../public/assests/images/turkish.png",
    },
  ];

  const OptionMoney = [
    {
      id: "1",
      name: "AUD",
    },
    {
      id: "2",
      name: "EUR",
    },
    {
      id: "3",
      name: "CNY",
    },
  ];
  const [SelectedOptions, SetSelectedOptions] = useState("");
  const [SelectedOptionsMoney, SetSelectedOptionsMoney] = useState("");

  const handleShow = () => {
    SetShow(!Show);
  };
  const handleShow1 = () => {
    SetShow1(!Show1);
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    variableHeight: true,
    arrows: false,
    dots: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div
      className={`${styles.main} ${
        theme === "dark" ? styles.darkMode : "null"
      }`}
    >
      <div className="contain">
        <div className={styles.ads}>
          <div className={styles.slider}>
            <Slider {...settings}>
              <div className={styles.text}>
                Wrap new offers/gift every signle day on Weekends.
              </div>
              <div className={styles.text}>
                Something you love is now on sale! <a href="#">Buy Now.</a>
              </div>
            </Slider>
          </div>
          <div className={styles.box}>
            <ul>
              <li className={styles.right}>
                <div className={styles.lan}>
                  <button onClick={handleShow} className={styles.showlist}>
                    <Image
                      className={styles.image}
                      src={
                        SelectedOptions.url
                          ? SelectedOptions.url
                          : "/../public/assests/images/united-states.png"
                      }
                      alt=""
                      width="20"
                      height="20"
                    />
                    <p>
                      {SelectedOptions.name ? SelectedOptions.name : "English"}
                    </p>

                    <DownIcon className={styles.arrow} />
                  </button>

                  {Show && (
                    <ul className={styles.clickcountry}>
                      {Options.map((item) => {
                        return (
                          <li>
                            <button
                              onClick={() => {
                                SetSelectedOptions(item);
                                SetShow(false);
                              }}
                            >
                              <Image
                                className={styles.image}
                                src={item.url}
                                alt=""
                                width="20"
                                height="20"
                              />
                              <p>{item.name}</p>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </li>
              <li className={styles.left}>
                <button onClick={handleShow1} className={styles.left}>
                  <p>{SelectedOptionsMoney ? SelectedOptionsMoney : "USD"}</p>
                  <DownIcon className={styles.arrow} />
                </button>
                {Show1 && (
                  <ul className={styles.langs}>
                    {OptionMoney.map((each) => {
                      return (
                        <button
                          onClick={() => {
                            SetSelectedOptionsMoney(each.name);
                            SetShow1(!Show1);
                          }}
                        >
                          <li>{each.name}</li>
                        </button>
                      );
                    })}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
