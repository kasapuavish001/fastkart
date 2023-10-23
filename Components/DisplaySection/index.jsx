import styles from "./displaysection.module.scss";
import ArrowIcon from "../../public/assests/icons/arrow-right.svg";
import img from "../../public/assests/images/displaysection/chicken.jpg";
import Button from '../Button'
const index = () => {
  return (
    <div className={styles.box}>
      <div className={styles.block}>
        <p className={styles.dis}>50% offer</p>
        <p className={styles.title}>Testy Mushrooms</p>
        <div className={styles.btn}>
        <Button name="Shop Now" />
        </div>
      </div>
      <div className={`${styles.block} ${styles.two}`}>
        <p className={styles.dis}>50% offer</p>
        <p className={styles.title}>Fresh MEAT</p>
        <div className={styles.btn}>
        <Button name="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default index;
