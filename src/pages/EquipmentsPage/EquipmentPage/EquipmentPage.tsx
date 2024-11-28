import { useLocation } from "react-router-dom";
import {
  BarbellSizes,
  DumbbellSizes,
  GriphSizes,
  Inventory,
  TopNav,
  TrenazhorCard,
} from "../../../components";
import trenazhorImg1 from "../../../assets/img/trenazhors/1.png";
import trenazhorImg2 from "../../../assets/img/trenazhors/2.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
interface EquipmentPageProps {
  title: string;
  topNavTitle: string;
}
export const EquipmentPage: React.FC<EquipmentPageProps> = ({
  title,
  topNavTitle,
}) => {
  const location = useLocation();
  const { dumbbells } = useSelector((state: any) => state.equipments);
  const { barbells } = useSelector((state: any) => state.equipments);
  const { inventory } = useSelector((state: any) => state.equipments);

  const pageName = location.pathname.split("/")[2];

  return (
    <div className="container">
      {/* Гантели */}
      {pageName === "dumbbells" && (
        <TopNav
          title={dumbbells ? dumbbells.title : "name"}
          linkPath="/equipments"
        />
      )}
      {pageName === "dumbbells" && (
        <DumbbellSizes details={dumbbells.details} />
      )}
      {/* Штанги
      
      
      */}

      {pageName === "barbells" && (
        <TopNav
          title={barbells ? barbells.title : "name"}
          linkPath="/equipments"
        />
      )}

      {pageName === "barbells" && <BarbellSizes details={barbells.details} />}

      {pageName === "barbells" && <GriphSizes details={barbells.details} />}

      {/* Тренажеры */}
      {pageName === "trenazhor" && (
        <TrenazhorCard
          picture={trenazhorImg1}
          title="Горизонтальная тяга"
          sizes={["2,5", "5", "10"]}
        />
      )}
      {pageName === "trenazhor" && (
        <TrenazhorCard
          picture={trenazhorImg2}
          title="Горизонтальная тяга"
          sizes={["2,5", "5", "10"]}
        />
      )}
      {/* Инвентарь */}
      {pageName === "inventory" && <Inventory details={inventory.details} />}
    </div>
  );
};
