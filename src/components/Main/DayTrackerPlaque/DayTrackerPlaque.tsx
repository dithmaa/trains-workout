import { Progressbar } from "../../";
import style from "./DayTrackerPlaque.module.scss";
export const DayTrackerPlaque = () => {
  return (
    <div className={style.root}>
      <ul className="days">
        <li>Пн</li>
        <li>Вт</li>
        <li className="active">Ср</li>
        <li>Чт</li>
        <li>Пт</li>
        <li>Сб</li>
        <li>Вс</li>
      </ul>
      <Progressbar />
    </div>
  );
};
