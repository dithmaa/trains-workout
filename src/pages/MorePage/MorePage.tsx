import { Menu } from "../../components";

export const MorePage = () => {
  return (
    <div className="more-page">
      <Menu active={1} />
      <div className="more-page__subscribtion">
        <div className="more-page__subscribtion_title">Подписка</div>
        <div className="more-page__subscribtion_days">30 дней</div>
      </div>
      <ul className="more-page__menu">
        <li className="more-page__menu_item">Настроить оборудование</li>
        <li className="more-page__menu_item">Написать в поддержку</li>
        <li className="more-page__menu_item">Написать тренеру</li>
      </ul>
    </div>
  );
};
