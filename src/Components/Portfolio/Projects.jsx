import styles from "./Portfolio.module.css";
import { projectsData, projectsNav } from "./Data";
import PortfolioItems from "./PortfolioItems";
import { useState } from "react";
import { useEffect } from "react";

const Projects = () => {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    item.name === "All"
      ? setProjects(projectsData)
      : setProjects(
          projectsData.filter((project) => project.category === item.name),
        );
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <div>
      <div className={styles.portfolioFilters}>
        {projectsNav.map((item, index) => {
          return (
            <span
              key={index}
              className={
                active === index
                  ? `${styles.activeProject} ${styles.portfolioItem} `
                  : styles.portfolioItem
              }
              onClick={(e) => handleClick(e, index)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className={`${styles.portfolioContainer} grid container`}>
        {projects.map((item) => {
          return <PortfolioItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
