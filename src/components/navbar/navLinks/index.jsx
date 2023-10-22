import "./style.scss";

const NavLinks = () => {
  const items = ["Compétences", "Projets", "A propos"];

  return (
    <div className="linksContainer">
        {items.map((item) => (
          <div key={item} className="link">
            <a href={`#${item}`}>{item}</a>
          </div>
        ))}
    </div>
  );
};

export default NavLinks;
