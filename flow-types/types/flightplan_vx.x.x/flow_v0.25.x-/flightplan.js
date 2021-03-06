declare var flightplan: FlightplanInterfaces$Flightplan;
declare interface FlightplanInterfaces$CommandOptions {
  silent?: boolean;
  failsafe?: boolean;
}

declare type FlightplanInterfaces$SudoOptions = {
  user?: string
} & CommandOptions;

declare interface FlightplanInterfaces$PromptOptions {
  hidden?: boolean;
  required?: boolean;
}

declare interface FlightplanInterfaces$CommandResult {
  code: number;
  stdout: string;
  stderr: string;
}

declare interface FlightplanInterfaces$Transport {
  runtime: FlightplanInterfaces$Host;
  exec(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  exec(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  sudo(
    command: string,
    options?: FlightplanInterfaces$SudoOptions
  ): FlightplanInterfaces$CommandResult;
  transfer(
    files: FlightplanInterfaces$CommandResult,
    remoteDir: string,
    options?: FlightplanInterfaces$CommandOptions
  ): Array<FlightplanInterfaces$CommandResult>;
  transfer(
    files: FlightplanInterfaces$CommandResult[],
    remoteDir: string,
    options?: FlightplanInterfaces$CommandOptions
  ): Array<FlightplanInterfaces$CommandResult>;
  transfer(
    files: string[],
    remoteDir: string,
    options?: FlightplanInterfaces$CommandOptions
  ): Array<FlightplanInterfaces$CommandResult>;
  prompt(message: string, options?: FlightplanInterfaces$PromptOptions): string;
  waitFor(fn: (done: (result: any) => void) => void): any;
  with(command: string, fn: () => void): void;
  with(options: FlightplanInterfaces$CommandOptions, fn: () => void): void;
  with(
    command: string,
    options: FlightplanInterfaces$CommandOptions,
    fn: () => void
  ): void;
  silent(): void;
  verbose(): void;
  failsafe(): void;
  log(message: string): void;
  debug(message: string): void;
  awk(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  awk(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  cat(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  cat(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  cd(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  cd(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  chgrp(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  chgrp(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  chmod(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  chmod(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  chown(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  chown(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  cp(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  cp(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  echo(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  echo(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  find(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  find(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  ftp(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  ftp(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  grep(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  grep(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  groups(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  groups(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  hostname(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  hostname(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  kill(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  kill(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  ln(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  ln(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  ls(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  ls(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  mkdir(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  mkdir(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  mv(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  mv(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  ps(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  ps(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  pwd(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  pwd(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  rm(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  rm(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  rmdir(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  rmdir(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  scp(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  scp(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  sed(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  sed(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  tail(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  tail(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  tar(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  tar(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  touch(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  touch(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  unzip(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  unzip(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  whoami(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  whoami(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  zip(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  zip(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  git(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  git(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  hg(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  hg(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  node(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  node(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  npm(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  npm(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  rsync(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  rsync(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
  svn(
    command: string,
    options?: FlightplanInterfaces$CommandOptions
  ): FlightplanInterfaces$CommandResult;
  svn(
    command: string,
    options?: {
      exec: any
    }
  ): FlightplanInterfaces$CommandResult;
}

declare interface FlightplanInterfaces$TargetOptions {
  host: string;
  username: string;
  agent: string;
  failsafe?: boolean;
}

declare interface FlightplanInterfaces$Runtime {
  task: string;
  target: string;
  hosts: FlightplanInterfaces$Host[];
  options: any;
}

declare interface FlightplanInterfaces$Host {
  host: string;
  port: number;
}

declare interface FlightplanInterfaces$Flightplan {
  runtime: FlightplanInterfaces$Runtime;
  local(
    fn: (transport: FlightplanInterfaces$Transport) => void
  ): FlightplanInterfaces$Flightplan;
  local(
    task: string,
    fn: (transport: FlightplanInterfaces$Transport) => void
  ): FlightplanInterfaces$Flightplan;
  local(
    task: string[],
    fn: (transport: FlightplanInterfaces$Transport) => void
  ): FlightplanInterfaces$Flightplan;
  remote(
    fn: (transport: FlightplanInterfaces$Transport) => void
  ): FlightplanInterfaces$Flightplan;
  remote(
    task: string,
    fn: (transport: FlightplanInterfaces$Transport) => void
  ): FlightplanInterfaces$Flightplan;
  remote(
    task: string[],
    fn: (transport: FlightplanInterfaces$Transport) => void
  ): FlightplanInterfaces$Flightplan;
  target(
    name: string,
    options: FlightplanInterfaces$TargetOptions
  ): FlightplanInterfaces$Flightplan;
  target(
    name: string,
    options: FlightplanInterfaces$TargetOptions[]
  ): FlightplanInterfaces$Flightplan;
  target(
    name: string,
    fn: (done: (result: any) => void) => void
  ): FlightplanInterfaces$Flightplan;
  abort(message?: string): void;
}
declare module "flightplan" {
  declare export default typeof flightplan;
}
