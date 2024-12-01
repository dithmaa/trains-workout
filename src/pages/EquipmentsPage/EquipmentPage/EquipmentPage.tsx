import { useLocation } from "react-router-dom";
import { Barbells, Dumbbells, Trenazhor, Inventory } from "../../../components";
import { useGetEquipmentsQuery } from "../../../store/equipmentsApi";
import { useEffect, useState } from "react";
interface EquipmentPageProps {}
export const EquipmentPage: React.FC<EquipmentPageProps> = () => {
  const location = useLocation();

  const pageName = location.pathname.split("/")[2];

  return (
    <div className="container">
      {pageName === "dumbbells" && <Dumbbells />}
      {pageName === "barbells" && <Barbells />}
      {pageName === "trenazhor" && <Trenazhor />}
      {pageName === "inventory" && <Inventory />}
    </div>
  );
};
