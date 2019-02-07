declare module "vfile-message" {
  import typeof * as Unist from "unist";

  /**
   * Create a virtual message.
   */
  declare type vfileMessage$VFileMessage = {
    /**
     * Constructor of a message for `reason` at `position` from `origin`.
     * When an error is passed in as `reason`, copies the `stack`.
     * @param reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
     * @param position Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
     * @param origin Place in code the message originates from (`string`, optional).
     */
    (
      reason: string | Error,
      position?: Unist.Node | Unist.Position | Unist.Point,
      origin?: string
    ): vfileMessage$VFileMessage,

    /**
     * Category of message.
     */
    ruleId: string | null,

    /**
     * Reason for message.
     */
    reason: string,

    /**
     * Starting line of error.
     */
    line: number | null,

    /**
     * Starting column of error.
     */
    column: number | null,

    /**
     * Full range information, when available.
     * Has start and end properties, both set to an object with line and column, set to number?.
     */
    location: Unist.Position,

    /**
     * Namespace of warning.
     */
    source: string | null,

    /**
     * If true, marks associated file as no longer processable.
     */
    fatal?: boolean | null,

    /**
     * You may add a file property with a path of a file (used throughout the VFile ecosystem).
     */
    file?: string,

    /**
     * You may add a note property with a long form description of the message (supported by vfile-reporter).
     */
    note?: string,

    /**
     * You may add a url property with a link to documentation for the message.
     */
    url?: string,

    /**
     * It’s OK to store custom data directly on the VMessage, some of those are handled by utilities.
     */
    [key: string]: mixed
  } & Error;

  declare var vfileMessage: vfileMessage$vfileMessage$VFileMessage;
  declare module.exports: typeof vfileMessage;
}
