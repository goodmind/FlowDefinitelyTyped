declare module 'new-github-release-url' {
        declare module.exports: typeof newGithubReleaseUrl

	
/**
 * Returns a URL string.
 */
declare function newGithubReleaseUrl(options: newGithubReleaseUrl$newGithubReleaseUrl$Options): string

	declare type newGithubReleaseUrl$Without<T, U> = $ObjMapi<{[k: Exclude<$Keys<T>, $Keys<U>>]: any}, <P>(P) => empty>;

declare type newGithubReleaseUrl$XOR<T, U> = "There was Conditional Type, use $Call utility type";

declare type newGithubReleaseUrl$Options = newGithubReleaseUrl$XOR<newGithubReleaseUrl$RepoUrlOptions, newGithubReleaseUrl$UserRepoOptions>;

declare interface newGithubReleaseUrl$BaseOptions {

/**
 * The tag name of the release.
 */
tag?: string,

/**
 * The branch name or commit SHA to point the release's tag at, if the tag doesn't already exist.
 * @default The default branch
 */
target?: string,

/**
 * The title of the release.
 * GitHub shows the `tag` name when not specified.
 */
title?: string,

/**
 * The description text of the release.
 */
body?: string,

/**
 * Whether the release should be marked as a pre-release.
 * @default false
 */
isPrerelease?: boolean
} 

declare type newGithubReleaseUrl$RepoUrlOptions = {

/**
 * The full URL to the repo.
 */
repoUrl: string
} & newGithubReleaseUrl$BaseOptions


declare type newGithubReleaseUrl$UserRepoOptions = {

/**
 * GitHub username or organization.
 */
user: string,

/**
 * GitHub repo.
 */
repo: string
} & newGithubReleaseUrl$BaseOptions

    }
