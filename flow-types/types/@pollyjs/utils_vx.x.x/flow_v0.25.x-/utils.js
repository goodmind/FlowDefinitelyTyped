declare module "@pollyjs/utils" {
  declare export class MODES {
    constructor(...args: empty): mixed;
    static +RECORD: Class<MODES__RECORD> & MODES__RECORD & "record"; // "record"
    static +REPLAY: Class<MODES__REPLAY> & MODES__REPLAY & "replay"; // "replay"
    static +PASSTHROUGH: Class<MODES__PASSTHROUGH> &
      MODES__PASSTHROUGH &
      "passthrough"; // "passthrough"
    static +STOPPED: Class<MODES__STOPPED> & MODES__STOPPED & "stopped"; // "stopped"
  }

  declare class MODES__RECORD mixins MODES {}
  declare class MODES__REPLAY mixins MODES {}
  declare class MODES__PASSTHROUGH mixins MODES {}
  declare class MODES__STOPPED mixins MODES {}
}
