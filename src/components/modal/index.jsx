import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import Github from "../../assets/github.png";

const Modal = ({ repoLink, contentTitle, content, onClick }) => {
  return (
    <div className="modalContainer">
      <div className="modal">
        <div onClick={onClick} className="closeIcon">
          <AiFillCloseCircle />
        </div>
        <div className="text">
          <h3>{contentTitle}</h3> <br></br> <p>{content}</p>
        </div>
        <div className="linkContainer">
          <div className="githubIcon">
            <img src={Github} alt="logo Github" />
          </div>
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="repoLink"
          >
            Lien repo Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  repoLink: PropTypes.string,
  contentTitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
