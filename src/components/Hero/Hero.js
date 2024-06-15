import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello!
      </SectionTitle>
      <SectionText>
        I specialize in transforming complex software concepts into functional
        realities.
        <br />
        <br /> My expertise spans across full-stack web development, blockchain
        solutions, and building scalable microservices architectures.
      </SectionText>
      <Button
        target="_blank"
        onClick={() => window.open("mailto:alanyeung.dev@gmail.com", "_blank")}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
