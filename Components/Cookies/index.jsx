import { useTheme } from "next-themes";
import Image from "next/image";
import img from "../../public/assests/images/cookie-bar.png";
import styles from "./cookies.module.scss";
const index = (props) => {
    const { theme } = useTheme();
    return (
        <div className={`${styles.main} ${theme === "dark" && styles.dark}`}>
            <h3>
                <Image
                    className={styles.img}
                    src={img}
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
