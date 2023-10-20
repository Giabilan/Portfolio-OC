import Sidebar from "../sidebar";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        {/* <div className="social">
          <a href="#">
            <img src="./logo_linkedin.png" alt="logo Linkedin" />
          </a>
          <a href="#">
            <img src="./logo_instagram.png" alt="logo Instagram" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
