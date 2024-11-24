import { useLocation } from "react-router-dom";
import {
  BarbellSizes,
  DumbbellSizes,
  GriphSizes,
  TopNav,
} from "../../../components";
interface EquipmentPageProps {
  title: string;
  topNavTitle: string;
}
export const EquipmentPage: React.FC<EquipmentPageProps> = ({
  title,
  topNavTitle,
}) => {
  const location = useLocation();

  const pageName = location.pathname.split("/")[2];

  return (
    <div className="container">
      <TopNav title={topNavTitle} id={0} />
      <h2 className="main-title">{title}</h2>
      {pageName === "dumbbells" && <DumbbellSizes />}
      {pageName === "barbells" && <BarbellSizes />}
      {pageName === "barbells" && <GriphSizes />}
    </div>
  );
};
