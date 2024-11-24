import style from "./Progressbar.module.scss";
import { ReactComponent as StarIcon } from "../../assets/img/star-icon.svg";
export const Progressbar = () => {
  return (
    <div className={style.root + " smallerFifty"}>
      <span style={{ width: "35%" }}>
        <StarIcon />
      </span>
    </div>
  );
};
