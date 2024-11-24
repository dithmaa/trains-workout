import exercisesImg1 from "../../../assets/img/exercises/1.jpg";
import { ReactComponent as TimeIcon } from "../../../assets/img/train-cards/time-icon.svg";
import { trainData } from "../../../data/trains";
import { Link } from "react-router-dom";
import styles from "./ExerciseCard.module.scss";

interface ExerciseCardProps {
  id: number;
}
export const ExerciseCard: React.FC<ExerciseCardProps> = ({ id }) => {
  return (
    <Link className={styles.root} to="exercise-page">
      <div className={styles.root_img}>
        {id !== 3 && <img src={exercisesImg1} alt="" />}
      </div>
      <h4 className={styles.root_title}>Скручивания</h4>
      <p>
        Приводим в тонус приводящие мышцы, а также мускулатуру задней части
        бедер 3 похода по 10 повторений
      </p>
      <div className="train-page__duration">
        <TimeIcon />
        <span>{trainData[Number(id)].duration}</span>
      </div>
    </Link>
  );
};
