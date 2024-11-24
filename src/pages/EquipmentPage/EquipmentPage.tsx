import { Equipments, TopNav } from "../../components";
import styles from "./EquipmentPage.module.scss";

export const EquipmentPage = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <TopNav trainDate="Настройки оборудования" id={0} />
        <h2 className="main-title">Какое оборудование есть в вашем зале?</h2>
        <Equipments />
      </div>
    </div>
  );
};
