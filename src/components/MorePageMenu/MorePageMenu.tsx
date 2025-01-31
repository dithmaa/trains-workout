import styles from "./MorePageMenu.module.scss";
import { ReactComponent as RightArrow } from "../../assets/img/right-arrow.svg";
import { Link } from "react-router-dom";
export const MorePageMenu = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.root__item}>
        <Link to="/equipments">
          <span>
            <span className={styles.root__icon}>⚙️</span>
            <span>Настроить оборудование</span>
          </span>
          <RightArrow />
        </Link>
      </li>
      <li className={styles.root__item}>
        <a href="https://t.me/FitGuid_bot?start=support-manager">
          <span>
            <span className={styles.root__icon}>👨‍💻</span>
            <span>Написать в поддержку</span>
          </span>

          <RightArrow />
        </a>
      </li>
      <li className={styles.root__item}>
        <a href="https://t.me/FitGuid_bot?start=support-trainer">
          <span>
            <span className={styles.root__icon}>👋</span>
            <span>Написать тренеру</span>
          </span>

          <RightArrow />
        </a>
      </li>
    </ul>
  );
};
