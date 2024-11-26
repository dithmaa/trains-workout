import React from "react";
import {
  ContentPlaque,
  DayTrackerPlaque,
  Menu,
  Plaque,
  QuizPlaque,
} from "../../components";

export const HomePage = () => {
  const [isTriggered, setTriggered] = React.useState(false);
  const handleTriggered = () => {
    setTriggered(!isTriggered);
  };

  return (
    <div className="home-page">
      <Menu active={0} />
      <Plaque title={"📈 Ваш прогресс"} />
      <DayTrackerPlaque />
      <ContentPlaque />
      <h2 className="title">Цель недели</h2>
      <QuizPlaque />
    </div>
  );
};
