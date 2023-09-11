import { IGitHubRepo } from "./ReposInterface";
import repoInfo from "../../../../Info/RepoInfo";

export const populateRepos = (
  setRepos: React.Dispatch<React.SetStateAction<IGitHubRepo[]>>
) => {
  const url = `https://api.github.com/users/${repoInfo.githubUsername}/repos`;
  fetch(url)
    .then((response) => {
      response.json().then((data) => {
        setRepos(data);
      });
    })
    .catch((error) => {
      setRepos([errorFallbackRepo]);
      console.error(error);
    });
};

const errorFallbackRepo: IGitHubRepo = {
  allow_forking: false,
  archive_url: "",
  archived: false,
  assignees_url: "",
  blobs_url: "",
  branches_url: "",
  clone_url: "",
  collaborators_url: "",
  comments_url: "",
  commits_url: "",
  compare_url: "",
  contents_url: "",
  contributors_url: "",
  created_at: "",
  default_branch: "",
  deployments_url: "",
  description: null,
  disabled: false,
  downloads_url: "",
  events_url: "",
  fork: false,
  forks: 0,
  forks_count: 0,
  forks_url: "",
  full_name: "",
  git_commits_url: "",
  git_refs_url: "",
  git_tags_url: "",
  git_url: "",
  has_discussions: false,
  has_downloads: false,
  has_issues: false,
  has_pages: false,
  has_projects: false,
  has_wiki: false,
  homepage: null,
  hooks_url: "",
  html_url: "",
  id: 0,
  is_template: false,
  issue_comment_url: "",
  issue_events_url: "",
  issues_url: "",
  keys_url: "",
  labels_url: "",
  language: "",
  languages_url: "",
  license: null,
  merges_url: "",
  milestones_url: "",
  mirror_url: null,
  name: "",
  node_id: "",
  notifications_url: "",
  open_issues: 0,
  open_issues_count: 0,
  owner: {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
  },
  private: false,
  pulls_url: "",
  pushed_at: "",
  releases_url: "",
  size: 0,
  ssh_url: "",
  stargazers_count: 0,
  stargazers_url: "",
  statuses_url: "",
  subscribers_url: "",
  subscription_url: "",
  svn_url: "",
  tags_url: "",
  teams_url: "",
  topics: [],
  trees_url: "",
  updated_at: "",
  url: "",
  visibility: "",
  watchers: 0,
  watchers_count: 0,
  web_commit_signoff_required: false,
};
