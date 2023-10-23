import styles from "./section.module.scss";
import Button from "../../Button";
import { useTheme } from "next-themes";
const index = () => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.main} ${theme === 'dark' && styles.dark}`}>
      <div className={styles.box}>
        <p className={styles.colortext}>SUMMER</p>
        <p className={styles.title}>VEGETABLE</p>
        <p className={styles.dis}>Save up to 5% OFF</p>
        <div className={styles.btn}>
        <Button name="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default index;
