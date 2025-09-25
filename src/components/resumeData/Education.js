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
          badge="2025 (Project)"
          title="Credit Risk & Data Quality Dashboard"
          subTitle="Personal Project"
          des="End-to-end pipeline for credit risk analysis: data cleansing and validation in SQL, feature engineering and logistic regression modeling in Python. Interactive Tableau dashboard showing PD by segment and a data-quality panel. Includes reproducible scripts and an executive summary with actionable recommendations."
        />

        <ResumeCard
          badge="2025 (Project)"
          title="Fraud / Anomaly Detection"
          subTitle="Personal Project"
          des="Fraud and anomaly detection on transaction data using SQL and Python: rolling-window features, z-score profiling and Isolation Forest to flag suspicious activity. Monitoring dashboard in Power BI with alerts and merchant/channel metrics. Deliverables include ETL pipeline, notebooks and alert export scripts."
        />

        <ResumeCard
          badge="2025 (Project)"
          title="Customer Segmentation & Campaign Response"
          subTitle="Personal Project"
          des="Customer segmentation (RFM + k-means) to optimize targeting. ETL in SQL, advanced Excel pivots and validations, Tableau visualizations and campaign response simulation with estimated ROI per segment. Deliverables: workbook, reproducible scripts and actionable tactical recommendations."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="(in progress)"
          title="Data Engineer Technician (Técnico en Data Engineer)"
          subTitle="CENFOTEC, Costa Rica"
          des=""
        />
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
