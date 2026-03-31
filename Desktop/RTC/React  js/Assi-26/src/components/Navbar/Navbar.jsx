import "./Navbar.css"
import { Link } from "react-router";
function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/OurServices">Our Services</Link>
    </div>
  );
}

export default Navbar;
