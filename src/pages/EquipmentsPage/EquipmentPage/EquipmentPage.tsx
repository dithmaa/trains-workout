import { useLocation } from "react-router-dom";
import {
  Barbells,
  Dumbbells,
  InventoryPlace,
  TopNav,
} from "../../../components";

import { useSelector } from "react-redux";
import { TrenazhorPlace } from "../../../components/TrenazhorPlace/TrenazhorPlace";
import { Trenazhor } from "../../../components/Trenazhor/Trenazhor";
import { Inventory } from "../../../components/Inventory/Inventory";
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
  const { trenazhors } = useSelector((state: any) => state.equipments);

  const pageName = location.pathname.split("/")[2];

  return (
    <div className="container">
      {pageName === "dumbbells" && <Dumbbells dumbbells={dumbbells} />}
      {pageName === "barbells" && <Barbells barbells={barbells} />}
      {pageName === "trenazhor" && <Trenazhor trenazhors={trenazhors} />}
      {pageName === "inventory" && <Inventory inventory={inventory} />}
    </div>
  );
};
