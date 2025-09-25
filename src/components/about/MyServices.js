import React from "react";
import { FaDatabase } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="React, TypeScript, Angular, and Vue"
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Data Analysis"
        subTitle="SQL, Python, R,  and data visualization tools"
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Responsive design and cross-platform compatibility"
      />
      <ServicesCard
        icons={<FaDatabase />}
        title="Data Engineering"
        subTitle="Training in Data Engineering (Python, SQL, ETL). Content and projects constantly updated."
      />
    </div>
  );
};

export default MyServices;
