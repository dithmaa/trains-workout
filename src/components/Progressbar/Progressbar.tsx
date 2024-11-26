import style from "./Progressbar.module.scss";
import { ReactComponent as DoneIcon } from "../../assets/img/done-icon.svg";
import { ReactComponent as CancelIcon } from "../../assets/img/cancell-icon.svg";
const days = [
  { dayName: "Пн", isChecked: true },
  { dayName: "Вт", isChecked: true },
  { dayName: "Ср", isChecked: true },
  { dayName: "Чт", isChecked: true },
  { dayName: "Пт", isChecked: false },
  { dayName: "Сб", isChecked: false },
  { dayName: "Вс", isChecked: true },
];
export const Progressbar = () => {
  return (
    <div className={style.root}>
      {days.map((day, index) => (
        <div className={style.root__item} key={index}>
          {day.isChecked ? (
            <div className={style.root__done}>
              <DoneIcon />
            </div>
          ) : (
            <CancelIcon />
          )}
        </div>
      ))}
    </div>
  );
};
