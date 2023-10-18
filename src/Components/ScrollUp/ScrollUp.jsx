import { useEffect, useRef } from "react";
import styles from "./ScrollUp.module.css";

const ScrollUp = () => {
  const scrollUpRef = useRef(null);

  useEffect(() => {
    const scrollUp = scrollUpRef.current;
    if (scrollUp) {
      window.addEventListener("scroll", function () {
        if (this.scrollY >= 560) scrollUp.classList.add(styles.showScroll);
        else scrollUp.classList.remove(styles.showScroll);
      });
    }
  }, []);

  return (
    <a href="#" ref={scrollUpRef} className={styles.scrollUp}>
      <i className={`uil uil-arrow-up ${styles.scrollUpIcon}`}></i>
    </a>
  );
};

export default ScrollUp;
