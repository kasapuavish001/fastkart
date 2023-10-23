"use client";

import styles from "./banner.module.scss";
import Image from "next/image";
import RightArrIcon from "../../public/assests/icons/arrow-right.svg";
import BannerPost from "../BannerPost";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useTheme } from "next-themes";
const index = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          autoplaySpeed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          fade: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data = [
    {
      id: "1",
      url: "/../public/assests/images/post1.jpg",
      dic: "5% OFF",
      title: "Hot Deals on New Items",
      subtitle: "Daily Essentials Eggs & Dairy",
    },
    {
      id: "2",
      url: "/../public/assests/images/post2.jpg",
      dic: "5% OFF",
      title: "Buy More & Save More",
      subtitle: "Fresh Vegetables",
    },
    {
      id: "3",
      url: "/../public/assests/images/post3.jpg",
      dic: "5% OFF",
      title: "Organic Meat Prepared",
      subtitle: "Delivered to Your Home",
    },
    {
      id: "4",
      url: "/../public/assests/images/post4.jpg",
      dic: "5% OFF",
      title: "Buy More & Save More",
      subtitle: "Nuts & Snacks",
    },
  ];
  const { theme } = useTheme();
  return (
    <div className="hey">
      <div className={`${styles.main} ${theme === "dark" && styles.dark}`}>
        <div className={styles.right}>
          <div className={styles.text}>
            <h6>
              Exclusive offer <span>30% Off</span>
            </h6>
            <h1>
              STAY HOME & DELIVERED YOUR <span>DAILY NEEDS</span>
            </h1>
            <p>
              Vegetables contain many vitamins and minerals that are good for
              your health.
            </p>
            <button className={styles.mainbtn}>
              Shop Now <RightArrIcon className={styles.icon} width="20" />
            </button>
          </div>
        </div>
        <div className={styles.left}>
          <div className={`${styles.box} ${styles.one}`}>
            <div className={styles.text}>
              <h2>
                45% <span>OFF</span>
              </h2>
              <h3>Nut Collection</h3>
              <p>We deliver organic vegetables & fruits</p>
              <button className={styles.button}>
                Shop Now <RightArrIcon className={styles.icon} width="20" />
              </button>
            </div>
          </div>
          <div className={`${styles.box} ${styles.two}`}>
            <div className={styles.text}>
              <h4>Healthy Food</h4>
              <h5>Organic Market</h5>
              <p>Start your daily shopping with some...</p>
              <button className={styles.button}>
                Shop Now <RightArrIcon width="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.move}>
        <Slider {...settings}>
          {data.map((each) => {
            return (
              <div className={styles.slider}>
                <BannerPost data={each} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default index;
{
}
