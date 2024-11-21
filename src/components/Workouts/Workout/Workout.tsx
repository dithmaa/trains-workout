import styles from "./Workout.module.scss";
import workoutImg1 from "../../../assets/img/workouts/1.png";

export const Workout = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.root__title}>Тренировка #1</h3>
      <div className={styles.root__content}>
        <div className={styles.root__picture}>
          <img src={workoutImg1} alt="" />
        </div>
        <div className={styles.root__text}>
          Найдете баланс в тренировках — найдете его в жизни. В этом поможет
          ком..
        </div>
      </div>
    </div>
  );
};
