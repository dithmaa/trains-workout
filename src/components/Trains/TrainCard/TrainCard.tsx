import classNames from "classnames";
import { ReactComponent as LeftArrow } from "../../../assets/img/train-cards/left-arrow.svg";
import { ReactComponent as TimeIcon } from "../../assets/img/train-cards/time-icon.svg";
import styles from "./TrainCard.module.scss";
import { Link } from "react-router-dom";

interface TrainCardProps {
  index: number;
  title: string;
  image: string;
  describtion: string;
  duration: string;
}

export const TrainCard: React.FC<TrainCardProps> = ({
  index,
  title,
  image,
  describtion,
  duration,
}) => {
  return (
    <Link
      to={`/train-page/${index}`}
      className={classNames(styles.root, {
        [styles.today]: index === 0, // Если today тоже из модуля
        [styles.hasOrnament]: index === 3, // Если hasOrnament тоже из модуля
        "today hasOrnament": index === 0, // Для глобальных классов
        hasOrnament: index === 3, // Для глобальных классов
      })}
    >
      <div className={styles.root__img}>
        {image !== "none" && (
          <img src={image} alt={`train-card-image-${index}`} />
        )}
      </div>
      <div className={styles.root__title}>{title}</div>
      {/* <p>{describtion}</p> */}
      {/* <div className={styles.root__duration}>
        <TimeIcon />
        <span>{duration}</span>
      </div> */}
      {index === 0 && (
        <div className={styles.root__btn + " main-btn"}>
          <LeftArrow />
          <span>Начать</span>
        </div>
      )}
    </Link>
  );
};
