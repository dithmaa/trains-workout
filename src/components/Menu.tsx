import userIcon from "../assets/img/menu/user-icon.svg";
import moreIcon from "../assets/img/menu/more-icon.svg";
export const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__item active">
          <img src={userIcon} alt="user icon" />
          <span>Тренировки</span>
        </div>
        <div className="menu__item">
          <img src={moreIcon} alt="more icon" />
          <span>Еще</span>
        </div>
      </div>
    </div>
  );
};
