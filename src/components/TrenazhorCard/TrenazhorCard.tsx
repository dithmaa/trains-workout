import React from "react";
import styles from "./TrenazhorCard.module.scss";
type Sizes = {
  id: number;
  equipment_id: number;
  detail_id: number;
  value: string;
};
interface TrenazhorCardProps {
  picture: string;
  title: string;
  sizes: Sizes[];
}
export const TrenazhorCard: React.FC<TrenazhorCardProps> = ({
  picture,
  title,
  sizes,
}) => {
  const [activeSizes, setActiveSizes] = React.useState(
    Array(sizes.length).fill(false)
  );
  const handleActiveSizes = (index: number) => {
    const newActiveSizes = activeSizes.map((item, key) => {
      if (key === index) {
        return true;
      } else {
        return false;
      }
    });
    setActiveSizes(newActiveSizes);
  };

  return (
    <div className={styles.root}>
      <div className={styles.root__top}>
        <div className={styles.root__picture}>
          <img src={picture} alt="Фото тренажера" />
        </div>
        <div className={styles.root__title}>{title}</div>
      </div>
      <div className={styles.root__sizes}>
        {sizes.map((item, key) => {
          return (
            <div
              key={key}
              className={
                styles.root__size +
                ` ${activeSizes[key] === true && styles.root_active} `
              }
              onClick={() => handleActiveSizes(key)}
            >
              {item.value.split(" ")[0]}
            </div>
          );
        })}
      </div>
      <span className={styles.root__text}>Шаг веса в тренажере</span>
    </div>
  );
};
