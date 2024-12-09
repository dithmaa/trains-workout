import { useState } from "react";
import { Preloader, TopNav } from "../../components";
import { useGetEquipmentsQuery } from "../../store/equipmentsApi";
import pageComponents from "../../constants/"; // Импортируем из constants.ts

export const EquipmentsPage = () => {
  const { data, isLoading } = useGetEquipmentsQuery({});
  const [activePage, setActivePage] = useState(0);

  const handleSetActivePage = (page: number) => {
    setActivePage(page);
  };

  if (isLoading) return <Preloader />;
  const { equipments } = data;

  return (
    <div className="equipments-page">
      <div className="container">
        <TopNav
          activePage={activePage}
          linkPath={"/more"}
          handleSetActivePage={handleSetActivePage}
          title={
            activePage === 0
              ? "Настройки оборудования"
              : equipments[activePage - 1]?.title || "Неизвестная страница"
          }
        />
        {/* Рендерим компонент на основе activePage */}
        {pageComponents(handleSetActivePage, equipments)[activePage]}
      </div>
    </div>
  );
};
