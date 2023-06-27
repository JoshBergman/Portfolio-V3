import styles from "./Landing.module.css";
import LandingButtons from "./LandingButtons";

const Landing = () => {
  return (
    <div className="white-section">
      <div className={styles.verticalAlignContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.landingText}>
            Hi I'm <strong className={styles.strong}>Josh.</strong>
          </h1>
          <h2 className={styles.landingText}>I'm a front end developer.</h2>
          <LandingButtons />
        </div>
      </div>
    </div>
  );
};

export default Landing;
