import { TrenazhorCard } from "../";
import trenazhorImg1 from "../../assets/img/trenazhors/1.png";
import trenazhorImg2 from "../../assets/img/trenazhors/2.png";
import styles from "./TrenazhorPlace.module.scss";
export const TrenazhorPlace = () => {
  return (
    <div className="trenzahor-place">
      <TrenazhorCard
        picture={trenazhorImg1}
        title="Горизонтальная тяга"
        sizes={["2,5", "5", "10"]}
      />
      <TrenazhorCard
        picture={trenazhorImg2}
        title="Тренажер для разведения 
ног"
        sizes={["2,5", "5", "10"]}
      />
    </div>
  );
};
