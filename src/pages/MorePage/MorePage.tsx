import React from "react";
import { Plaque, Menu, MorePageMenu } from "../../components";

export const MorePage = () => {
  const [isTriggered, setTriggered] = React.useState(false);
  const handleTriggered = () => {
    setTriggered(!isTriggered);
  };
  return (
    <div className="more-page">
      <Menu active={2} />
      <Plaque title={"Подписка"} text="30 дней" />
      <MorePageMenu />
    </div>
  );
};
