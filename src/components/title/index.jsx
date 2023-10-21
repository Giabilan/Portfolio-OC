import "./style.scss"
import PropTypes from "prop-types";

const Title = ({ content }) => {
  return <h2 className="title"> {content} </h2>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Title;
