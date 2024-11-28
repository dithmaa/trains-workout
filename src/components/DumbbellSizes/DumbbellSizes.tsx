import React from "react";
import styles from "./DumbbellSizes.module.scss";

// Тип для вложенного объекта options
interface Size {
  id: number;
  equipment_id: number;
  detail_id: number;
  value: string;
}

// Тип для основного объекта details
interface Detail {
  id: number;
  equipment_id: number;
  title_photo: string | null; // Если фото отсутствует, оно null
  name: string;
  type: string;
  options: Size[]; // Вложенный массив с типом Size
}

// Тип для пропсов компонента
interface DumbbellSizesProps {
  details: Detail[]; // Массив объектов с типом Detail
}
export const DumbbellSizes: React.FC<DumbbellSizesProps> = ({ details }) => {
  const [activeIndexes, setActiveIndexes] = React.useState<number[]>([0]); // Индекс активного элемента
  const handleClick = (index: number) => {
    setActiveIndexes(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Убираем индекс
          : [...prev, index] // Добавляем индекс
    );
  };
  return (
    <div className={styles.root}>
      {details &&
        details[0].options.map((weight, index) => (
          <div
            key={index}
            className={`${styles.root__item} ${
              activeIndexes.includes(index) ? "active" : ""
            }`}
            onClick={() => handleClick(index)} // Обработчик клика
          >
            {weight.value}
          </div>
        ))}
    </div>
  );
};
