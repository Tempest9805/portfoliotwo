import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* Dashboard */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Dashboard" icon={<SiArtstation />} />
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Tableau (Public / Desktop)</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[88%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>

          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Power BI</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[78%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>

          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Data Visualization & Storytelling</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[82%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Languages */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Spanish</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>

          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">English</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Coding */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Coding" icon={<BiCodeAlt />} />
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">SQL (Postgres, T-SQL)</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>

          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Python (pandas, scikit-learn)</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[88%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>

          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Jupyter / Notebooks</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>

          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Git / GitHub</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[92%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Knowledge */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Knowledge" icon={<IoIosPaper />} />
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg"><GiCheckMark /></span>
            Data Quality & Validation (rules, null checks)
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg"><GiCheckMark /></span>
            ETL & Pipelines (csv → sql → notebooks)
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg"><GiCheckMark /></span>
            dbt (analytics engineering) — básico
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg"><GiCheckMark /></span>
            Airflow (orchestration) — básico
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg"><GiCheckMark /></span>
            Excel avanzado (Pivot, Power Query)
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg"><GiCheckMark /></span>
            Data Modeling & Warehousing (Snowflake/BigQuery)
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg"><GiCheckMark /></span>
            Basic ML & Model evaluation (AUC, precision/recall)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
