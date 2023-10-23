"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.scss";
import "../Slider/slider.css";
import Image from "next/image";
import BreakfastIcon from "../../public/assests/images/sliderimg/breakfast.svg";
import CupIcon from "../../public/assests/images/sliderimg/cup.svg";
import FrozenIcon from "../../public/assests/images/sliderimg/frozen.svg";
import MeatIcon from "../../public/assests/images/sliderimg/meats.svg";
import MIlkIcon from "../../public/assests/images/sliderimg/milk.svg";
import PetIcon from "../../public/assests/images/sliderimg/pet.svg";
import VegetableIcon from "../../public/assests/images/sliderimg/vegetable.svg";

import { useTheme } from "next-themes";
const index = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dotsClass: `slick-dots ${styles.dots}`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const{theme} = useTheme();
  return (
    <>
      <div className={`${styles.main} ${theme === "dark" && styles.dark}`}>
        <p className={styles.title}>Bowse By Categories</p>
        <p className={styles.desc}>Top Categories Of The Week</p>
        <div className={styles.sliders}>
          <Slider {...settings}>
            <div style={{ width: 150 }} className={styles.box}>
              <div className={styles.block}>
                <BreakfastIcon className={styles.icon} />
                <h5>BreakFast</h5>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.block}>
                <CupIcon className={styles.icon} />
                <h5>Coffee</h5>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.block}>
                <FrozenIcon className={styles.icon} />
                <h5>Frozen</h5>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.block}>
                <MeatIcon className={styles.icon} />
                <h5>Meat</h5>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.block}>
                <MIlkIcon className={styles.icon} />
                <h5>Milk</h5>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.block}>
                <PetIcon className={styles.icon} />
                <h5>Pet</h5>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.block}>
                <VegetableIcon className={styles.icon} />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default index;
