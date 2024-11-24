import style from "./ContentPlaque.module.scss";
import { ReactComponent as RightArrow } from "../../assets/img/right-arrow.svg";
import trainerPicture from "../../assets/img/plaque/userpic.png";
import { Link } from "react-router-dom";

export const ContentPlaque = () => {
  return (
    <Link to="/" className={style.root}>
      <div className={style.root__left}>
        <div className={style.root__img}>
          <img src={trainerPicture} alt="" />
        </div>
        <div className={style.root__content}>
          <div className={style.root__title}>Выбрать тренера</div>
          <div className={style.root__text}>
            Получайте индивидуальные тренировки и ежедневные рекомендации
          </div>
        </div>
      </div>
      <div className={style.root__arrow}>
        <RightArrow />
      </div>
    </Link>
  );
};
