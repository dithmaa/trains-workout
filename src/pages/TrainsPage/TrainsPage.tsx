import { Menu, Trains } from "../../components";

export const TrainsPage = () => {
  return (
    <div className="container">
      <Menu active={1} />
      <Trains />
    </div>
  );
};
