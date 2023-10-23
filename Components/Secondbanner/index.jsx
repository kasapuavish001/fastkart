import styles from "./token.module.scss";
import Rightside from "../SecondBannerRight";
import Leftside from "../SecondBannerleft";

const index = () => {
  return (
    <div className={styles.block}>
      <div className={styles.main}>
        <div className={styles.right}>
          <Rightside />
        </div>
        <div className={styles.left}>
          <Leftside />
        </div>
      </div>
    </div>
  );
};

export default index;
