import { InventoryPlace } from "../InventoryPlace/InventoryPlace";
import { useGetEquipmentsQuery } from "../../store/equipmentsApi";

export const Inventory = () => {
  const { data } = useGetEquipmentsQuery({});
  const inventory = data.equipments[0];
  const details = inventory.details;

  return (
    <div className="inventory">
      <InventoryPlace items={details} />
    </div>
  );
};
