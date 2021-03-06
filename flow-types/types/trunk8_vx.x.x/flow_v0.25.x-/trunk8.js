declare module "trunk8" {
  declare interface Trunk8Options {
    /**
     * (Default: '&hellip;') The string to insert in place of the omitted text. This value may include HTML.
     * @param {string} fill
     */
    fill?: string;

    /**
     * (Default: 1) The number of lines of text-wrap to tolerate before truncating. This value must be an integer greater than or equal to 1.
     * @param {number} lines
     */
    lines?: number;

    /**
     * (Default: 'right') The side of the text from which to truncate. Valid values include 'center', 'left', and 'right'.
     * @param {string} side
     */
    side?: string;

    /**
     * (Default: true) When true, the title attribute of the targeted HTML element will be set to the original, untruncated string. Valid values include true and false.
     * @param {bool} tooltip
     */
    tooltip?: boolean;

    /**
     * (Default: 'auto') The width, in characters, of the desired text. When set to 'auto', trunk8 will maximize the amount of text without spilling over.
     * @param {string} width
     */
    width?: string;
  }
  declare interface JQuery {
    /**
     * Creates a trunk8 instance and calls a method.
     * @constructor
     * @param {string} method
     * @param {string} value
     */
    trunk8(method: string, value?: string): any;

    /**
     * Creates a trunk8 instance with default options.
     * @constructor
     * @param {Trunk8Options} options
     */
    trunk8(options?: Trunk8Options): any;
  }
}
