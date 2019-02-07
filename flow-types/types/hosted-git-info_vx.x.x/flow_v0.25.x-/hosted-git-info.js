declare module "hosted-git-info" {
  declare class HostedGitInfo {
    host: HostedGitInfo$HostedGitInfo$hosts;
    user: string | null;
    auth: string | null;
    project: string | null;
    committish: string | null;
    default: string;
    opts: HostedGitInfo$HostedGitInfo$Options;
    constructor(
      host: HostedGitInfo$HostedGitInfo$hosts,
      user: string | null,
      auth: string | null,
      project: string | null,
      committish: string | null,
      defaultRepresentation: string,
      opts?: HostedGitInfo$HostedGitInfo$Options
    ): this;
    sshtemplate: string;
    sshurltemplate: string;
    browsetemplate: string;
    docstemplate: string;
    filetemplate: string;
    shortcuttemplate: string;
    pathtemplate: string;
    pathmatch: RegExp;
    protocols_re: RegExp;
    hashformat(fragment: string): string;
    protocols: string[];
    domain: string;
    bugstemplate: string;
    gittemplate: string;
    browsefiletemplate: string;
    httpstemplate: string;
    treepath: string;
    tarballtemplate: string;
    hash(): string;
    ssh(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    sshurl(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    browse(
      path: string,
      fragment: string,
      opts?: HostedGitInfo$HostedGitInfo$FillOptions
    ): string | void;
    browse(
      path: string,
      opts?: HostedGitInfo$HostedGitInfo$FillOptions
    ): string | void;
    browse(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    docs(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    bugs(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    https(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    git(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    shortcut(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    path(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    tarball(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    file(
      path: string,
      opts?: HostedGitInfo$HostedGitInfo$FillOptions
    ): string | void;
    getDefaultRepresentation(): string;
    toString(opts?: HostedGitInfo$HostedGitInfo$FillOptions): string | void;
    static fromUrl(
      gitUrl: string,
      options?: HostedGitInfo$HostedGitInfo$Options
    ): HostedGitInfo;
  }
  declare interface HostedGitInfo$Options {
    noCommittish?: boolean;
    noGitPlus?: boolean;
  }

  declare type HostedGitInfo$FillOptions = {
    path?: string,
    auth?: string,
    fragment?: string,
    committish?: string,
    treepath?: string
  } & HostedGitInfo$Options;

  declare type HostedGitInfo$hosts = "github" | "bitbucket" | "gitlab" | "gist";
  declare module.exports: typeof HostedGitInfo;
}
