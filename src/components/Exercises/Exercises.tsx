import { ExerciseCard } from "./ExerciseCard/ExerciseCard";
import styles from "./Exercises.module.scss";

interface ExercisesProps {
  id: number;
}
export const Exercises: React.FC<ExercisesProps> = ({ id }) => {
  return (
    <div className={styles.root}>
      <ExerciseCard id={id} />
      <ExerciseCard id={id} />
    </div>
  );
};
