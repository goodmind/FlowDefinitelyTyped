declare module "eyes" {
  declare export function inspector(options?: EyesOptions): InspectorFunction;

  declare export function inspect(thing: any, label?: string): void;

  declare export interface InspectorFunction {
    (thing: any, label?: string): string;
  }
  declare export interface EyesOptions {
    /**
     * Styles applied to stdout
     */
    styles?: {
      /**
       * Overall base style applied to everything
       */
      all?: string,

      /**
       * Style when printing inspection labels, like 'array' in `array: [1, 2, 3]`
       */
      label?: string,

      /**
       * Style when printing objects which don't have a literal representation, such as functions
       */
      other?: string,

      /**
       * Style when printing the keys in object literals, like 'a' in `{a: 1}`
       */
      key?: string,

      /**
       * Style when printing `null`, `undefined`, etc.
       */
      special?: string,

      /**
       * Style when printing strings
       */
      string?: string,

      /**
       * Style when printing numbers
       */
      number?: string,

      /**
       * Style when printing booleans
       */
      bool?: string,

      /**
       * Style when printing RegExps
       */
      regexp?: string
    };

    /**
     * Indent object literals
     */
    pretty?: boolean;

    /**
     * Don't output functions at all
     */
    hideFunctions?: boolean;

    /**
     * Stream to write to, or null
     */
    stream?: NodeJS.WritableStream;

    /**
     * Truncate output if longer
     */
    maxLength?: number;
  }
}
