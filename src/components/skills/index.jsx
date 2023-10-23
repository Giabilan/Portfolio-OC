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
import Jest from "../../assets/jest.png";
import SkillsCard from "./SkillsCard";
import Title from "../title";

const Skills = () => {
  return (
    <>
      <Title content="Compétences" />
      <div className="skillsContainer">
        <SkillsCard title="HTML" icon={HTML} level={100} />
        <SkillsCard title="CSS" icon={CSS} level={100} />
        <SkillsCard title="JavaScript" icon={JS} level={70} />
        <SkillsCard title="React JS" icon={React} level={75} />
        <SkillsCard title="framer Motion" icon={framerMotion} level={70} />
        <SkillsCard title="Git" icon={Git} level={80} />
        <SkillsCard title="GitHub" icon={GitHub} level={85} />
        <SkillsCard title="Redux Toolkit" icon={ReduxToolkit} level={70} />
        <SkillsCard title="Sass" icon={SASS} level={100} />
        <SkillsCard title="Jest" icon={Jest} level={70} />
      </div>
    </>
  );
};

export default Skills;
