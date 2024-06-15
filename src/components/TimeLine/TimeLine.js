import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    if (node && left) {
      return node.scrollTo({ left, behavior: "smooth" });
    }
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef && carouselRef.current) {
        scroll(carouselRef.current, 0);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section>
      <span id="about" style={{ position: "relative", top: "-130px" }}></span>
      <SectionDivider />
      <br />
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        🎓 Currently pursuing a Master of Engineering in Analytics, focusing on
        Machine Learning and Blockchain, at the University of Toronto. I also
        hold a Bachelor of Sciences (Hons) in Computer Science from The Hong
        Kong Polytechnic University.
        <br /> <br />
        ☕️ Passionate about Full-Stack development, blockchain technologies,
        and microservices architecture. I have led several projects to
        completion, specializing in areas such as backend server development and
        system integration.
        <br /> <br />
        💻 Skilled in Java, Python, and JavaScript, with experience in
        frameworks and libraries such as React, Pytorch, and DApp ecosystem. I
        have a strong background in software engineering from my roles at
        Mindlayer Limited, South China Morning Post Publishers Limited, and
        other technology firms.
        <br /> <br />
        📚 I am known for my initiative-taking ability, high motivation, and
        being highly organized and detail-oriented. A quick learner who is
        always engaging with new technologies and industry advancements.
        <br /> <br />
        My interests include: <br />- Artificial Intelligence/NLP applications
        <br /> - Chatbot Technologies <br />- System Integration
        <br />- Blockchain Technologies and Cryptocurrency
        <br /> - Programmatic Trading
      </SectionText>

      <SectionTitle fontSize="40px">Major Milestones</SectionTitle>
      <CarouselContainer
        ref={carouselRef}
        onScroll={handleScroll}
        style={{ marginTop: "30px" }}
      >
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.month},{"\n"}
                  {item.year}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
