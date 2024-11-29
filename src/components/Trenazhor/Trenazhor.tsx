import React from "react";
import { TopNav } from "../TopNav/TopNav";
import { TrenazhorPlace } from "../TrenazhorPlace/TrenazhorPlace";
interface TrenazhorProps {
  trenazhors: any;
}
export const Trenazhor: React.FC<TrenazhorProps> = ({ trenazhors }) => {
  return (
    <div className="trenazhor">
      <TopNav
        title={trenazhors ? trenazhors.title : "name"}
        linkPath="/equipments"
      />
      <TrenazhorPlace />
    </div>
  );
};
