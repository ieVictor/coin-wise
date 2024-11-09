import Logo from "@Components/Logo";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <NavLink to="/" end>
        <Logo />
      </NavLink>
      <nav className={styles.asideWrapper}>
        <ul>
          <li>
            <NavLink to="/coinprice">Coins</NavLink>
          </li>
          <li>
            <NavLink to="/caraio">Info</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
