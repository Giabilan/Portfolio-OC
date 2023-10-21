import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ projectTitle, projectDesc, projectImage, link }) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noreferrer" className="projectCard">
        <div className="projectTitle">
          {projectTitle} <FaExternalLinkAlt />
        </div>
        <div className="imgContainer">
          <img src={projectImage} alt={projectTitle} />
        </div>
        <div className="projectDesc">{projectDesc}</div>
      </a>
    </div>
  );
};

Card.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
