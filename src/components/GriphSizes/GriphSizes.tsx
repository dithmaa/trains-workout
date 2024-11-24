import styles from "./GriphSizes.module.scss";
import { ReactComponent as GrayGriph } from "../../assets/img/griph-gray.svg";
import { ReactComponent as GreenGriph } from "../../assets/img/griph-green.svg";
import React from "react";
export const GriphSizes = () => {
  const griphSizes = [10, 20];
  const [activeGriph, setActiveGriph] = React.useState([true, false]);
  const handleActiveGriph = (index: number) => {
    setActiveGriph((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };
  return (
    <div className={styles.root}>
      {griphSizes.map((item, key) => {
        return (
          <div
            className={
              styles.root__item + ` ${activeGriph[key] === true && "active"}`
            }
            onClick={() => handleActiveGriph(key)}
          >
            <span>{item} кг</span>
            {activeGriph[key] ? <GreenGriph /> : <GrayGriph />}
          </div>
        );
      })}
    </div>
  );
};