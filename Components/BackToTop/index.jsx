"use client";
import styles from "./backbutton.module.scss";
import ArrowIcon from "../../public/assests/icons/angle-small-down.svg";
const index = (porps) => {
  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.btn}>
      {porps.BactToTop && (
        <button onClick={()=>{
            ScrollUp();
            // porps.funs(!porps.BactToTop);
        } }>
          <ArrowIcon className={styles.icon} />
        </button>
      )}
    </div>
  );
};

export default index;
