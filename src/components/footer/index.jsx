import "./style.scss";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="text">© Copyright 2023</div>
      <div className="mediaContainer">
        <a href="https://www.linkedin.com/in/giabilan-rajendran-abb062276/">
          <img src={Linkedin} alt="logo Linkedin" />
        </a>
        <a href="https://github.com/Giabilan">
          <img src={Github} alt="logo Github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
