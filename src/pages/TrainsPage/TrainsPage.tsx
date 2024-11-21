import { Menu, Trains } from "../../components";

export const TrainsPage = () => {
  // Проверка: если путь "/own", скрыть остальные элементы
  return (
    <div className="container">
      <Menu active={0} />
      <Trains />
    </div>
  );
};
