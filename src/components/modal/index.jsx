import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const Modal = ({ content, onClick }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div onClick={onClick} className="closeIcon">
          <AiFillCloseCircle />
        </div>
        <div className="text"> {content} </div>
      </div>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
