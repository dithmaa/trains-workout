import React from "react";
import styles from "./DumbbellSizes.module.scss";
export const DumbbellSizes = () => {
  const weights = [
    "1 кг",
    "2 кг",
    "2.5 кг",
    "4 кг",
    "5 кг",
    "6 кг",
    "7 кг",
    "7.5 кг",
    "8 кг",
    "8.5 кг",
    "9 кг",
    "10 кг",
    "11 кг",
    "12 кг",
    "12.5 кг",
  ];
  const [activeIndexes, setActiveIndexes] = React.useState<number[]>([]); // Индекс активного элемента
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
      {weights.map((weight, index) => (
        <div
          key={index}
          className={`${styles.root__item} ${
            activeIndexes.includes(index) ? "active" : ""
          }`}
          onClick={() => handleClick(index)} // Обработчик клика
        >
          {weight}
        </div>
      ))}
    </div>
  );
};
