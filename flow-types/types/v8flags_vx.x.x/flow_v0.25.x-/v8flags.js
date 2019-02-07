declare module "v8flags" {
  declare module.exports: typeof v8flags;

  declare function v8flags(cb: (err: any, flags: string[]) => void): void;

  declare var npm$namespace$v8flags: {
    configfile: typeof v8flags$configfile,
    configPath: typeof v8flags$configPath
  };
  declare var v8flags$configfile: string;

  declare var v8flags$configPath: string;
}
