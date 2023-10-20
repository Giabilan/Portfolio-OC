import Button from "../Button";
import Sidebar from "../sidebar";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <a href="#Contact" className="contactButton">
          <Button content="Contact" />
        </a>
      <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
