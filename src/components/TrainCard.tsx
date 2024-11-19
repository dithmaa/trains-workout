import classNames from "classnames";
import leftArrow from "../assets/img/train-cards/left-arrow.svg";
import timeIcon from "../assets/img/train-cards/time-icon.svg";

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
    <div
      className={classNames("train-card", {
        "train-card-today hasOrnament": index === 0,
        hasOrnament: index === 3,
      })}
    >
      <div className="train-card__img">
        {image !== "none" && (
          <img src={image} alt={`train-card-image-${index}`} />
        )}
      </div>
      <div className="train-card__title">{title}</div>
      <p>{describtion}</p>
      <div className="train-card__duration">
        <img src={timeIcon} alt="time" />
        <span>{duration}</span>
      </div>
      {index === 0 && (
        <div className="train-card-btn main-btn">
          <img src={leftArrow} alt="arrow" />
          <span>Начать</span>
        </div>
      )}
    </div>
  );
};
