import "../styles/nav.css";
import logo from "../assets/air-bnb-logo.png";

function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="" />
    </nav>
  );
}

export default NavBar;
