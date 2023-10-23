import styles from "./slider.module.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useTheme } from "next-themes";
import Image from "next/image";
const data = [
  [
    {
      id: 1,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/11.png",
    },
    {
      id: 2,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/20.png",
    },
    {
      id: 3,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/15.png",
    },
    {
      id: 4,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/19.png",
    },
  ],
  [
    {
      id: 1,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/11.png",
    },
    {
      id: 2,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/20.png",
    },
    {
      id: 3,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/15.png",
    },
    {
      id: 4,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/19.png",
    },
  ],
  [
    {
      id: 1,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/11.png",
    },
    {
      id: 2,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/20.png",
    },
    {
      id: 3,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/15.png",
    },
    {
      id: 4,
      name: "Good Life Refined Sunflower Oil",
      price: "$ 10.00",
      weight: "1L",
      url: "/../public/assests/images/secondslider/19.png",
    },
  ],
];

const index = () => {
  var settings = {
    className: "",
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // autoplay: true,
  // speed: 2000,
  // autoplaySpeed: 2000,
  // variableWidth: true,
  const { theme, setTheme } = useTheme();
  return (
    <div className={`${styles.main} ${theme === "dark" && styles.dark}`}>
      <div className={styles.text}>
        <h1>Our Best Seller</h1>
        <p>A virtual assistant collects the products from your list</p>
      </div>

      <Slider {...settings}>
        {data.map((each) => {
          return (
            <div className={styles.outer}>
              <div className={styles.block} style={{ width: "380px" }}>
                <ul>
                  {each.map((e) => {
                    return (
                      <li>
                        <Image
                          className={styles.img}
                          src={e.url}
                          width={5000}
                          height={5000}
                        />
                        <div className={styles.details}>
                          <h5>{e.name}</h5>
                          <p>{e.weight}</p>
                          <h6>{e.price}</h6>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default index;
