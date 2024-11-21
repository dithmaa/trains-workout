import { Dues, Menu, MorePageMenu } from "../../components";

export const MorePage = () => {
  return (
    <div className="more-page">
      <Menu active={1} />
      <Dues />
      <MorePageMenu />
    </div>
  );
};
