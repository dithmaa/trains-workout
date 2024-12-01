import React from "react";
import { TopNav } from "../TopNav/TopNav";
import { TrenazhorPlace } from "../TrenazhorPlace/TrenazhorPlace";
import { Preloader } from "../Preloader/Preloader";
import { useGetEquipmentsQuery } from "../../store/equipmentsApi";

export const Trenazhor = () => {
  const { data, isLoading } = useGetEquipmentsQuery({});
  if (isLoading) return <Preloader />;
  const trenazhors = data.equipments[1];
  const details = trenazhors.details;

  return (
    <div className="trenazhor">
      <TopNav
        title={trenazhors ? trenazhors.title : "name"}
        linkPath="/equipments"
      />
      {details && (
        <h2 className="main-title">
          {details.title ? details.title : "Какие тренажеры есть в вашем зале?"}
        </h2>
      )}
      <TrenazhorPlace details={details} />
    </div>
  );
};
