import { TrenazhorCard } from "../";
import trenazhorImg1 from "../../assets/img/trenazhors/1.png";
import styles from "./TrenazhorPlace.module.scss";

interface Detail {
  id: number;
  equipment_id: number;
  title_photo: string | null; // Если фото отсутствует, оно null
  name: string;
  type: string;
  options: null; // Вложенный массив с типом Size
}

// Тип для пропсов компонента
interface TrenazhorPlaceProps {
  details: Detail[]; // Массив объектов с типом Detail
}
export const TrenazhorPlace: React.FC<TrenazhorPlaceProps> = ({ details }) => {
  console.log(details);

  return (
    <div className="trenzahor-place">
      {details.map((item, key) => {
        return (
          <TrenazhorCard
            key={key}
            picture={String(item.title_photo)}
            title={item.name}
            sizes={["2,5", "5", "10"]}
          />
        );
      })}
    </div>
  );
};
