import { useLocation } from "react-router-dom";
import {
  BarbellSizes,
  DumbbellSizes,
  GriphSizes,
  Inventory,
  TopNav,
  TrenazhorCard,
} from "../../../components";
import trenazhorImg1 from "../../../assets/img/trenazhors/1.png";
import trenazhorImg2 from "../../../assets/img/trenazhors/2.png";
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
      <TopNav title={topNavTitle} linkPath="/equipments" />
      <h2 className="main-title">{title}</h2>
      {pageName === "dumbbells" && <DumbbellSizes />}
      {pageName === "barbells" && <BarbellSizes />}
      {pageName === "barbells" && <GriphSizes />}
      {/* Тренажеры */}
      {pageName === "trenazhor" && (
        <TrenazhorCard
          picture={trenazhorImg1}
          title="Горизонтальная тяга"
          sizes={["2,5", "5", "10"]}
        />
      )}
      {pageName === "trenazhor" && (
        <TrenazhorCard
          picture={trenazhorImg2}
          title="Горизонтальная тяга"
          sizes={["2,5", "5", "10"]}
        />
      )}
      {pageName === "inventory" && <Inventory />}
    </div>
  );
};
