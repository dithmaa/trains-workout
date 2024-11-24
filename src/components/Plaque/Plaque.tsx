import styles from "./Plaque.module.scss";
import { ReactComponent as RightArrow } from "../../assets/img/right-arrow.svg";
import { Link } from "react-router-dom";
interface PlaqueProps {
  title: string;
  text?: string;
  link?: string;
}
export const Plaque: React.FC<PlaqueProps> = ({ title, text, link = "" }) => {
  return (
    <Link to={link} className={styles.root}>
      <div className={styles.root__title}>{title}</div>
      <div className={styles.root__days}>
        <span>{text}</span>
        <RightArrow />
      </div>
    </Link>
  );
};
