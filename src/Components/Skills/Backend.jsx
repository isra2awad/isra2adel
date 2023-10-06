import styles from "./Skills.module.css";

const Backend = () => {
  return (
    <div className={styles.skillsContent}>
      <h3 className={styles.skillsTitle}></h3>
      <div className={styles.skillsBox}>
        <div className={styles.skillsGroup}>
          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>Python</h3>
              <span className={styles.skillsLevel}>Intermediate</span>
            </div>
          </div>

          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>Django</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>

          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>NodeJs</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
        </div>

        <div className={styles.skillsGroup}>
          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>SQL</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>

          <div className={styles.skillsData}>
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className={styles.skillsName}>MongoDB</h3>
              <span className={styles.skillsLevel}>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
