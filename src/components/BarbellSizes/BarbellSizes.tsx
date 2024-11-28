import React from "react";
import styles from "./BarbellSizes.module.scss";

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
interface BarbellSizesProps {
  details: Detail[]; // Массив объектов с типом Detail
}

export const BarbellSizes: React.FC<BarbellSizesProps> = ({ details }) => {
  const weights = ["1,25 кг", "2,5 кг", "5 кг", "10 кг", "15 кг", "20 кг"];
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
      {details && <h2 className="main-title">{details[0].name}</h2>}
      {details &&
        details[0].options.map((weight, index) => (
          <div className={styles.root__circle} key={index}>
            <div
              className={`${styles.root__item} ${
                activeIndexes.includes(index) ? "active" : ""
              }`}
              onClick={() => handleClick(index)} // Обработчик клика
            ></div>
            {weight.value}
          </div>
        ))}
    </div>
  );
};
