declare module "useragent" {
  declare var npm$namespace$Useragent: {
    parse: typeof Useragent$parse,
    lookup: typeof Useragent$lookup,
    is: typeof Useragent$is,
    fromJSON: typeof Useragent$fromJSON,
    version: typeof Useragent$version,

    Agent: typeof Useragent$Agent,
    OperatingSystem: typeof Useragent$OperatingSystem,
    Device: typeof Useragent$Device
  };
  declare export class Useragent$Agent {
    family: string;
    major: string;
    minor: string;
    patch: string;
    source: string;
    os: Useragent$OperatingSystem;
    device: Useragent$Device;

    /**
     * The representation of a parsed user agent.
     * @param family The name of the browser
     * @param major Major version of the browser
     * @param minor Minor version of the browser
     * @param patch Patch version of the browser
     * @param source The actual user agent string
     */
    constructor(
      family?: string,
      major?: string,
      minor?: string,
      patch?: string,
      source?: string
    ): this;

    /**
     * Generates a string output of the parsed user agent.
     */
    toAgent(): string;

    /**
     * Generates a string output of the parser user agent and operating system.
     */
    toString(): string;

    /**
     * Outputs a compiled veersion number of the user agent.
     */
    toVersion(): string;

    /**
     * The representation of a parsed Operating System.
     */
    toJSON(): {
      family: string,
      major: string,
      minor: string,
      patch: string,
      device: string,
      os: string
    };
  }

  declare export class Useragent$OperatingSystem {
    family: string;
    major: string;
    minor: string;
    patch: string;

    /**
     * The representation of a parsed Operating System.
     * @param family The name of the os
     * @param major Major version of the os
     * @param minor Minor version of the os
     * @param patch Patch version of the os
     */
    constructor(
      family?: string,
      major?: string,
      minor?: string,
      patch?: string
    ): this;

    /**
     * Generates a stringified version of the Operating System.
     */
    toString(): string;

    /**
     * Generates the version of the Operating System.
     */
    toVersion(): string;

    /**
     * Outputs a JSON string of the OS, values are defaulted to undefined so they are not outputed in the stringify.
     */
    toJSON(): {
      family: string,
      major: string | void,
      minor: string | void,
      patch: string | void
    };
  }

  declare export class Useragent$Device {
    family: string;
    major: string;
    minor: string;
    patch: string;

    /**
     * The representation of a parsed Device.
     * @param family The name of the device
     * @param major Major version of the device
     * @param minor Minor version of the device
     * @param patch Patch version of the device
     */
    constructor(
      family?: string,
      major?: string,
      minor?: string,
      patch?: string
    ): this;

    /**
     * Generates a stringified version of the Device.
     */
    toString(): string;

    /**
     * Generates the version of the Device.
     */
    toVersion(): string;

    /**
     * Outputs a JSON string of the Device, values are defaulted to undefined so they are not outputed in the stringify.
     */
    toJSON(): {
      family: string,
      major: string | void,
      minor: string | void,
      patch: string | void
    };
  }

  /**
   * Parses the user agent string with the generated parsers from the ua-parser project on google code.
   * @param userAgent The user agent string
   * @param jsAgent Optional UA from js to detect chrome frame
   */
  declare export function Useragent$parse(
    userAgent?: string,
    jsAgent?: string
  ): Useragent$Agent;

  /**
   * If you are doing a lot of lookups you might want to cache the results of the parsed user agent string instead, in memory.
   * @param userAgent The user agent string
   * @param jsAgent Optional UA from js to detect chrome frame
   */
  declare export function Useragent$lookup(
    userAgent?: string,
    jsAgent?: string
  ): Useragent$Agent;

  /**
   * Does a more inaccurate but more common check for useragents identification.
   * @param useragent The user agent
   */
  declare export function Useragent$is(useragent?: string): Useragent$Details;

  declare export interface Useragent$Details {
    chrome: boolean;
    firefox: boolean;
    ie: boolean;
    mobile_safari: boolean;
    mozilla: boolean;
    opera: boolean;
    safari: boolean;
    webkit: boolean;
    android: boolean;
    version: string;
  }

  /**
   * Transform a JSON object back to a valid userAgent string
   * @param obj A JSON object or stringified JSON object
   */
  declare export function Useragent$fromJSON(
    obj:
      | string
      | {
          family: string,
          major: string,
          minor: string,
          patch: string,
          device?: string,
          os?: string
        }
  ): Useragent$Agent;

  /**
   * Library version
   */
  declare export var Useragent$version: number;
  declare export default typeof Useragent;
}
