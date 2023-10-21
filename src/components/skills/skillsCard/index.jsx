import "./style.scss";
import PropTypes from "prop-types";

const SkillsCard = ({ title, icon, level }) => {
  return (
    <div className="card">
      <div className="skillsCard">
        <div className="titleSkills"> {title}</div>
        <div className="iconsContainer">
          <div className="icon">
            <img src={icon} alt={title} />
          </div>
        </div>
        <div className="progressBar">
          <div className="progress" style={{ width: `${level}%` }}></div>
        </div>
      </div>
    </div>
  );
};

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillsCard;
