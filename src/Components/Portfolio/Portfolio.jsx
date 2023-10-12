import styles from "./Portfolio.module.css";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section className={`${styles.Portfolio} section`} id="portfolio">
      <h2 className="section__title"> Portfolio </h2>
      <span className="section__subtitle"> My previous Projects</span>

      <Projects />
    </section>
  );
};

export default Portfolio;
