declare module "browserslist" {
  declare interface browserslist$Browserslist {
    (
      queries?: string | $ReadOnlyArray<string>,
      opts?: browserslist$Options
    ): string[];
    coverage: (
      browsers: $ReadOnlyArray<string>,
      stats?: browserslist$Stats
    ) => number;
    clearCaches: () => void;
  }

  declare interface browserslist$Stats {
    [browser: string]: {
      [version: string]: number
    };
  }

  declare interface browserslist$Options {
    path?: string;
    env?: string;
    stats?: browserslist$Stats;
    config?: string;
    ignoreUnknownVersions?: boolean;
    dangerousExtend?: boolean;
  }
  declare var browserslist: browserslist$browserslist$Browserslist;
  declare module.exports: typeof browserslist;
}
