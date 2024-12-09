import styles from "./ExercisesTop.module.scss";
import { ReactComponent as TimeIcon } from "../../../assets/img/train-cards/time-icon.svg";
interface ExercisesTopProps {
  isExercisePage: boolean;
  id: number;
  title: string;
}
export const ExercisesTop: React.FC<ExercisesTopProps> = ({
  isExercisePage,
  id,
  title,
}) => {
  return (
    <div className={styles.root}>
      <h2>{title}</h2>
      {!isExercisePage ? (
        <div className="train-page__duration">
          <TimeIcon />
          <span>{0}</span>
        </div>
      ) : (
        <p style={{ marginTop: "0px" }}>Описание</p>
      )}
    </div>
  );
};
