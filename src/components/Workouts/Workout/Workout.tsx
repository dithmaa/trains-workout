import styles from "./Workout.module.scss";
import workoutImg1 from "../../../assets/img/workouts/1.png";
interface WorkoutProps {
  title: string;
  image: string;
}
export const Workout: React.FC<WorkoutProps> = ({ title, image }) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>{title}</h3>
      <div className={styles.root__content}>
        <div className={styles.root__picture}>
          <img src={image} alt="" />
        </div>
        <div className={styles.root__text}>
          Найдете баланс в тренировках — найдете его в жизни. В этом поможет
          ком..
        </div>
      </div>
    </div>
  );
};
