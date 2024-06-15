import React from "react";
import {
  DiFirebase,
  DiReact,
  DiNodejs,
  DiDatabase,
  DiStackoverflow,
} from "react-icons/di";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have extensive experience working with a diverse range of technologies
      across the software development spectrum, from backend systems to user
      interface design.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js
            <br />
            Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node <br />
            Go <br />
            Python <br />
            C#.Net
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            MongoDB <br />
            MySQL <br />
            Redis
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Messaging</ListTitle>
          <ListParagraph>
            Redis Pub/Sub
            <br />
            Solace <br />
            RabbitMQ <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiStackoverflow size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            NLP <br />
            Prompt Engineering <br />
            Solidity
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
