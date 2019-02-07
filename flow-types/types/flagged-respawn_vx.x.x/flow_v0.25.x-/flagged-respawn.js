declare module "flagged-respawn" {
  declare module.exports: typeof flaggedRespawn;

  declare function flaggedRespawn(
    flags: string[],
    argv: string[],
    callback: flaggedRespawn$flaggedRespawn$Callback
  ): void;

  declare function flaggedRespawn(
    flags: string[],
    argv: string[],
    forcedFlags: string | string[],
    callback: flaggedRespawn$flaggedRespawn$Callback
  ): void;

  declare type flaggedRespawn$Callback = (
    ready: boolean,
    proc: NodeJS.Process,
    argv: string[]
  ) => void;
}
