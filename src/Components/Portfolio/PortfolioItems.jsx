import styles from "./Portfolio.module.css";

const PortfolioItems = ({ item }) => {
  return (
    <div key={item.id} className={styles.projectCard}>
      <img src={item.image} alt="" className={styles.projectImage} />
      <h3 className={styles.projectTitle}> {item.name}</h3>
      <a href={item.link} className={styles.projectButton}>
        Demo
        <i className={`bx bx-right-arrow-alt ${styles.projectButtonIcon}`}></i>
      </a>
    </div>
  );
};

export default PortfolioItems;
