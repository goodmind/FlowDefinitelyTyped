declare module "turbostatus" {
  declare export interface Repository {
    name: string;
    path: string;
  }
  declare export interface Description {
    commitsSinceTag: string | false;
    hash: string;
    nearestTag: string | false;
  }
  declare export function checkout(
    folder: string,
    commit: string
  ): Promise<string>;

  declare export function clone(
    origin: string,
    folder: string
  ): Promise<string>;

  declare export function describe(folder: string): Promise<Description>;

  declare export function getBranch(folder: string): Promise<string>;

  declare export function getBranchFast(folder: string): Promise<string>;

  declare export function getLocalCommit(folder: string): Promise<string>;

  declare export function getMergeBase(folder: string): Promise<string>;

  declare export function getOrigin(folder: string): Promise<string>;

  declare export function getRemoteCommit(folder: string): Promise<string>;

  declare export function getRepos(
    folder: string,
    wildcard?: string
  ): Promise<Repository[]>;

  declare export function hasUncommited(folder: string): Promise<boolean>;

  declare export function hasUntracked(folder: string): Promise<boolean>;

  declare export function info(
    repo: Repository,
    remotes?: boolean
  ): Promise<Repository>;

  declare export function isRepo(folder: string): Promise<boolean>;

  declare export function references(folder: string): Promise<string>;
}
