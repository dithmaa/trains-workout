import React from "react";
import { TopNav } from "../TopNav/TopNav";
import { InventoryPlace } from "../InventoryPlace/InventoryPlace";
interface InventoryProps {
  inventory: any;
}
export const Inventory: React.FC<InventoryProps> = ({ inventory }) => {
  return (
    <div className="inventory">
      <TopNav title={"Инвентарь (из фронта)"} linkPath="/equipments" />
      <InventoryPlace details={inventory.details} />
    </div>
  );
};
