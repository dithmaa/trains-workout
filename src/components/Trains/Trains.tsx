import { TrainCard } from "..";
import { trainData } from "../../data/trains";
import styles from "./Trains.module.scss";

type Training = {
  id: number; // Уникальный идентификатор
  sample_type: string; // Тип тренировки (например, "start")
  title_photo: string | null; // URL изображения или null, если отсутствует
  training_sample_id: number; // ID связанного тренировочного шаблона
  title: string; // Название тренировки
  schedule: string; // Дата и время тренировки в формате ISO
};
interface TrainsProps {
  trainings: Training[];
}
export const Trains: React.FC<TrainsProps> = ({ trainings }) => {
  return (
    <div className={styles.root}>
      {trainings.map((train, index) => (
        <div key={index}>
          {/* Заголовок даты */}
          <h2 className="trains__title">15 декабря</h2>

          {/* Карточка тренировки */}
          <TrainCard
            index={index}
            image={String(train.title_photo)}
            describtion={"Описание"}
            duration={String(train.training_sample_id)}
            title={train.title}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};
