import styles from "./banner.module.scss";
import img from "../../public/assests/images/post1.jpg";
import Image from "next/image";
import Link from "next/link";
import ArrRight from '../../public/assests/icons/arrow-right.svg'
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
const index = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.postbox}>

          <div className={styles.box}>
            <Image className={styles.img} src={props.data.url} width={10000} height={10000}/>
            <div className={styles.text}>
            <p className={styles.dis}>{props.data.dic}</p>
            <p className={styles.title}>{props.data.title}</p>
            <p className={styles.subtitle}>{props.data.subtitle}</p>
            </div>
            <button className={styles.btn}>
            <Link href="#">Shop Now <ArrRight className={styles.icon}/> </Link>
            </button>
          </div>
      </div>
    </div>
  );
};

export default index;
