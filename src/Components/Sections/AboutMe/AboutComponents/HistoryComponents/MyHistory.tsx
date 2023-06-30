import React, { useState } from "react";
import { BsArrow90DegUp } from "react-icons/bs";

import styles from "./History.module.css";
import historyInfo from "../../../../../Info/History";

const MyHistory = () => {
  const [showingMoreState, setShowingMoreState] = useState(false);

  const toggleShowingMore = () => {
    setShowingMoreState((prevState) => !prevState);
  };

  return (
    <div className={styles.historyContainer}>
      <h4 className={styles.historyHeading}>About Me</h4>
      <h5 className={styles.historyParagraphHeading}>TLDR</h5>
      {historyInfo.tldrDesc}
      {showingMoreState && (
        <React.Fragment>
          <h5 className={styles.historyParagraphHeading}>Actually About Me</h5>
          {historyInfo.myDesc}
        </React.Fragment>
      )}
      <button onClick={toggleShowingMore} className={styles.showMore}>
        {showingMoreState ? (
          <React.Fragment>
            <BsArrow90DegUp />
            Show Less
          </React.Fragment>
        ) : (
          <React.Fragment>
            Show More
            <BsArrow90DegUp style={{ transform: "rotate(180deg)" }} />
          </React.Fragment>
        )}
      </button>
    </div>
  );
};

export default MyHistory;
