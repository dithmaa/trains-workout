import styles from "./Plaque.module.scss";
import rightArrow from "../../assets/img/right-arrow.svg";
import { Link } from "react-router-dom";
interface PlaqueProps {
  title: string;
}
export const Plaque: React.FC<PlaqueProps> = ({ title }) => {
  return (
    <Link to="#" className={styles.root}>
      <div className={styles.root__title}>{title}</div>
      <div className={styles.root__days}>
        <span>30 дней</span>

        <img src={rightArrow} alt="right-arrow" />
      </div>
    </Link>
  );
};
