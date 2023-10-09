import { useState } from "react";

import styles from "./header.module.css";

const Header = () => {
  const [ToggleMenue, setToggleMenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="index.html" className={styles.navLogo}>
          Isra
        </a>
        <div
          className={
            ToggleMenue
              ? `${styles.navMenu} ${styles.showMenu}`
              : `${styles.navMenu}`
          }
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home" className={styles.navLink}>
                <i className={`il uil-estate ${styles.navIcon}`}></i>Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#about" className={`${styles.navLink}`}>
                <i className={`uil uil-user ${styles.navIcon}`}></i>About
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#skills" className={styles.navLink}>
                <i className={`uil uil-file-alt ${styles.navIcon}`}></i>Skills
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#services" className={styles.navLink}>
                <i className={`uil uil-briefcase-alt ${styles.navIcon}`}></i>
                Services
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#portfolio" className={styles.navLink}>
                <i className={`uil uil-scenery ${styles.navIcon}`}></i>Portfolio
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink}>
                <i className={`uil uil-message ${styles.navIcon}`}></i>Contact
              </a>
            </li>
          </ul>
          <i
            className={`uil uil-times ${styles.navClose}`}
            onClick={() => setToggleMenu(!ToggleMenue)}
          ></i>
        </div>
        <div
          className={styles.navToggle}
          onClick={() => setToggleMenu(!ToggleMenue)}
        >
          <i className="uil uil-apps"> </i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
