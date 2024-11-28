import styles from "./GriphSizes.module.scss";
import { ReactComponent as GrayGriph } from "../../assets/img/griph-gray.svg";
import { ReactComponent as GreenGriph } from "../../assets/img/griph-green.svg";
import React from "react";

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
export const GriphSizes: React.FC<BarbellSizesProps> = ({ details }) => {
  const griphSizes = [10, 20];
  const [activeGriph, setActiveGriph] = React.useState([true, false]);
  const handleActiveGriph = (index: number) => {
    setActiveGriph((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };
  return (
    <div className={styles.root}>
      {details && <h2 className="main-title">{details[1].name}</h2>}
      {details &&
        details[1].options.map((item, key) => {
          return (
            <div
              key={key}
              className={
                styles.root__item +
                ` ${activeGriph[key] === true && styles.root_active}`
              }
              onClick={() => handleActiveGriph(key)}
            >
              <span>{item.value}</span>
              {activeGriph[key] ? <GreenGriph /> : <GrayGriph />}
            </div>
          );
        })}
    </div>
  );
};
