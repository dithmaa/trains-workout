import style from "./Progressbar.module.scss";
import starIcon from "../../assets/img/star-icon.svg";
export const Progressbar = () => {
  return (
    <div className={style.root + " smallerFifty"}>
      <span style={{ width: "35%" }}>
        <img src={starIcon} alt="" />
      </span>
    </div>
  );
};
