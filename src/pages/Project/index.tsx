import React from "react";
import classes from "./index.module.css";
import project from "../../data/project";
import { ExternalIcon } from "../../assets";
import { AiOutlineArrowRight } from "react-icons/ai";

const index = () => {
  const projects = project;

  const ProjectContent = ({ projectType }: { projectType: string }) => {
    const projectWithType = projects.filter((val) => val.type === projectType);

    return (
      <div className={classes.projectBox}>
        <div className={classes.projectTitle}>
          {projectType} projects
          <div className={classes.titleStyle}></div>
        </div>
        <div className={classes.contentBox}>
          {projectWithType.map((project, index) => {
            return (
              <div className={classes.box} key={index}>
                <div className={classes.imageBox}>
                  <img src={project.image} />
                </div>

                <div className={classes.imageBadge}>
                  <div className={classes.projectContent}>
                    <div className={classes.projectName}>
                      {project.name} - {project.type}
                    </div>
                    <div className={classes.projectDes}>
                      {project.description}
                    </div>
                  </div>

                  <div className={classes.externalBtn}>
                    <ExternalIcon />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={classes.viewAllBtn}>
          <span>View All</span>
          <AiOutlineArrowRight />
        </div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>
        <div className={classes.title}>Our Works</div>
        <div className={classes.subTitle}>
          Here are some of our works including <br />
          Web Development, UX/UI, and Lecturing
        </div>
      </div>
      <ProjectContent projectType="Web Development" />
      <ProjectContent projectType="UX/UI" />
      <ProjectContent projectType="Lecture" />
    </div>
  );
};

export default index;
