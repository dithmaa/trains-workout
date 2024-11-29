import { DumbbellSizes } from "../DumbbellSizes/DumbbellSizes";
import { TopNav } from "../TopNav/TopNav";

// Тип для каждого объекта в массиве `options`
interface Option {
  id: number;
  equipment_id: number;
  detail_id: number;
  value: string;
}

// Тип для объектов в массиве `details`
interface Detail {
  id: number;
  equipment_id: number;
  title_photo: string | null;
  name: string;
  type: string;
  options: Option[];
}

// Тип для основного объекта
interface Dumbbells {
  id: number;
  title: string;
  title_photo: string; // URL строки
  details: Detail[]; // Массив объектов Detail
}

// Тип для пропса компонента
interface DumbbellsProps {
  dumbbells: Dumbbells;
}

export const Dumbbells: React.FC<DumbbellsProps> = ({ dumbbells }) => {
  return (
    <div className="dumbbells">
      <TopNav
        title={dumbbells ? dumbbells.title : "name"}
        linkPath="/equipments"
      />
      <DumbbellSizes details={dumbbells.details} />
    </div>
  );
};
