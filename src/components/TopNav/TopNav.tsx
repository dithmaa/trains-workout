import style from "./TopNav.module.scss";
import { ReactComponent as BackArrow } from "../../assets/img/back-arrow.svg";
import { Link } from "react-router-dom";
import { formatScheduleDate } from "../../hook_functions/hook_functions";
interface TopNavProps {
  title: string;
  linkPath: string;
}

export const TopNav: React.FC<TopNavProps> = ({ title, linkPath }) => {
  return (
    <div className={style.root}>
      <Link to={linkPath} className={style.root__arrow}>
        <BackArrow />
      </Link>
      <div className={style.root__title}>
        {formatScheduleDate("2024-12-04T18:36:46.455442")}
      </div>
      <div style={{ opacity: 0, userSelect: "none" }}>Right S</div>
    </div>
  );
};
