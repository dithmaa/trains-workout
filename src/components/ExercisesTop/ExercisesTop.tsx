import styles from "./ExercisesTop.module.scss";
import timeIcon from "../../assets/img/train-cards/time-icon.svg";
import { trainData } from "../../data/trains";
interface ExercisesTopProps {
  isExercisePage: boolean;
  id: number;
}
export const ExercisesTop: React.FC<ExercisesTopProps> = ({
  isExercisePage,
  id,
}) => {
  return (
    <div className={styles.root}>
      <h2>{trainData[Number(id)].title}</h2>
      {!isExercisePage ? (
        <div className="train-page__duration">
          <img src={timeIcon} alt="time" />
          <span>{trainData[Number(id)].duration}</span>
        </div>
      ) : (
        <p style={{ marginTop: "0px" }}>{trainData[Number(id)].description}</p>
      )}
    </div>
  );
};
