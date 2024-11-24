import React from "react";
import styles from "./BarbellSizes.module.scss";
export const BarbellSizes = () => {
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
      {weights.map((weight, index) => (
        <div className={styles.root__circle} key={index}>
          <div
            className={`${styles.root__item} ${
              activeIndexes.includes(index) ? "active" : ""
            }`}
            onClick={() => handleClick(index)} // Обработчик клика
          ></div>
          {weight}
        </div>
      ))}
    </div>
  );
};
