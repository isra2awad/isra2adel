import { useState } from "react";
import { Link } from "react-router-dom";
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
              <Link to="/" className={styles.navLink}>
                <i className={`il uil-estate ${styles.navIcon}`}></i>Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={`${styles.navLink}`}>
                <i className={`uil uil-user ${styles.navIcon}`}></i>About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/skills" className={styles.navLink}>
                <i className={`uil uil-file-alt ${styles.navIcon}`}></i>Skills
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/services" className={styles.navLink}>
                <i className={`uil uil-briefcase-alt ${styles.navIcon}`}></i>
                Services
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/portfolio" className={styles.navLink}>
                <i className={`uil uil-scenery ${styles.navIcon}`}></i>Portfolio
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>
                <i className={`uil uil-message ${styles.navIcon}`}></i>Contact
              </Link>
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
