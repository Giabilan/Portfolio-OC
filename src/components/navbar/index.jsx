import Button from "../Button";
import NavLinks from "./navLinks";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <NavLinks />
        <a href="#Contact" className="contactButton">
          <Button content="Contact" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
