import { calculateTimeElapsedSince } from "../RepoUtil/ElapsedTime";
import { IGitHubRepo } from "../RepoUtil/ReposInterface";

import styles from "./RepoDisplay.module.css";

interface IRepoDisplayProps {
  repo: IGitHubRepo;
  avatar: JSX.Element;
}

const RepoDisplay = ({ repo, avatar }: IRepoDisplayProps) => {
  return (
    <div className={styles.repoContainer}>
      <div className={styles.repoHead}>{avatar} Joshua Bergman</div>
      <div className={styles.repoContent}>
        <a
          style={{ textDecoration: "inherit" }}
          target="blank"
          rel="noreferrer"
          href={repo.html_url}
        >
          <h4 className={styles.repoName}>{repo.name}</h4>
        </a>
        <h6 className={styles.public}>Public</h6>
        <p className={styles.repoDesc}>{repo.description}</p>
        <div className={styles.repoStats}>
          <p className={styles.repoStat}>{repo.language}</p>
          <p className={styles.repoStat}>
            Updated {calculateTimeElapsedSince(repo.pushed_at)} ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepoDisplay;
