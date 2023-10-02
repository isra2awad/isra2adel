import styles from "./Home.module.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className={`${styles.homeContainer} container grid`}>
        <div className={`${styles.homeContent} grid`}>
          <Social />
          <div className={styles.homeImage}></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
