import "./style.scss";
import { FaAngleUp } from "react-icons/fa";

const ArrowUp = () => {
  return (
    <a href="#Accueil" className="arrowUpContainer">
      <div className="arrowUp">
        <FaAngleUp />
      </div>
    </a>
  );
};

export default ArrowUp;
