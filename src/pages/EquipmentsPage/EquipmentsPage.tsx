import { useState } from "react";
import {
  Barbells,
  Dumbbells,
  Equipments,
  Inventory,
  Preloader,
  TopNav,
  Trenazhor,
} from "../../components";
import { useGetEquipmentsQuery } from "../../store/equipmentsApi";
export const EquipmentsPage = () => {
  const { data, isLoading } = useGetEquipmentsQuery({});

  const [activePage, setActivePage] = useState(0);
  const handleSetActivePage = (page: number) => {
    console.log("Вызов");

    setActivePage(page);
  };

  if (isLoading) return <Preloader />;
  const { equipments } = data;

  return (
    <div className={"equipments-page"}>
      <div className="container">
        <TopNav
          activePage={activePage}
          linkPath={"/more"}
          handleSetActivePage={handleSetActivePage}
          title={
            activePage === 0
              ? "Настройки оборудования"
              : equipments[activePage - 1].title
          }
        />
        {activePage === 0 && (
          <div className="equipments-page-content">
            <h2 className="main-title">
              Какое оборудование есть в вашем зале?
            </h2>
            <Equipments
              handleSetActivePage={handleSetActivePage}
              equipments={equipments}
            />
          </div>
        )}
        {activePage === 1 && (
          <div className="equipments-page-content">
            <h2 className="main-title">
              Какое оборудование есть в вашем зале?
            </h2>
            <Inventory />
          </div>
        )}
        {activePage === 2 && (
          <div className="equipments-page-main">
            <h2 className="main-title">Какие тренажеры есть в вашем зале?</h2>
            <Trenazhor />
          </div>
        )}
        {activePage === 3 && (
          <div className="equipments-page-main">
            <Barbells />
          </div>
        )}
        {activePage === 4 && (
          <div className="equipments-page-main">
            <Dumbbells />
          </div>
        )}
      </div>
    </div>
  );
};
