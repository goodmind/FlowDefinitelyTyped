declare module "postcss-nested" {
  import type { Plugin } from "postcss";

  declare interface nested$Options {
    /**
     * By default, plugin will bubble only @media and @supports at-rules.
     * You can add your custom at-rules to this list by this option.
     */
    bubble?: string[];

    /**
     * By default, plugin will unwrap only @font-face, @keyframes and @document at-rules.
     * You can add your custom at-rules to this list by this option.
     */
    unwrap?: string[];

    /**
     * By default, plugin will strip out any empty selector generated by intermediate nesting
     * levels. You can set this option to true to preserve them.
     */
    preserveEmpty?: boolean;
  }

  declare type nested$Nested = Plugin<nested$Options>;
  declare var nested: nested$Nested;
  declare export default typeof nested;
}
