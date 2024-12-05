import { useEffect, useState } from "react";
import { TrainCard } from "..";
import styles from "./Trains.module.scss";
import { formatScheduleDate } from "../../hook_functions/hook_functions";

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
  console.log(trainings);
  // Функция для преобразования даты

  return (
    <div className={styles.root}>
      {trainings.map((train, index) => (
        <div key={index}>
          {/* Заголовок даты */}
          <h2 className="trains__title">
            {formatScheduleDate("2024-12-04T18:36:46.455442")}
          </h2>

          {/* Карточка тренировки */}
          <TrainCard
            index={train.id}
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
