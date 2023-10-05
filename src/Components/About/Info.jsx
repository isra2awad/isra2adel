import styles from "./About.module.css";

const info = () => {
  return (
    <div className={`${styles.aboutInfo} grid `}>
      <div className={styles.aboutBox}>
        <i className={`bx bx-award ${styles.aboutIcon}`}></i>
        <h3 className={styles.aboutTitle}>Experience</h3>
        <span className={styles.aboutSubtitle}>
          Four years of experience in the software project lifecycle.
        </span>
      </div>

      <div className={styles.aboutBox}>
        <i className={`bx bx-briefcase-alt ${styles.aboutIcon}`}></i>
        <h3 className={styles.aboutTitle}>Completed</h3>
        <span className={styles.aboutSubtitle}>+10 Projects</span>
      </div>

      <div className={styles.aboutBox}>
        <i className={`bx bx-support ${styles.aboutIcon}`}></i>
        <h3 className={styles.aboutTitle}>Support</h3>
        <span className={styles.aboutSubtitle}>Online 24/7</span>
      </div>
    </div>
  );
};

export default info;
