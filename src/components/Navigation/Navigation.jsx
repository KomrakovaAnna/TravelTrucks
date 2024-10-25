import { NavLink, Link } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";
import logo from "../../assets/logo.svg";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const Navigation = () => {
  return (
    <nav className={style.navigationContainer}>
      <ul className={style.navigation}>
        <li>
          <Link to="/" aria-label="Go to homepage">
            <img src={logo} alt="Site logo" className={style.navigationLogo} />
          </Link>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={buildLinkClass} to="/campers">
            Catalog
          </NavLink>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default Navigation;
