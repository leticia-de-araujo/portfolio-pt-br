import { CircularProgress } from "@mui/material";
import React, { useRef } from "react";
import IsVisible from "react-is-visible";
import { Fade } from "react-reveal";
import skills from "../../data/skills";

import useContainerDimensions from "../../useContainerDimensions/useContainerDimesions";
import { SkillsDiv } from "./style";

const Skills = () => {
  const skillsWrapper = useRef();
  const { width } = useContainerDimensions(skillsWrapper);

  return (
    <Fade duration={1000}>
      <SkillsDiv>
        <IsVisible once>
          {(isVisibleSkillsWrapper) => (
            <div
              className="skills-wrapper"
              style={
                isVisibleSkillsWrapper
                  ? {
                      transition: "1s opacity ease-in-out",
                      transform: `translateX(0)`,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <h2>Skills</h2>
              <ul className="skills-ul" ref={skillsWrapper}>
                {skills?.map((skills) => {
                  return skills.skillName !== "Back-End" ? (
                    <li className="skill-bar-wrapper" key={skills.skillName}>
                      <div
                        className="skill-bar"
                        style={
                          isVisibleSkillsWrapper
                            ? {
                                transition: `${
                                  1 + skills.id / 10
                                }s width ease-in-out`,
                                width: width * (skills.amount / 100),
                              }
                            : {
                                width: 1,
                              }
                        }
                      ></div>
                      <div className="skill-name">{skills.skillName}</div>
                    </li>
                  ) : (
                    <li className="skill-bar-wrapper" key={skills.skillName}>
                      <div className="skill-name">{skills.skillName}</div>
                      <div className="loading">
                        <span>Carregando</span>
                        <CircularProgress size={22} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </IsVisible>
      </SkillsDiv>
    </Fade>
  );
};

export default Skills;
