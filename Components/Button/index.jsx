import styles from './button.module.scss'
import ArrowIcon from "../../public/assests/icons/arrow-right.svg"
const index = ( props) => {
  return (
    <div>
      <button className={styles.button}>
          {props.name}<ArrowIcon className={styles.icon} />
        </button>
    </div>
  )
}

export default index
