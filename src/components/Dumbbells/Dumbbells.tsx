import { useGetEquipmentsQuery } from "../../store/equipmentsApi";
import { DumbbellSizes } from "../DumbbellSizes/DumbbellSizes";
import { Preloader } from "../Preloader/Preloader";
import { TopNav } from "../TopNav/TopNav";

export const Dumbbells = () => {
  const { data, isLoading } = useGetEquipmentsQuery({});
  if (isLoading) return <Preloader />;
  const dumbbells = data.equipments[3];
  const details = dumbbells.details;
  return (
    <div className="dumbbells">
      <TopNav title={dumbbells.title} linkPath="/equipments" />
      <DumbbellSizes details={details} />
    </div>
  );
};
