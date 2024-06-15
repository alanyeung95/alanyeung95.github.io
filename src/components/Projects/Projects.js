import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { SocialIcons } from "./ProjectsStyles";
import { projects } from "../../constants/constants";

// Importing icons
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

// ProjectCard Component
const ProjectCard = (props) => (
  <div data-aos="fade-up">
    <h2 className="project_title">{props.project.title}</h2>
    <h3 className="project_short_description">
      {props.project.short_description}
    </h3>
    <div className="project_container">
      <div className="project_img">
        <img src={props.project.image} alt={props.project.title} />
      </div>
      <div className="project_description">
        <p>{props.project.description}</p>
        <div className="project_links">
          {props.project.source && (
            <SocialIcons target="_blank" href={props.project.source}>
              <AiFillGithub size="4rem" />
            </SocialIcons>
          )}
          {props.project.visit && (
            <SocialIcons target="_blank" href={props.project.visit}>
              <AiOutlineLink size="4rem" />
            </SocialIcons>
          )}
        </div>
      </div>
    </div>
    <div className="project_tags">
      {props.project.tags.map((tag, index) => (
        <p
          className="project_tag"
          key={`${props.project.id}-tag-index-${index}`}
        >
          {tag}
        </p>
      ))}
    </div>
  </div>
);

// Projects Component
const Projects = () => {
  return (
    <Section>
      <span
        id="projects"
        style={{ position: "relative", top: "-130px" }}
      ></span>
      <SectionDivider />
      <br />
      <SectionTitle>Projects</SectionTitle>
      <div className="project_grid_container">
        {[...projects].reverse().map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
