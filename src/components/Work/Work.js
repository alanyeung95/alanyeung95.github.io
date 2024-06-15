import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { workExps } from "../../constants/constants";
import WorkCard from "./WorkCard";

const Work = () => (
  <Section id="work">
    <div style={{ height: "100px" }} />
    <SectionDivider />
    <br />
    <SectionTitle>Working Experience</SectionTitle>
    {workExps.map((workItem) => (
      <WorkCard workItem={workItem} key={workItem.id} />
    ))}
  </Section>
);
export default Work;
