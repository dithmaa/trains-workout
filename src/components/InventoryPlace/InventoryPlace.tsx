import styles from "./InventoryPlace.module.scss";
import inventoryImg1 from "../../assets/img/inventory/1.png";
import inventoryImg2 from "../../assets/img/inventory/2.png";
import inventoryImg3 from "../../assets/img/inventory/3.png";
import inventoryImg4 from "../../assets/img/inventory/4.png";
import inventoryImg5 from "../../assets/img/inventory/5.png";
import inventoryImg6 from "../../assets/img/inventory/6.png";
import inventoryImg7 from "../../assets/img/inventory/7.png";
import inventoryImg8 from "../../assets/img/inventory/8.png";
import inventoryImg9 from "../../assets/img/inventory/9.png";
import React, { useState } from "react";

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
interface InventoryPlaceSizesProps {
  details: Detail[]; // Массив объектов с типом Detail
}
export const InventoryPlace: React.FC<InventoryPlaceSizesProps> = ({
  details,
}) => {
  console.log(details);

  const inventorys = [
    { id: 1, title: "Скамья", image: inventoryImg1 },
    { id: 2, title: "Степ", image: inventoryImg2 },
    { id: 3, title: "Брусья", image: inventoryImg3 },
    { id: 4, title: "Скакалка", image: inventoryImg4 },
    { id: 5, title: "Наклонная скамья", image: inventoryImg5 },
    { id: 6, title: "Фитбол", image: inventoryImg6 },
    { id: 7, title: "Коврик", image: inventoryImg7 },
    { id: 8, title: "Турник", image: inventoryImg8 },
    { id: 9, title: "Римский стул", image: inventoryImg9 },
  ];

  // Состояние для отслеживания активных элементов
  const [activeItems, setActiveItems] = useState<boolean[]>(
    new Array(inventorys.length).fill(false) // Массив начальных состояний
  );

  const handleToggle = (index: number) => {
    setActiveItems((prev) =>
      prev.map((isActive, i) => (i === index ? !isActive : isActive))
    );
  };

  return (
    <div className={styles.root}>
      {details &&
        details.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.root__item} ${
              activeItems[index] ? styles.root_active : ""
            }`} // Добавляем активный класс, если элемент выбран
            onClick={() => handleToggle(index)} // Обработчик клика
          >
            <div className={styles.root__picture}>
              <img src={String(item.title_photo)} alt={item.name} />
            </div>
            <span className={styles.root__title}>{item.name}</span>
          </div>
        ))}
    </div>
  );
};
