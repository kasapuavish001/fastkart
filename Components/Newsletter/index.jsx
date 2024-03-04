import styles from "./newsletter.module.scss";

import { useTheme } from "next-themes";
import Image from "next/image";
import Button from "../../Components/Button";
import Msg from "../../public/assests/icons/envelope.svg";
import img from '../../public/assests/images/madeimg.png';
const index = () => {
    const { theme } = useTheme();
    return (
        <div className={`${styles.main} ${theme === "dark" && styles.dark}`}>
            <div className={styles.block}>
                <div className={styles.box}>
                    <p className={styles.title}>Join Our Newsletter And Get...</p>
                    <p className={styles.color}>$20 discount for your first order</p>
                    <div className={styles.inputbox}>
                        <div className={styles.icon}>
                            <Msg className={styles.myicon} />
                        </div>
                        <div className={styles.input}>
                            <input type="text" />
                        </div>
                        <div className={styles.btn}>
                            <Button name="Subscribe" />
                        </div>
                        <div className={styles.smallbtn}>
                            <button>
                                <p>→</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <Image
                        className={styles.img}
                        src={img}
                        width={10000}
                        height={100000}
                    />
                </div>
            </div>
        </div>
    );
};

export default index;
