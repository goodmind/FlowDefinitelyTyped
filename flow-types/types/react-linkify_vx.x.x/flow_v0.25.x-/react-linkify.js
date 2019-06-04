declare module "react-linkify" {
  import typeof * as React from "react";

  declare var ReactLinkify: typeof npm$namespace$ReactLinkify;

  declare var npm$namespace$ReactLinkify: {
    ReactLinkify: typeof ReactLinkify$ReactLinkify
  };

  /**
   * Matching information
   */
  declare interface ReactLinkify$MatchInfo {
    /**
     * Link schema, can be empty for fuzzy links, or for protocol-neutral links
     */
    schema: string;

    /**
     * Offset of matched text
     */
    index: number;

    /**
     * Index of next char after the end of the matched text
     */
    lastIndex: number;

    /**
     * Normalized text
     */
    text: string;

    /**
     * Link, generated from matched text
     */
    url: string;
  }

  declare interface ReactLinkify$Props {
    children: React.Node;

    /**
     * Custom anchor tag creator
     * Default to using exisint <a> tag with the provided href={decoratedHref}, key={key}
     * and children={decoratedText}, without additional styling
     */
    componentDecorator?: (
      decoratedHref: string,
      decoratedText: string,
      key: number
    ) => React.Node;

    /**
     * Custom href decorator or mapper on the matched (url) href
     * Default to no transformation
     */
    hrefDecorator?: (urlHref: string) => string;

    /**
     * Custom matcher for (url), that returns each match with the matching information
     * Default to https://github.com/markdown-it/linkify-it's LinkifyIt().tlds(tlds).match
     */
    matchDecorator?: (text: string) => ReactLinkify$MatchInfo[] | null;

    /**
     * Custom text decorator or mapper on the matched (url) text
     * Default to no transformation
     */
    textDecorator?: (urlText: string) => string;
  }

  declare class ReactLinkify$ReactLinkify
    mixins React.Component<ReactLinkify$Props> {}
  declare export default typeof ReactLinkify$ReactLinkify;
}
