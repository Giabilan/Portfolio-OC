import PropTypes from "prop-types";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../modal";

const Card = ({ title, desc, image, link, modalDesc, repoLink }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card">
        <div className="projectTitle">
          {title} <FaExternalLinkAlt />
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="projectCard">
          <div className="imgContainer">
            <img src={image} alt={title} />
          </div>
        </a>
        <div className="projectDesc">
          {desc} <FaInfoCircle onClick={() => setOpen(true)} />
        </div>
        {open && (
          <Modal
            onClick={() => setOpen(false)}
            contentTitle={title}
            content={modalDesc}
            repoLink={repoLink}
          />
        )}
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  modalDesc: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
};

export default Card;
