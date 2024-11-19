import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); //have navbar be closed by default

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        CHARLES PAGUIA
      </a>
      <div className={styles.menu}>
        <img 
          className={styles.menuBtn} 
          src={
            menuOpen 
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          } 
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;