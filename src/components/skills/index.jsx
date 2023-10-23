import "./style.scss";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";
import React from "../../assets/react_icon.png";
import framerMotion from "../../assets/framer_motion.png";
import Git from "../../assets/git.png";
import GitHub from "../../assets/github.png";
import ReduxToolkit from "../../assets/redux_white.svg";
import SASS from "../../assets/sass.png";
import NodeJS from "../../assets/nodejs.png";
import SkillsCard from "./SkillsCard";
import Title from "../title";

const Skills = () => {
  return (
    <>
      <Title content="Compétences" />
      <div className="skillsContainer">
        <SkillsCard title="HTML" icon={HTML} />
        <SkillsCard title="CSS" icon={CSS} />
        <SkillsCard title="JavaScript" icon={JS} />
        <SkillsCard title="React JS" icon={React} />
        <SkillsCard title="framer Motion" icon={framerMotion} />
        <SkillsCard title="Git" icon={Git} />
        <SkillsCard title="GitHub" icon={GitHub} />
        <SkillsCard title="Redux Toolkit" icon={ReduxToolkit} />
        <SkillsCard title="Sass" icon={SASS} />
        <SkillsCard title="Node JS" icon={NodeJS} />
      </div>
    </>
  );
};

export default Skills;
