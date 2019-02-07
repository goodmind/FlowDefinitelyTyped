declare module "transliteration" {
  declare export function transliterate(
    str: string,
    options?: transliterate$slugify$Options
  ): string;

  declare var npm$namespace$transliterate: {
    config: typeof transliterate$config
  };

  /**
   * Bind options globally so any following calls will be using
   * optionsObj by default. If optionsObj argument is omitted,
   * it will return current default option object.
   */
  declare function transliterate$config(
    optionsObj?: slugify$Options
  ): slugify$Options;

  declare interface transliterate$Options {
    /**
     * Unicode characters that are not in the database will be replaced with `unknown`
     * default: "[?]"
     */
    unknown?: string;

    /**
     * Custom replacement of the strings before transliteration
     */
    replace?:
      | string[][]
      | {
          [source: string]: string
        };

    /**
     * Strings in the ignore list will be bypassed from transliteration
     */
    ignore?: string[];

    /**
     * Whether to force slugs to be lowercased
     * default: true
     */
    lowercase?: boolean;

    /**
     * Separator of the slug
     * default: "-"
     */
    separator?: string;

    /**
     * Custom replacement of the strings before transliteration
     */
    replace?:
      | string[][]
      | {
          [source: string]: string
        };

    /**
     * Strings in the ignore list will be bypassed from transliteration
     */
    ignore?: string[];
  }
  declare export function slugify(
    str: string,
    options?: slugify$transliterate$Options
  ): string;

  declare var npm$namespace$slugify: {
    config: typeof slugify$config
  };

  /**
   * Bind options globally so any following calls will be using
   * optionsObj by default. If optionsObj argument is omitted,
   * it will return current default option object.
   */
  declare function slugify$config(
    optionsObj?: transliterate$Options
  ): transliterate$Options;

  declare interface slugify$Options {
    /**
     * Unicode characters that are not in the database will be replaced with `unknown`
     * default: "[?]"
     */
    unknown?: string;

    /**
     * Custom replacement of the strings before transliteration
     */
    replace?:
      | string[][]
      | {
          [source: string]: string
        };

    /**
     * Strings in the ignore list will be bypassed from transliteration
     */
    ignore?: string[];

    /**
     * Whether to force slugs to be lowercased
     * default: true
     */
    lowercase?: boolean;

    /**
     * Separator of the slug
     * default: "-"
     */
    separator?: string;

    /**
     * Custom replacement of the strings before transliteration
     */
    replace?:
      | string[][]
      | {
          [source: string]: string
        };

    /**
     * Strings in the ignore list will be bypassed from transliteration
     */
    ignore?: string[];
  }
}
