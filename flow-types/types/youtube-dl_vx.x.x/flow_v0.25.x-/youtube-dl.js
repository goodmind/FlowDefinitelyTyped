declare module "youtube-dl" {
  import typeof * as fs from "fs";

  declare export default typeof youtubedl;

  declare function youtubedl(
    url: string,
    arg: string[],
    opt: {
      [key: string]: string
    }
  ): youtubedl$Youtubedl;

  declare var npm$namespace$youtubedl: {
    exec: typeof youtubedl$exec,
    getInfo: typeof youtubedl$getInfo,
    getSubs: typeof youtubedl$getSubs,
    getThumbs: typeof youtubedl$getThumbs,
    getExtractors: typeof youtubedl$getExtractors
  };
  declare interface youtubedl$Youtubedl {
    on(event: string, func: (info: youtubedl$Info) => void): this;
    pipe(stream: fs.WriteStream): this;
  }

  declare interface youtubedl$Info {
    _filename: string;
    filename: string;
    size: number;
    _duration_raw: number;
    _duration_hms: string;
    duration: string;
  }

  declare interface youtubedl$Options {
    auto?: boolean;
    all?: boolean;
    lang?: string;
    cwd?: string;
  }

  declare function youtubedl$exec(
    url: string,
    args: string[],
    options: youtubedl$Options,
    callback: (err: any, output: string[]) => void
  ): void;

  declare function youtubedl$getInfo(
    url: string,
    args: string[],
    options: youtubedl$Options,
    callback: (err: any, output: youtubedl$Info) => void
  ): void;

  declare function youtubedl$getInfo(
    url: string,
    args: string[],
    callback: (err: any, output: youtubedl$Info) => void
  ): void;

  declare function youtubedl$getInfo(
    url: string,
    callback: (err: any, output: youtubedl$Info) => void
  ): void;

  declare function youtubedl$getSubs(
    url: string,
    options: youtubedl$Options,
    callback: (err: any, output: string[]) => void
  ): void;

  declare function youtubedl$getSubs(
    url: string,
    callback: (err: any, output: string[]) => void
  ): void;

  declare function youtubedl$getThumbs(
    url: string,
    options: youtubedl$Options,
    callback: (err: any, output: string[]) => void
  ): void;

  declare function youtubedl$getThumbs(
    url: string,
    callback: (err: any, output: string[]) => void
  ): void;

  declare function youtubedl$getExtractors(
    descriptions: boolean,
    options: youtubedl$Options,
    callback: (err: any, output: string[]) => void
  ): void;

  declare function youtubedl$getExtractors(
    descriptions: boolean,
    callback: (err: any, output: string[]) => void
  ): void;

  declare function youtubedl$getExtractors(
    callback: (err: any, output: string[]) => void
  ): void;
}
