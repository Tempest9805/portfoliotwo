import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2022 - 2025"
          title="Front-end Developer"
          subTitle="Jazzgs - Business Solutions"
          des="Crafted pixel‑perfect responsive UIs in React, Vue.js, Angular, Bootstrap and Tailwind based on user research and
            accessibility best practices."
        />
        <ResumeCard
          badge="2020 - 2021"
          title="junior Developer"
          subTitle="Human Resources System (UCR)"
          des="Developed a PHP/MySQL‑based web application for HR record‑keeping, implementing CRUD
            interfaces in .NET"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2018 - 2023"
          title="Universidad de Costa Rica"
          subTitle=""
          des="Bachelor’s Degree in Business Informatics (Bachillerato en Informática Empresarial)  "
        />
        <ResumeCard
          badge="2018 - 2021"
          title="Scrum Foundation Professional Certificate"
          subTitle="(SFPC)"
          des=""
        />
      </div>
    </div>
  );
};

export default Education;
