import styles from "./Services.module.css";
import { useState } from "react";

const Services = () => {
  const [toggledService, setToggledService] = useState(0);
  const toggleService = (index) => {
    setToggledService(index);
  };
  return (
    <section className="section services" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What Value I bring</span>
      <div className={`${styles.servicesContainer} grid container`}>
        <div className={styles.servicesContent}>
          <div>
            <i className={`uil uil-web-grid ${styles.servicesIcon}`}></i>
            <h3 className={styles.servicesTitle}>
              Frontend <br /> Developer
            </h3>
          </div>
          <span
            onClick={() => toggleService(1)}
            className={styles.servicesButton}
          >
            Discover More
            <i
              className={`uil uil-arrow-right ${styles.servicesButtonIcon}`}
            ></i>
          </span>
          <div
            className={`${styles.servicesModel} ${
              toggledService === 1 ? styles.activeModel : ""
            }`}
          >
            <div className={styles.servicesModelContent}>
              <i
                onClick={() => toggleService(0)}
                className={`uil uil-times ${styles.servicesModelClose}`}
              ></i>
              <h3 className={styles.servicesModelTitle}>Frontend Developer</h3>
              <p className={styles.servicesModelDescription}>
                With proficiency in HTML, CSS, JavaScript, React, and more, I
                can create and enhance websites, optimize web content, and
                develop web applications to help businesses and individuals
                establish a strong online presence.
              </p>
              <ul className={`${styles.servicesModelServices} grid`}>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    User-Centric Design
                  </p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Responsive Web Design
                  </p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Optimized Performance
                  </p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Cross-Browser Compatibility
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.servicesContent}>
          <div>
            <i className={`uil uil-arrow ${styles.servicesIcon}`}></i>
            <h3 className={styles.servicesTitle}>
              Tech <br /> Customer service Representative
            </h3>
          </div>
          <span
            className={styles.servicesButton}
            onClick={() => toggleService(2)}
          >
            Discover More
            <i
              className={`uil uil-arrow-right ${styles.servicesButtonIcon}`}
            ></i>
          </span>
          <div
            className={`${styles.servicesModel} ${
              toggledService === 2 ? styles.activeModel : ""
            }`}
          >
            <div className={styles.servicesModelContent}>
              <i
                className={`uil uil-times ${styles.servicesModelClose}`}
                onClick={() => toggleService(0)}
              ></i>
              <h3 className={styles.servicesModelTitle}>
                Tech Customer service Representative
              </h3>
              <p className={styles.servicesModelDescription}>
                With a proven track record in customer service and technical
                support, I bring a versatile skill set that allows me to provide
                exceptional assistance for a wide range of software products. My
                technical expertise and ability to communicate complex concepts
                in a clear and user-friendly manner make me well-equipped to
                address customer inquiries, troubleshoot issues, and ensure a
                positive customer experience across various software
                applications. Whether it's software installation, configuration,
                troubleshooting, or providing guidance on using specific
                features, I am ready to assist users with any software-related
                needs, ensuring their satisfaction and success with the products
                they rely on
              </p>
              <ul className={`${styles.servicesModelServices} grid`}>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Technical Expertise
                  </p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Multi-Channel Support
                  </p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Documentation and Knowledge Sharing
                  </p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Problem Resolutions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.servicesContent}>
          <div>
            <i className={`uil uil-edit ${styles.servicesIcon}`}></i>
            <h3 className={styles.servicesTitle}>
              Software <br />
              Project Coordinator
            </h3>
          </div>
          <span
            className={styles.servicesButton}
            onClick={() => toggleService(3)}
          >
            Discover More
            <i
              className={`uil uil-arrow-right ${styles.servicesButtonIcon}`}
            ></i>
          </span>
          <div
            className={`${styles.servicesModel} ${
              toggledService === 3 ? styles.activeModel : ""
            }`}
          >
            <div className={styles.servicesModelContent}>
              <i
                className={`uil uil-times ${styles.servicesModelClose}`}
                onClick={() => toggleService(0)}
              ></i>
              <h3 className={styles.servicesModelTitle}>
                Software Project Coordinator
              </h3>
              <p className={styles.servicesModelDescription}>
                As an experienced Project Coordinator, I offer adaptability and
                a proven ability to manage diverse projects across different
                industries and sectors. My skills in project planning,
                scheduling, and communication make me well-suited to coordinate
                a wide range of projects, regardless of their scope or
                complexity. I excel in collaborating with cross-functional
                teams, ensuring project goals are met, and delivering results on
                time and within budget. Whether it's software development,
                marketing campaigns, events, or any other project type, I am
                ready to apply my project management expertise to drive
                successful outcomes and achieve project objectives efficiently.
              </p>
              <ul className={`${styles.servicesModelServices} grid`}>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>Project Planning</p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>Documentation</p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Stakeholder Engagement
                  </p>
                </li>
                <li className={styles.servicesModelService}>
                  <i
                    className={`uil uil-check-circle ${styles.servicesModelIcon}`}
                  ></i>
                  <p className={styles.servicesModelInfo}>
                    Content Creation and Translation
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
