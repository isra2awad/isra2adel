import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer}} container`}>
        <h1 className={styles.footerTitle}>Isra</h1>
        <ul className={styles.footerList}>
          <li>
            <a href="#about" className={styles.footerLink}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className={styles.footerLink}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.footerLink}>
              Contact me
            </a>
          </li>
        </ul>

        <div className={styles.footerSocial}>
          <a
            href="https://www.instagram.com/"
            className={styles.footerSocialLink}
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            className={styles.footerSocialLink}
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com/"
            className={styles.footerSocialLink}
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className={styles.footerCopy}> &#169; Isra Adel</span>
      </div>
    </footer>
  );
};

export default Footer;
