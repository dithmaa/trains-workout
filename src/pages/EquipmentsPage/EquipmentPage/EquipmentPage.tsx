import { TopNav } from "../../../components";
interface EquipmentPageProps {
  title: string;
  topNavTitle: string;
}
export const EquipmentPage: React.FC<EquipmentPageProps> = ({
  title,
  topNavTitle,
}) => {
  return (
    <div className="container">
      <TopNav title={topNavTitle} id={0} />
      <h2 className="main-title">{title}</h2>
    </div>
  );
};
