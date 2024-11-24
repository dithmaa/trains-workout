import styles from "./Equipments.module.scss";

import dumbbellImg from "../../assets/img/equipments/dumbbell.png";
import barbellImg from "../../assets/img/equipments/barbell.png";
import trenazhorImg from "../../assets/img/equipments/exercise-machine.png";
import inventoryImg from "../../assets/img/equipments/inventory.png";

export const Equipments = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__item}>
        <div className={styles.root__picture}>
          <img src={dumbbellImg} alt="Гантеля" />
        </div>
        <span>Гантели</span>
      </div>
      <div className={styles.root__item}>
        <div className={styles.root__picture}>
          <img src={barbellImg} alt="Штанги" />
        </div>
        <span>Штанги</span>
      </div>
      <div className={styles.root__item}>
        <div className={styles.root__picture}>
          <img src={trenazhorImg} alt="Тренажеры" />
        </div>
        <span>Тренажеры</span>
      </div>
      <div className={styles.root__item}>
        <div className={styles.root__picture}>
          <img src={inventoryImg} alt="Инвентарь" />
        </div>
        <span>Инвентарь</span>
      </div>
    </div>
  );
};
