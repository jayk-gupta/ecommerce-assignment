import React from "react";
import { VscAccount } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logo}>Glam Luv</div>
      <div className={styles.navigation}>
        <ul className={styles.navLinks}>
          <Link to=" /about" >
            About
          </Link>
          <Link to="/products">Products</Link>
        </ul>
      </div>
      <div className={styles.iconWrapper}>
        <VscAccount aria-label="Account" />
        <IoBagOutline aria-label="Cart" />
      </div>
    </nav>
  );
}

export default Navbar;
