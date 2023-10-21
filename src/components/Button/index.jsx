import PropTypes from "prop-types";

const Button = ({ content, Onclick }) => (
  <button onClick={Onclick}>{content}</button>
);

Button.propTypes = {
  content: PropTypes.string.isRequired,
  Onclick: PropTypes.func,
};

export default Button;
