import React from "react";
import {
  workImgPodcast,
  workImgClon,
  workImgAngularList,
  workImgVueCarousel,
  workImgVueWeb,
  workImgAngularEpos

} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Data Engineer Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Blog Website"
            category="Website"
            image={workImgPodcast}
          />
          <ProjectsCard
            title="Business Card Design"
            category="Design"
            image={workImgPodcast}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgPodcast}
          />
        </div>
      </div>

      <Title title="Recent" subTitle="Software Developer Projects" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Podcast Website"
            category="Website"
            image={workImgPodcast}
            url = {'https://podcast-ejemplo-enppovpee-tempest9805.vercel.app/'}
          />
          <ProjectsCard
            title="Udemy Clone"
            category="Design"
            image={workImgClon}
            url = {'https://basic-u-clon.vercel.app/'}
          />
          <ProjectsCard
            title="Vue Web"
            category="Website"
            image={workImgVueWeb}
            url = {'https://luckybets21.netlify.app/'}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Angular Simple CRUD"
            category="angular"
            image={workImgAngularList}
            url = {'https://roaring-gaufre-e6b737.netlify.app/'}
          />
          <ProjectsCard
            title="Vue Carousel"
            category="Vue"
            image={workImgVueCarousel}
            url = {'https://roaring-gaufre-e6b737.netlify.app/'}
          />
          <ProjectsCard
            title="Angular Epos System"
            category="Angular"
            image={workImgAngularEpos}
            url = {'https://epos.gamemecanica.net/login'}
          />
        </div>
      </div>

    </div>
  );
};

export default Projects;
