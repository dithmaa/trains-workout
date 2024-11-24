import { Outlet, useLocation } from "react-router-dom";
import { Equipments, TopNav } from "../../components";

export const EquipmentsPage = () => {
  const location = useLocation();
  const isEquipmentPage =
    location.pathname === `/equipments/dumbbells` ||
    location.pathname === `/equipments/barbells` ||
    location.pathname === `/equipments/trenazhor` ||
    location.pathname === `/equipments/inventory`;

  return (
    <div className={"equipments-page"}>
      {!isEquipmentPage ? (
        <div className="container">
          <TopNav title="Настройки оборудования" id={0} />
          <h2 className="main-title">Какое оборудование есть в вашем зале?</h2>
          <Equipments />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
