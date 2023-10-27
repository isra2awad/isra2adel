import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import styles from "./header.module.css";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      window.addEventListener("scroll", function () {
        if (this.scrollY >= 80) header.classList.add(styles.scrollHeader);
        else header.classList.remove(styles.scrollHeader);
      });
    }
  }, []);
  const [ToggleMenue, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      ref={headerRef}
      className={styles.header}
    >
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
              <a
                href="#home"
                onClick={() => {
                  setActiveNav("#home");
                }}
                className={
                  activeNav === "#home"
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
              >
                <i className={`il uil-estate ${styles.navIcon}`}></i>Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                }}
                className={
                  activeNav === "#about"
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
              >
                <i className={`uil uil-user ${styles.navIcon}`}></i>About
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#skills"
                onClick={() => {
                  setActiveNav("#skills");
                }}
                className={
                  activeNav === "#skills"
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
              >
                <i className={`uil uil-file-alt ${styles.navIcon}`}></i>Skills
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#services"
                onClick={() => {
                  setActiveNav("#services");
                }}
                className={
                  activeNav === "#services"
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
              >
                <i className={`uil uil-briefcase-alt ${styles.navIcon}`}></i>
                Services
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#portfolio"
                onClick={() => {
                  setActiveNav("#portfolio");
                }}
                className={
                  activeNav === "#portfolio"
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
              >
                <i className={`uil uil-scenery ${styles.navIcon}`}></i>Portfolio
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                }}
                className={
                  activeNav === "#contact"
                    ? `${styles.navLink} ${styles.activeLink}`
                    : styles.navLink
                }
              >
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
    </motion.header>
  );
};

export default Header;
