import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const Modal = ({ contentTitle, content, onClick }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div onClick={onClick} className="closeIcon">
          <AiFillCloseCircle />
        </div>
        <div className="text"> {contentTitle} : <br></br> {content} </div>
      </div>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  contentTitle: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
