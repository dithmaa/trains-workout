import styles from "./Dues.module.scss";
import rightArrow from "../../assets/img/right-arrow.svg";

export const Dues = () => {
  return (
    <a href="#" className={styles.root}>
      <div className={styles.root__title}>Подписка</div>
      <div className={styles.root__days}>
        <span>30 дней</span>
        <img src={rightArrow} alt="right-arrow" />
      </div>
    </a>
  );
};
