import React from "react";

import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdBonfire } from "react-icons/io";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<SiAntdesign />} des="20 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="> 100 hours of coding" />
      <FunFactCard icon={<IoMdBonfire />} des="Continuous Learning and improving" />
    </div>
  );
};

export default FunFact;
