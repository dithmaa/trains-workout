import { BarbellSizes } from "../BarbellSizes/BarbellSizes";
import { GriphSizes } from "../GriphSizes/GriphSizes";
import { Preloader } from "../Preloader/Preloader";
import { useGetEquipmentsQuery } from "../../store/equipmentsApi";

export const Barbells = () => {
  const { data, isLoading } = useGetEquipmentsQuery({});
  if (isLoading) return <Preloader />;

  const barbells = data.equipments[2];
  const details = barbells.details;

  return (
    <div className="barbells">
      <BarbellSizes details={details} />
      <GriphSizes details={details} />
    </div>
  );
};
