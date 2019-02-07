declare module "new-github-issue-url" {
  declare module.exports: typeof newGithubIssueUrl;

  /**
   * Returns a URL string.
   */
  declare function newGithubIssueUrl(
    options: newGithubIssueUrl$newGithubIssueUrl$Options
  ): string;

  declare type newGithubIssueUrl$Without<T, U> = $ObjMapi<
    { [k: Exclude<$Keys<T>, $Keys<U>>]: any },
    <P>(P) => empty
  >;

  declare type newGithubIssueUrl$XOR<T, U> =
    "There was Conditional Type, use $Call utility type";

  declare type newGithubIssueUrl$Options = newGithubIssueUrl$XOR<
    newGithubIssueUrl$RepoUrlOptions,
    newGithubIssueUrl$UserRepoOptions
  >;

  declare interface newGithubIssueUrl$BaseOptions {
    /**
     * The issue body.
     */
    body?: string;

    /**
     * The issue title.
     */
    title?: string;

    /**
     * Use an [issue template](https://help.github.com/articles/manually-creating-a-single-issue-template-for-your-repository).
     *
     * For example, if you want to use a template at `ISSUE_TEMPLATE/unicorn.md`, you would specify `unicorn.md` here.
     */
    template?: string;

    /**
     * The labels for the issue.
     *
     * *Requires the user to have the permission to add labels.*
     */
    labels?: string[];

    /**
     * The milestone for the issue.
     *
     * *Requires the user to have the permission to add milestone.*
     */
    milestone?: string;

    /**
     * The user to assign to the issue.
     *
     * *Requires the user to have the permission to add assignee.*
     */
    assignee?: string;

    /**
     * The projects to add the issue to.
     *
     * The project reference format is `user/<project-number>`, for example, if the URL to the project
     * is `https://github.com/sindresorhus/some-repo/projects/3`, the project reference would be `some-repo/3`.
     *
     * *Requires the user to have the permission to add projects.*
     */
    projects?: string[];
  }

  declare type newGithubIssueUrl$RepoUrlOptions = {
    /**
     * The full URL to the repo.
     */
    repoUrl: string
  } & newGithubIssueUrl$BaseOptions;

  declare type newGithubIssueUrl$UserRepoOptions = {
    /**
     * GitHub username or organization.
     */
    user: string,

    /**
     * GitHub repo.
     */
    repo: string
  } & newGithubIssueUrl$BaseOptions;
}
