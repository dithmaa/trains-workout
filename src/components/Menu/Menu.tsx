import userIcon from "../../assets/img/menu/user-icon.svg";
import moreIcon from "../../assets/img/menu/more-icon.svg";
import styles from "./Menu.module.scss";
export const Menu = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.root__item + " " + styles.root__item__active}>
          <img src={userIcon} alt="user icon" />
          <span>Тренировки</span>
        </div>
        <div className={styles.root__item}>
          <img src={moreIcon} alt="more icon" />
          <span>Еще</span>
        </div>
      </div>
    </div>
  );
};
