import { NavLink } from "react-router-dom";
import { MdCall, MdHome, MdPerson } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";
import PropTypes from "prop-types";

const NavLinks = ({ containerStyle }) => {
  return (
    <nav className={`${containerStyle}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <MdHome />
        <div>Home</div>
      </NavLink>

      <NavLink
        to={"/projects"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <RiBuilding2Fill />
        <div>Projects</div>
      </NavLink>

      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter gap-x-1 rounded-full px-2 py-1"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <MdPerson />
        <div>About us</div>
      </NavLink>

      <NavLink
        to={"mailto:binmagdi97@gmail.com"}
        className={"flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}
      >
        <MdCall />
        <div>Contact us</div>
      </NavLink>
    </nav>
  );
};

NavLinks.propTypes = {
  containerStyle: PropTypes.string,
};

export default NavLinks;
