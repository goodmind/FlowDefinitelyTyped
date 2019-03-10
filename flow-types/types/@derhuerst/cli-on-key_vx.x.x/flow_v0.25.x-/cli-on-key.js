declare module "@derhuerst/cli-on-key" {
  import typeof * as stream from "stream";

  declare interface listen$Key {
    name?: string;
    ctrl: boolean;
    meta: boolean;
    shift: boolean;
    sequence: string;
    code?: string;
    raw: string;
  }

  declare type listen$Callback = (key: listen$Key) => void;

  declare type listen$OffKeyPress = (key: listen$Key) => void;
  declare function listen(
    stream: stream.Readable,
    callback: listen$Callback
  ): listen$OffKeyPress;

  declare export default typeof listen;
}
