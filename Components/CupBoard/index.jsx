"use client";

import { useTheme } from "next-themes";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from '../../public/assests/images/mainitems/item1.png';
import img2 from '../../public/assests/images/mainitems/item2.png';
import img3 from '../../public/assests/images/mainitems/item3.png';
import SingleItem from "../SingleItem";
import styles from "./cupboard.module.scss";
const index = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
                breakpoint: 600,
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
    const { theme } = useTheme();
    return (
        <div className={`${styles.contain} ${theme === "dark" && styles.dark}`}>
            <p className={styles.title}>Food Cupboard</p>
            <p className={styles.desc}>
                A virtual assistant collects the products from your list
            </p>
            <div className={styles.main}>
                <Slider {...settings}>
                    <div className={styles.block}>
                        <SingleItem
                            img={img1}
                            className={styles.side}
                        />
                    </div>
                    <div className={styles.block}>
                        <SingleItem
                            img={img2}
                            className={styles.side}
                        />
                    </div>
                    <div className={styles.block}>
                        <SingleItem
                            img={img3}
                            className={styles.side}
                        />
                    </div>
                    <div className={styles.block}>
                        <SingleItem
                            img={img1}
                            className={styles.side}
                        />
                    </div>
                    <div className={styles.block}>
                        <SingleItem
                            img={img2}
                            className={styles.side}
                        />
                    </div>
                    <div className={styles.block}>
                        <SingleItem
                            img={img3}
                            className={styles.side}
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default index;
