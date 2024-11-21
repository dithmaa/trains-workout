import { Menu, Trains } from "../../components";

export const TrainsPage = () => {
  return (
    <div className="container">
      <Menu active={0} />
      <Trains />
    </div>
  );
};
