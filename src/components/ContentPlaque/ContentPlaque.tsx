import style from "./ContentPlaque.module.scss";
import rightArrow from "../../assets/img/right-arrow.svg";
import userpicture from "../../assets/img/plaque/userpic.png";
import { Link } from "react-router-dom";

export const ContentPlaque = () => {
  return (
    <Link to="/" className={style.root}>
      <div className={style.root__left}>
        <div className={style.root__img}>
          <img src={userpicture} alt="" />
        </div>
        <div className={style.root__content}>
          <div className={style.root__title}>Выбрать тренера</div>
          <div className={style.root__text}>
            Получайте индивидуальные тренировки и ежедневные рекомендации
          </div>
        </div>
      </div>
      <div className={style.root__arrow}>
        <img src={rightArrow} alt="" />
      </div>
    </Link>
  );
};
