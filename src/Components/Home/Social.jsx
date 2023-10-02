import styles from "./Home.module.css";

const Social = () => {
  return (
    <div className={styles.homeSocial}>
      <a
        href="https://www.instagram.com/journey2trueself/"
        className={styles.homeSocialIcon}
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://github.com/isra2awad"
        className={styles.homeSocialIcon}
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/isra-adel/"
        className={styles.homeSocialIcon}
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
