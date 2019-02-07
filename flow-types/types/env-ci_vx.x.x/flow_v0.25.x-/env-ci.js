declare module "env-ci" {
  declare module.exports: typeof envCi;

  declare function envCi(options?: envCi$envCi$Options): envCi$envCi$CiEnv;

  declare interface envCi$Options {
    env?: {
      [envVar: string]: any
    };
    cwd?: string;
  }

  declare type envCi$CiEnv = envCi$NonCiEnv | envCi$KnownCiEnv;

  declare type envCi$KnownCiEnv =
    | envCi$AppveyorEnv
    | envCi$BambooEnv
    | envCi$BitbucketEnv
    | envCi$BitriseEnv
    | envCi$BuddyEnv
    | envCi$BuildkiteEnv
    | envCi$CircleCiEnv
    | envCi$CirrusEnv
    | envCi$CodeBuildEnv
    | envCi$CodefreshEnv
    | envCi$CodeshipEnv
    | envCi$DroneEnv
    | envCi$GitLabEnv
    | envCi$JenkinsEnv
    | envCi$SailEnv
    | envCi$SemaphoreEnv
    | envCi$ShippableEnv
    | envCi$TeamCityEnv
    | envCi$TravisEnv
    | envCi$VstsEnv
    | envCi$WerckerEnv;

  declare interface envCi$NonCiEnv {
    isCi: false;
    branch?: string;
    commit?: string;
  }

  declare interface envCi$CiEnvBase {
    isCi: true;
  }

  declare type envCi$AppveyorEnv = {
    name: "Appveyor",
    service: "appveyor",
    commit: string,
    tag?: string,
    build: string,
    buildUrl: string,
    branch: string,
    job: string,
    jobUrl: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$BambooEnv = {
    name: "Bamboo",
    service: "bamboo",
    commit: string,
    build: string,
    buildUrl: string,
    branch: string,
    job: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$BitbucketEnv = {
    name: "Bitbucket Pipelines",
    service: "bitbucket",
    commit: string,
    tag?: string,
    build: string,
    buildUrl: string,
    branch: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$BitriseEnv = {
    name: "Bitrise",
    service: "bitrise",
    commit: string,
    tag?: string,
    build: string,
    buildUrl: string,
    branch: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    slug: string
  } & envCi$CiEnvBase;

  declare type envCi$BuddyEnv = {
    name: "Buddy",
    service: "buddy",
    commit: string,
    tag?: string,
    build: string,
    buildUrl: string,
    branch?: string,
    pr?: string,
    isPr: boolean,
    slug: string
  } & envCi$CiEnvBase;

  declare type envCi$BuildkiteEnv = {
    name: "Buildkite",
    service: "buildkite",
    build: string,
    buildUrl: string,
    commit: string,
    tag?: string,
    branch: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$CircleCiEnv = {
    name: "CircleCI",
    service: "circleci",
    build: string,
    buildUrl: string,
    job: string,
    commit: string,
    tag?: string,
    branch?: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    slug: string
  } & envCi$CiEnvBase;

  declare type envCi$CirrusEnv = {
    name: "Cirrus CI",
    service: "cirrus",
    commit: string,
    tag?: string,
    build: string,
    buildUrl: string,
    job: string,
    jobUrl: string,
    branch: string,
    pr?: string,
    isPr: boolean,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$CodeBuildEnv = {
    name: "AWS CodeBuild",
    service: "codebuild",
    commit: string,
    build: string,
    branch: string,
    buildUrl: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$CodefreshEnv = {
    name: "Codefresh",
    service: "codefresh",
    commit: string,
    build: string,
    buildUrl: string,
    branch: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$CodeshipEnv = {
    name: "Codeship",
    service: "codeship",
    build: string,
    buildUrl: string,
    commit: string,
    branch: string,
    slug: string
  } & envCi$CiEnvBase;

  declare type envCi$DroneEnv = {
    name: "Drone",
    service: "drone",
    commit: string,
    tag?: string,
    build: string,
    branch: string,
    job: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    slug: string
  } & envCi$CiEnvBase;

  declare type envCi$GitLabEnv = {
    name: "GitLab CI/CD",
    service: "gitlab",
    commit: string,
    tag?: string,
    build: string,
    buildUrl: string,
    job: string,
    jobUrl: string,
    branch: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$JenkinsEnv = {
    name: "Jenkins",
    service: "jenkins",
    commit: string,
    branch: string,
    build: string,
    buildUrl: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$SailEnv = {
    name: "Sail CI",
    service: "sail",
    commit: string,
    branch?: string,
    pr?: string,
    isPr: boolean,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$SemaphoreEnv = {
    name: "Semaphore",
    service: "semaphore",
    commit: string,
    build: string,
    branch?: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$ShippableEnv = {
    name: "Shippable",
    service: "shippable",
    commit: string,
    tag?: string,
    build: string,
    buildUrl: string,
    branch: string,
    job: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$TeamCityEnv = {
    name: "TeamCity",
    service: "teamcity",
    branch?: string,
    commit: string,
    build: string,
    slug: string,
    root?: string
  } & envCi$CiEnvBase;

  declare type envCi$TravisEnv = {
    name: "Travis CI",
    service: "travis",
    commit: string,
    tag?: string,
    build: string,
    buildUrl: string,
    branch?: string,
    job: string,
    jobUrl: string,
    pr?: string,
    isPr: boolean,
    prBranch: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$VstsEnv = {
    name: "Visual Studio Team Services",
    service: "vsts",
    commit: string,
    build: string,
    branch: string,
    pr?: string,
    isPr: boolean,
    prBranch?: string,
    root: string
  } & envCi$CiEnvBase;

  declare type envCi$WerckerEnv = {
    name: "Wercker",
    service: "wercker",
    commit: string,
    build: string,
    buildUrl: string,
    branch: string,
    slug: string,
    root: string
  } & envCi$CiEnvBase;
}
