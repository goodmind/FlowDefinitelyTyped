declare module "ci-info" {
  /**
   * Returns a boolean. Will be `true` if the code is running on a CI server,
   * otherwise `false`.
   *
   * Some CI servers not listed here might still trigger the `ci.isCI`
   * boolean to be set to `true` if they use certain vendor neutral environment
   * variables. In those cases `ci.name` will be `null` and no vendor specific
   * boolean will be set to `true`.
   */
  declare export var isCI: boolean;

  /**
   * Returns a boolean if PR detection is supported for the current CI server.
   * Will be `true` if a PR is being tested, otherwise `false`. If PR detection is
   * not supported for the current CI server, the value will be `null`.
   */
  declare export var isPR: boolean | null;

  /**
   * Returns a string containing name of the CI server the code is running on. If
   * CI server is not detected, it returns `null`.
   *
   * Don't depend on the value of this string not to change for a specific vendor.
   * If you find your self writing `ci.name === 'Travis CI'`, you most likely want
   * to use `ci.TRAVIS` instead.
   */
  declare export var name: string | null;
  declare export var APPVEYOR: boolean;
  declare export var AZURE_PIPELINES: boolean;
  declare export var BAMBOO: boolean;
  declare export var BITBUCKET: boolean;
  declare export var BITRISE: boolean;
  declare export var BUDDY: boolean;
  declare export var BUILDKITE: boolean;
  declare export var CIRCLE: boolean;
  declare export var CIRRUS: boolean;
  declare export var CODEBUILD: boolean;
  declare export var CODESHIP: boolean;
  declare export var DRONE: boolean;
  declare export var DSARI: boolean;
  declare export var GITLAB: boolean;
  declare export var GOCD: boolean;
  declare export var HUDSON: boolean;
  declare export var JENKINS: boolean;
  declare export var MAGNUM: boolean;
  declare export var NETLIFY: boolean;
  declare export var SAIL: boolean;
  declare export var SEMAPHORE: boolean;
  declare export var SHIPPABLE: boolean;
  declare export var SOLANO: boolean;
  declare export var STRIDER: boolean;
  declare export var TASKCLUSTER: boolean;
  declare export var TEAMCITY: boolean;
  declare export var TRAVIS: boolean;
}
