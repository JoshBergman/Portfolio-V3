import React, { useState, useEffect } from "react";

import { IGitHubRepo } from "./RepoUtil/ReposInterface";
import { populateRepos } from "./RepoUtil/PopulateRepos";

import styles from "./Repos.module.css";
import displayStyles from "./RepoCompenents/RepoDisplay.module.css";
import SectionHeading from "../../UI/UIComponents/SectionHeading";
import RepoDisplay from "./RepoCompenents/RepoDisplay";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import repoInfo from "../../../Info/RepoInfo";

const Repos = () => {
  const [displayedRepo, setDisplayedRepo] = useState(0);
  const [repos, setRepos] = useState<IGitHubRepo[]>([]);

  const avatar = (
    <img
      src={repoInfo.avatarUrl}
      alt={"Github avatar"}
      className={displayStyles.avatar}
    />
  );

  const incrementDisplayedRepo = () => {
    if (displayedRepo < repos.length - 1) {
      setDisplayedRepo(displayedRepo + 1);
    } else {
      setDisplayedRepo(0);
    }
  };

  const decrementDisplayedRepo = () => {
    if (displayedRepo > 0) {
      setDisplayedRepo(displayedRepo - 1);
    } else {
      setDisplayedRepo(repos.length - 1);
    }
  };

  useEffect(() => {
    populateRepos(setRepos);
  }, []);

  return (
    <div id="repos" className="blue-section" style={{ minHeight: "400px" }}>
      <SectionHeading offWhite={false}>Repositories</SectionHeading>
      {repos.length >= 1 ? (
        <React.Fragment>
          <h5 className={styles.counterHeader}>
            {displayedRepo + 1 + "/" + repos.length}
          </h5>
          <div className={styles.reposContainer}>
            <button className={styles.btn} onClick={decrementDisplayedRepo}>
              <IoIosArrowBack className={styles.icon} />
            </button>
            <RepoDisplay avatar={avatar} repo={repos[displayedRepo]} />
            <button className={styles.btn} onClick={incrementDisplayedRepo}>
              <IoIosArrowForward className={styles.icon} />
            </button>
          </div>
        </React.Fragment>
      ) : (
        <h5 className={styles.counterHeader}>Loading...</h5>
      )}
    </div>
  );
};

export default Repos;
