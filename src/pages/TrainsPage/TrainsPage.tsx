import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, Trains } from "../../components";

export const TrainsPage = () => {
  const location = useLocation();
  // Проверка: если путь "/own", скрыть остальные элементы
  const isOwnPage = location.pathname === "/own";
  return (
    <div className="container">
      {/* Здесь рендерятся вложенные маршруты */}
      <Outlet />
      {/* Скрыть Menu и Trains, если мы на странице /own */}
      {!isOwnPage && (
        <>
          <Menu />
          <Trains />
        </>
      )}
    </div>
  );
};
