import styles from "./Plaque.module.scss";
import { ReactComponent as RightArrow } from "../../assets/img/right-arrow.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/close-icon.svg";
import { Link } from "react-router-dom";
interface PlaqueProps {
  title: string;
  text?: string;
  link?: string;
  isTriggered?: boolean;
  onClick?: () => void;
}
export const Plaque: React.FC<PlaqueProps> = ({
  title,
  text,
  link = "",
  isTriggered,
  onClick,
}) => {
  return (
    <Link to={link} className={styles.root} onClick={onClick}>
      {isTriggered && (
        <div className={styles.root__green}>
          <CloseIcon width={18} height={18} />
          <span>Дальше вернитесь в чат с ботом</span>
        </div>
      )}
      <div className={styles.root__title}>{title}</div>
      <div className={styles.root__days}>
        <span>{text}</span>
        <RightArrow />
      </div>
    </Link>
  );
};
