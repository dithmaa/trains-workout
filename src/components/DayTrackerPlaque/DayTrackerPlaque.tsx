import style from "./DayTrackerPlaque.module.scss";
export const DayTrackerPlaque = () => {
  return (
    <div className={style.root}>
      <ul className="days">
        <li>пн</li>
        <li>вт</li>
        <li>ср</li>
        <li>чт</li>
        <li>пт</li>
        <li>сб</li>
        <li>вс</li>
      </ul>
      <div className="tracker-slider"></div>
    </div>
  );
};
