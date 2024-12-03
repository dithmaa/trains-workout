import { Workout } from "./Workout/Workout";
interface Exercise {
  id: number;
  title: string;
  description: string | null;
  title_photo: string; // URL строки
  video_file: string; // URL строки
  from_trainer: string | null;
  weight: number | null;
  repetitions: number;
  of_date: string; // ISO строка
  approaches: number;
  duration: number; // Длительность упражнения в минутах
  break_duration: number; // Перерыв между подходами в минутах
  load_cns: number; // Нагрузка на ЦНС (0–100%)
}
// Типизация для пропсов компонента Workouts
interface WorkoutsProps {
  exercizes: Exercise[]; // Массив объектов Exercise
}

export const Workouts: React.FC<WorkoutsProps> = ({ exercizes }) => {
  console.log(exercizes);

  return (
    <div className="workouts">
      {exercizes.map((item: any, index: number) => (
        <Workout
          describtion={item.description}
          title={item.title}
          image={item.title_photo}
          key={index}
        />
      ))}
    </div>
  );
};
