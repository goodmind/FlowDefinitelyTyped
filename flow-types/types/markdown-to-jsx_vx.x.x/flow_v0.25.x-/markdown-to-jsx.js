declare module "markdown-to-jsx" {
  import typeof * as React from "react";

  declare export default class Markdown mixins React.Component<MarkdownProps> {}
  declare export interface MarkdownProps {
    options?: MarkdownOptions;
    children?: React.Node;
  }
  declare export type ComponentOverride =
    | string
    | React.ComponentClass<>
    | React.SFC<>
    | {
        component: string | React.ComponentClass<> | React.SFC<>,
        props?: any
      };
  declare export interface MarkdownOptions {
    /**
     * Force all input strings to use block layout.
     */
    forceBlock?: boolean;

    /**
     * Force all input strings to use inline layout.
     */
    forceInline?: boolean;

    /**
     * Override representation of any HTML tag or custom component.
     */
    overrides?: {
      a?: ComponentOverride,
      br?: ComponentOverride,
      button?: ComponentOverride,
      code?: ComponentOverride,
      del?: ComponentOverride,
      div?: ComponentOverride,
      em?: ComponentOverride,
      footer?: ComponentOverride,
      input?: ComponentOverride,
      h1?: ComponentOverride,
      h2?: ComponentOverride,
      h3?: ComponentOverride,
      h4?: ComponentOverride,
      h5?: ComponentOverride,
      h6?: ComponentOverride,
      hr?: ComponentOverride,
      img?: ComponentOverride,
      ol?: ComponentOverride,
      p?: ComponentOverride,
      pre?: ComponentOverride,
      span?: ComponentOverride,
      strong?: ComponentOverride,
      sub?: ComponentOverride,
      sup?: ComponentOverride,
      table?: ComponentOverride,
      tbody?: ComponentOverride,
      td?: ComponentOverride,
      th?: ComponentOverride,
      thead?: ComponentOverride,
      tr?: ComponentOverride,
      ul?: ComponentOverride,

      /**
       * In addition to HTML tags, you can specify a custom component name which can be used within markdown text.
       */
      [key: string]: ComponentOverride | void
    };

    /**
     * Custom React.createElement behavior.
     */
    createElement?: <P: {}>(
      type: React.SFC<P> | React.ComponentClass<P> | string,
      props?: (React.Attributes & P) | null,
      ...children: React.Node[]
    ) => React.ReactElement<P>;

    /**
     * Custom function to generate an HTML id from headings.
     */
    slugify?: (text: string) => string;
  }
  declare export function compiler(
    markdown: string,
    options?: MarkdownOptions
  ): React$Node;
}
