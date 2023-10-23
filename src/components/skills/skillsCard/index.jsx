import PropTypes from "prop-types";

const SkillsCard = ({ title, icon }) => {
  return (
    <div className="card">
      <div className="skillsCard">
        <div className="titleSkills"> {title}</div>
        <div className="iconsContainer">
          <div className="icon">
            <img src={icon} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

SkillsCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SkillsCard;
