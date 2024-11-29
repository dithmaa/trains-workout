import React from "react";
import { TopNav } from "../TopNav/TopNav";
import { BarbellSizes } from "../BarbellSizes/BarbellSizes";
import { GriphSizes } from "../GriphSizes/GriphSizes";
interface BarbellsProps {
  barbells: any;
}
export const Barbells: React.FC<BarbellsProps> = ({ barbells }) => {
  return (
    <div className="barbells">
      <TopNav
        title={barbells ? barbells.title : "name"}
        linkPath="/equipments"
      />
      <BarbellSizes details={barbells.details} />
      <GriphSizes details={barbells.details} />
    </div>
  );
};
