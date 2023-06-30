import styles from "./Landing.module.css";
import LandingButtons from "./LandingButtons";
import LandingText from "./LandingText";

const Landing = () => {
  return (
    <div id="landing" className="white-section">
      <div className={styles.verticalAlignContainer}>
        <div className={styles.titleContainer}>
          <LandingText />
          <LandingButtons />
        </div>
      </div>
    </div>
  );
};

export default Landing;
