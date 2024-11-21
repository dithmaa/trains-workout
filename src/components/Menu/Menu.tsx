import userIcon from "../../assets/img/menu/user-icon.svg";
import moreIcon from "../../assets/img/menu/more-icon.svg";
import styles from "./Menu.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";

interface MenuProps {
  active: number;
}
export const Menu: React.FC<MenuProps> = ({ active }) => {
  const menuTitles = ["Тренировки", "Еще"];
  const menuIcons = [userIcon, moreIcon];
  const menuLinks = ["/", "/more"];
  return (
    <div className={styles.root}>
      <div className="container">
        {menuTitles.map((item, key) => {
          return (
            <Link
              key={key}
              to={menuLinks[key]}
              className={classNames(styles.root__item, {
                [styles.root__item__active]: active === key,
              })}
            >
              <img src={menuIcons[key]} alt="user icon" />
              <span>{item}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
