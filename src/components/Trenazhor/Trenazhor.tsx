import { TrenazhorPlace } from "../TrenazhorPlace/TrenazhorPlace";
import { useGetEquipmentsQuery } from "../../store/equipmentsApi";

export const Trenazhor = () => {
  const { data } = useGetEquipmentsQuery({});
  const trenazhors = data.equipments[1];
  const details = trenazhors.details;

  return (
    <div className="trenazhor">
      <TrenazhorPlace details={details} />
    </div>
  );
};
