import { Plaque, Menu, MorePageMenu } from "../../components";

export const MorePage = () => {
  return (
    <div className="more-page">
      <Menu active={2} />
      <Plaque title={"Подписка"} text="30 дней" />
      <MorePageMenu />
    </div>
  );
};
