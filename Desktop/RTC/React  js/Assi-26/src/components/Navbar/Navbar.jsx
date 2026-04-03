import "./Navbar.css"
import { Link } from "react-router-dom";
import { House, FileUser, PhoneCall, HeartHandshake } from 'lucide-react';

const NavConfig = [
  {
    name: "Home",
    icon: <House className="menu-icon" />,
    title: "Home",
    path: "/"
  },
  {
    name: "About",
    icon: <FileUser className="menu-icon" />,
    title: "About",
    path: "/About"
  },
  {
    name: "Contact",
    icon: <PhoneCall className="menu-icon" />,
    title: "Contact",
    path: "/Contact"
  },
  {
    name: "Our Services",
    icon: <HeartHandshake className="menu-icon" />,
    title: "Our Services",
    path: "/OurServices"
  }
]

function Navbar({ active }) {
  return (
    <div className="navbar">
      {NavConfig.map((menuItem) => {
        return (
          <Link to={menuItem.path}
            className={`menu-item ${active == menuItem.name ? "active-menu" : ""}`}
          >
            {menuItem.icon}
            {menuItem.title}
          </Link>
        );
      })}
    </div>
  );
}

  

export default Navbar;
