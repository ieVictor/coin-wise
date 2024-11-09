import Logo from "@Components/Logo";
import React from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <nav className={styles.asideWrapper}>
        <ul>
          <li>
            <NavLink to="/">Coins</NavLink>
          </li>
          <li>
            <NavLink to="#">Info</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
