import styles from './Right.module.scss';
import Button from '../Button'
import Trend from './Trending'
const index = () => {
  return (
    <div className={styles.contain}>
    <div className={styles.main}>
      <div className={styles.box}>
        <p className={styles.colortext}>Organic</p>
        <p className={styles.textColor}>FRESH</p>
        <p className={styles.text}>VEGETABLES</p>
        <p className={styles.dis}>Super Offer to 50% Off</p>
        <div className={styles.btn}>
        <Button name="Shop Now" />
        </div>
      </div>
    </div>
    <div className={styles.trend}>
      <Trend/>
    </div>
    </div>
  )
}

export default index
