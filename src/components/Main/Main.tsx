import styles from "./Main.module.scss";
import { Menu } from "../Menu/Menu";
import { Plaque } from "../Main/Plaque/Plaque";
import { DayTrackerPlaque } from "../Main/DayTrackerPlaque/DayTrackerPlaque";
import { ContentPlaque } from "../ContentPlaque/ContentPlaque";
import { QuizPlaque } from "../QuizPlaque/QuizPlaque";

export const Main = () => {
  return (
    <main className={styles.root}>
      <Menu active={0} />
      <Plaque title={"📈 Ваш прогресс"} />
      <DayTrackerPlaque />
      <ContentPlaque />
      <h2 className="title">Цель недели</h2>
      <QuizPlaque />
    </main>
  );
};
