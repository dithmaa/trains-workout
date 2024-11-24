import styles from "./MorePageMenu.module.scss";
import { ReactComponent as RightArrow } from "../../assets/img/right-arrow.svg";
export const MorePageMenu = () => {
  return (
    <ul className={styles.root}>
      <li className={styles.root__item}>
        <a href="#">
          <span>
            <span className={styles.root__icon}>⚙️</span>
            <span>Настроить оборудование</span>
          </span>
          <RightArrow />
        </a>
      </li>
      <li className={styles.root__item}>
        <a href="#">
          <span>
            <span className={styles.root__icon}>👨‍💻</span>
            <span>Написать в поддержку</span>
          </span>

          <RightArrow />
        </a>
      </li>
      <li className={styles.root__item}>
        <a href="#">
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
