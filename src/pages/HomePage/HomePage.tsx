import {
  ContentPlaque,
  DayTrackerPlaque,
  Menu,
  Plaque,
} from "../../components";

export const HomePage = () => {
  return (
    <div className="home-page">
      <Menu active={0} />
      <Plaque title={"📈 Ваш прогресс"} />
      <DayTrackerPlaque />
      <ContentPlaque />
    </div>
  );
};
