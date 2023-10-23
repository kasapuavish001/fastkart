import Image from "next/image";
import styles from "./trending.module.scss";
import { useTheme } from "next-themes";
const data = [
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
];
// import img from '../../../public/assests/images/profile.jpg'
const index = () => {
  const {theme} = useTheme();
  return (
    <>
      <div className={`${styles.main} ${theme === "dark" && styles.dark}`}>
        <ul>
        <h1 className={styles.heading}>Trending Products</h1>
          {data.map((each) => {
            return (
              <li>
                <div className={styles.box}>
                  <Image
                    className={styles.img}
                    src={each.url}
                    width={100000}
                    height={10000}
                  />
                </div>
                <div className={styles.details}>
                  <p className={styles.title}>{each.name}</p>
                  <p className={styles.weight}>{each.weight}</p>
                  <p className={styles.price}>{each.price}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`${styles.comment} ${theme === "dark" && styles.dark}`}>
        <p className={styles.title}>Customer Comment</p>
        <div className={styles.reviewbox}>
          <div className={styles.contain}>
            <h3>We Care About Our Customer Experience</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <div className={styles.profile}>
            <div className={styles.img}>
              <Image src="/../public/assests/images/profile.jpg"className={styles.image} width={50} height={50}/>
            </div>
            <div className={styles.details}>
              <h3>Tina Mcdonnale</h3>
              <h5>Sale Manager</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
