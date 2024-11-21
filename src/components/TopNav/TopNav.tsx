import style from "./TopNav.module.scss";
import backArrow from "../../assets/img/back-arrow.svg";
import { Link } from "react-router-dom";
interface TopNavProps {
  trainDate: string;
}
export const TopNav: React.FC<TopNavProps> = ({ trainDate }) => {
  return (
    <div className={style.root}>
      <Link to={"/"} className={style.root__arrow}>
        <img src={backArrow} alt="Стрелка назад" />
      </Link>
      <div className={style.root__title}>{trainDate}</div>
      <div style={{ opacity: 0, userSelect: "none" }}>Right S</div>
    </div>
  );
};
