declare module "react-github-button" {
  import type { Component } from "react";

  declare export interface ReactGitHubButtonProps {
    /**
     * The type of information to display
     */
    type: "stargazers" | "watchers" | "forks";

    /**
     * The size of the button. Leave undefined for default.
     */
    size?: "large";

    /**
     * Your GitHub id or organization name.
     */
    namespace: string;

    /**
     * The name of your repository.
     */
    repo: string;
  }
  declare export default class GitHubButton
    mixins Component<ReactGitHubButtonProps> {}
}
