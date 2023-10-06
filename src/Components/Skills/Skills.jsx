import styles from "./Skills.module.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technologies I work with</span>
      <div className={`${styles.skillsContainer} grid container`}>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
