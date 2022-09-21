import { SvgIcon } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import skills from "../../../data/skills";
import { SkillsDiv } from "./style";

const Skills = () => {
  return (
    <Fade duration={1000}>
      <SkillsDiv>
        <ul className="skills-ul">
          {skills?.map((skills) => {
            return (
              <li className="skill-box-wrapper" key={skills.skillName}>
                <SvgIcon component={skills.img} />
                <div className="skill-name">{skills.skillName}</div>
              </li>
            );
          })}
        </ul>
      </SkillsDiv>
    </Fade>
  );
};

export default Skills;
