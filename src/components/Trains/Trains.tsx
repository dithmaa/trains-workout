import { useEffect, useState } from "react";
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
  console.log(trainings);

  // Функция для преобразования даты
  function formatScheduleDate(isoDate: string): string {
    const date = new Date(isoDate);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    // Сравниваем только год, месяц и день
    const isToday =
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();

    const isTomorrow =
      date.getFullYear() === tomorrow.getFullYear() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getDate() === tomorrow.getDate();

    if (isToday) {
      return "Сегодня";
    } else if (isTomorrow) {
      return "Завтра";
    }

    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
    }; // Формат: "2 декабря"
    return date.toLocaleDateString("ru-RU", options); // Локализация для русского языка
  }

  return (
    <div className={styles.root}>
      {trainings.map((train, index) => (
        <div key={index}>
          {/* Заголовок даты */}
          <h2 className="trains__title">
            {formatScheduleDate("2024-12-02T18:36:46.455442")}
          </h2>

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
