import style from "./TopNav.module.scss";
import { ReactComponent as BackArrow } from "../../assets/img/back-arrow.svg";
import { Link, useLocation } from "react-router-dom";
interface TopNavProps {
  title: string;
  id: number;
}
export const TopNav: React.FC<TopNavProps> = ({ title, id }) => {
  const location = useLocation();
  const isExercisePage =
    location.pathname === `/train-page/${id}/exercise-page`;
  const linkPath = isExercisePage ? `/train-page/${id}` : `/trains`;
  return (
    <div className={style.root}>
      <Link to={linkPath} className={style.root__arrow}>
        <BackArrow />
      </Link>
      <div className={style.root__title}>{title}</div>
      <div style={{ opacity: 0, userSelect: "none" }}>Right S</div>
    </div>
  );
};
