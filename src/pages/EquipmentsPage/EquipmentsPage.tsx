import { Outlet, useLocation } from "react-router-dom";
import { Equipments, TopNav } from "../../components";

export const EquipmentsPage = () => {
  const location = useLocation();
  const isEquipmentPage =
    location.pathname === `/equipments/dumbbells` ||
    location.pathname === `/equipments/barbells` ||
    location.pathname === `/equipments/trenazhor` ||
    location.pathname === `/equipments/inventory`;

  const linkPath = isEquipmentPage ? `/equipments/` : `/more`;
  return (
    <div className={"equipments-page"}>
      {!isEquipmentPage ? (
        <div className="container">
          <TopNav linkPath={linkPath} title="Настройки оборудования" />
          <h2 className="main-title">Какое оборудование есть в вашем зале?</h2>
          <Equipments />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
