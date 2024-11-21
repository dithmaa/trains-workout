import { Menu } from "../../components";

export const MorePage = () => {
  return (
    <div className="more-page">
      <Menu active={1} />
      <div className="more-page__subscribtion">
        <div className="more-page__subscribtion_title">Подписка</div>
        <div className="more-page__subscribtion_days">30 дней</div>
      </div>
    </div>
  );
};
