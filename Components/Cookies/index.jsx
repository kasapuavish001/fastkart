import styles from "./cookies.module.scss";
import img from "../../public/assests/images/cookie-bar.png";
import Image from "next/image";
import { useTheme } from "next-themes";
const index = (props) => {
  const { theme } = useTheme();
  return (
    <div className={`${styles.main} ${theme === "dark" && styles.dark}`}>
      <h3>
        <Image
          className={styles.img}
          src="/../public/assests/images/cookie-bar.png"
          width={20}
          height={20}
        />
        Cookies !
      </h3>
      <p>We use cookies to make your experience better</p>
      <div className={styles.btngrp}>
        <button
          onClick={() => {
            props.fun(!props.a);
          }}
          className={styles.policy}
        >
          <p>Privacy Policy</p>
        </button>
        <button
          onClick={() => {
            props.fun(!props.a);
          }}
          className={styles.ok}
        >
          <p>OK</p>
        </button>
      </div>
    </div>
  );
};

export default index;
