declare module "@pollyjs/utils" {
  declare export var MODES: {|
    +RECORD: "record", // "record"
    +REPLAY: "replay", // "replay"
    +PASSTHROUGH: "passthrough", // "passthrough"
    +STOPPED: "stopped" // "stopped"
  |};
}
