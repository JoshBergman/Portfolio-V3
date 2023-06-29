import React, { useEffect, useState } from "react";

import styles from "./Landing.module.css";

const LandingText = () => {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setText1(100);
    }, 100);
    setTimeout(() => {
      setText2(100);
    }, 145);
  }, []);

  const text1Style = {
    opacity: text1,
    transform: "translateX(" + (text1 - 100) + "px)",
  };

  const text2Style = {
    opacity: text1,
    transform: "translateX(" + (text2 - 100) + "px)",
  };

  return (
    <React.Fragment>
      <h1 className={styles.landingText} style={text1Style}>
        Hi I'm <strong className={styles.strong}>Josh.</strong>
      </h1>
      <h2 className={styles.landingText} style={text2Style}>
        I'm a front end developer.
      </h2>
    </React.Fragment>
  );
};

export default LandingText;
