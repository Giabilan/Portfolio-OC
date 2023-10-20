import PropTypes from "prop-types";
import "./style.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ projectTitle, projectDesc, projectImage, link }) => {
  return (
    <>
      <div className="card">
        <a href={link} target="_blank" rel="noreferrer" className="projectCard">
          <div className="projectTitle">{projectTitle}</div>
          <div className="hoverLinkIcon">
            <FaExternalLinkAlt />
          </div>
          <img src={projectImage} alt={projectTitle} />
          <div className="projectDesc">{projectDesc}</div>
        </a>
      </div>
    </>
  );
};

Card.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
