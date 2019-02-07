declare module "update-notifier" {
  declare module.exports: typeof UpdateNotifier$UpdateNotifier;

  declare function UpdateNotifier(
    settings?: UpdateNotifier$UpdateNotifier.UpdateNotifier$Settings
  ): UpdateNotifier$UpdateNotifier.UpdateNotifier$UpdateNotifier;

  declare class UpdateNotifier$UpdateNotifier {
    constructor(settings?: UpdateNotifier$Settings): this;
    update: UpdateNotifier$UpdateInfo;
    check(): void;
    checkNpm(): void;
    notify(customMessage?: UpdateNotifier$NotifyOptions): void;
  }

  declare interface UpdateNotifier$Settings {
    pkg?: UpdateNotifier$Package;
    callback?: (error: Error | null, update?: UpdateNotifier$UpdateInfo) => any;
    packageName?: string;
    packageVersion?: string;
    updateCheckInterval?: number;
    shouldNotifyInNpmScript?: boolean;
  }

  declare interface UpdateNotifier$BoxenOptions {
    padding?: number;
    margin?: number;
    align?: string;
    borderColor?: string;
    borderStyle?: string;
  }

  declare interface UpdateNotifier$NotifyOptions {
    message?: string;
    defer?: boolean;
    isGlobal?: boolean;
    boxenOpts?: UpdateNotifier$BoxenOptions;
  }

  declare interface UpdateNotifier$Package {
    name: string;
    version: string;
  }

  declare interface UpdateNotifier$UpdateInfo {
    latest: string;
    current: string;
    type: string;
    name: string;
  }
}
