import styles from "./Skills.module.css";

const Frontend = () => {
  return (
    <div className={styles.skillsContent}>
      <h3 className={styles.skillsTitle}></h3>
      <div className={styles.skillsBox}>
        <div className={styles.skillsGroup}>
          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>HTML</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>

          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>CSS</h3>
              <span className={styles.skillsLevel}>Advanced</span>
            </div>
          </div>

          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>JavaScript</h3>
              <span className={styles.skillsLevel}>Intermediate</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsGroup}>
          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>React</h3>
              <span className={styles.skillsLevel}>Intermediate</span>
            </div>
          </div>
          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>Bootstrap</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>

          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>Git</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
