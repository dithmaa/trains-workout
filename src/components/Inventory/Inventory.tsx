import React from "react";
import { TopNav } from "../TopNav/TopNav";
import { InventoryPlace } from "../InventoryPlace/InventoryPlace";
import { useGetEquipmentsQuery } from "../../store/equipmentsApi";
import { Preloader } from "../Preloader/Preloader";

export const Inventory = () => {
  const { data, isLoading } = useGetEquipmentsQuery({});
  if (isLoading) return <Preloader />;
  const inventory = data.equipments[0];
  const details = inventory.details;

  console.log(inventory);

  return (
    <div className="inventory">
      <TopNav title={inventory.title} linkPath="/equipments" />

      {details && (
        <h2 className="main-title">
          {details.title
            ? details.title
            : "Какое оборудование есть в вашем зале?"}
        </h2>
      )}
      <InventoryPlace details={details} />
    </div>
  );
};
