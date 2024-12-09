import { useEffect, useState } from "react";
import { Preloader, TrenazhorCard } from "../";
import { useGetEquipmentsQuery } from "../../store/equipmentsApi";

interface Detail {
  id: number;
  equipment_id: number;
  title_photo: string | null; // Если фото отсутствует, оно null
  name: string;
  type: string;
  options: null; // Вложенный массив с типом Size
}

export const Trenazhor = () => {
  const { data } = useGetEquipmentsQuery({});
  const trenazhors = data.equipments[1];
  const details = trenazhors.details;
  const [isShowPreloader, togglePreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      togglePreloader(false);
    }, 1000);
  }, []);
  return (
    <div className="trenazhor">
      {isShowPreloader && <Preloader />}
      {details.map((item: Detail, key: number) => {
        return (
          <TrenazhorCard
            key={key}
            picture={String(item.title_photo)}
            title={item.name}
            sizes={item.options ?? []}
          />
        );
      })}
    </div>
  );
};
