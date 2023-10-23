"use client";

import styles from "./secondleft.module.scss";
import Button from "../Button";
import Sliders from "./Slider";
import Section from "./Section";
import Feature from "./Feature";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "next-themes";
const index = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 2,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  const {theme} = useTheme();
  return (
    <div className={`${styles.main} ${theme === "dark" && styles.dark}`}>
      <div className={`${styles.box} ${styles.one}`}>
        <p className={styles.title}>Get $3 Cashback! Min Order of $30</p>
        <div className={styles.textbox}>
          <p>Use Code : GROCERY1920</p>
        </div>
      </div>
      <div className={`${styles.box} ${styles.two}`}>
        <p className={styles.colortext}>Get Ready To</p>
        <p className={styles.text}>TAKE ON THE DAY!</p>
        <p className={styles.para}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate.
        </p>
        <div className={styles.btn}>
          <Button name="Shop Now" />
        </div>
      </div>
      <div className={`${styles.box} ${styles.three}`}>
        <p className={styles.redtext}>20% Off</p>
        <p className={styles.greentext}>SUMMRY</p>
        <p className={styles.text}>Product</p>
      </div>
      <Sliders />
      <Section />
      <div className={styles.featureblock}>
        <p className={styles.title}>Featured Blog</p>
        <p className={styles.desc}>
          A virtual assistant collects the products from your list
        </p>
        <div className={styles.display}>
          <Slider {...settings}>
            <div className={styles.boxs}>
              <Feature
                url="/../public/assests/images/dis1.jpg"
                date="20 March, 2022"
                name="Fresh Vegetable Online"
              />
            </div>
            <div className={styles.boxs}>
              <Feature
                url="/../public/assests/images/dis2.jpg"
                date="10 April, 2022"
                name="Fresh Combo Fruit"
              />
            </div>
            <div className={styles.boxs}>
              <Feature
                url="/../public/assests/images/dis1.jpg"
                date="20 March, 2022"
                name="Fresh Vegetable Online"
              />
            </div>
            <div className={styles.boxs}>
              <Feature
                url="/../public/assests/images/dis2.jpg"
                date="10 April, 2022"
                name="Fresh Combo Fruit"
              />
            </div>
            <div className={styles.boxs}>
              <Feature
                url="/../public/assests/images/dis1.jpg"
                date="20 March, 2022"
                name="Fresh Vegetable Online"
              />
            </div>
            <div className={styles.boxs}>
              <Feature
                url="/../public/assests/images/dis2.jpg"
                date="10 April, 2022"
                name="Fresh Combo Fruit"
              />
            </div>
            <div className={styles.boxs}>
              <Feature
                url="/../public/assests/images/dis1.jpg"
                date="20 March, 2022"
                name="Fresh Vegetable Online"
              />
            </div>
            <div className={styles.boxs}>
              <Feature
                url="/../public/assests/images/dis2.jpg"
                date="10 April, 2022"
                name="Fresh Combo Fruit"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default index;
