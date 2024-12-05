import styles from "./Workout.module.scss";
interface WorkoutProps {
  id: number;
  title: string;
  image: string;
  describtion: string;
  trainingId: number;
}
export const Workout: React.FC<WorkoutProps> = ({
  title,
  image,
  id,
  trainingId,
}) => {
  // console.log(id + " " + trainingId);
  const link = `https://t.me/FitGuid_bot?start=exercize-${trainingId}-${id}`;

  return (
    <a href={link} className={styles.root}>
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
    </a>
  );
};
