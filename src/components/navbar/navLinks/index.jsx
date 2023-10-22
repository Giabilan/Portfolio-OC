import "./style.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

const NavLinks = () => {
  const items = ["Accueil", "Compétences", "Projets", "A propos"];

  return (
    <div className="linksContainer">
      {items.map((item) => (
        <div key={item} className="links">
          <a href={`#${item}`}>
            {item}
            <div className="icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
