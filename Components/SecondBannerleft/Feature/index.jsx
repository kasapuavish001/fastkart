import Image from "next/image";
import styles from "./feature.module.scss";
import { useTheme } from "next-themes";
const index = (props) => {
  const {theme} = useTheme();
  return (
    <div className={`${styles.main} ${theme === 'dark' && styles.dark}`}>
      <div className={styles.imgbox}>
        <Image className={styles.img} src={props.url} width={10000} height={10000} />
      </div>
      <h4>{props.date}</h4>
      <h2>{props.name}</h2>
    </div>
  );
};

export default index;
