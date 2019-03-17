declare module "react-native-htmlview" {
  import type { Component, ComponentType, Node } from "react";

  import type {
    StyleProp,
    TextProperties,
    ViewProperties,
    TextStyle,
    ViewStyle,
    ImageStyle
  } from "react-native";

  declare export interface HTMLViewNode {
    data?: string;
    type?: string;
    name?: string;
    attribs: {
      [key: string]: string
    };
  }
  declare export interface HTMLViewProps {
    /**
     * a string of HTML content to render
     */
    value: string;
    stylesheet?: {
      [key: string]: StyleProp<ViewStyle | TextStyle | ImageStyle>
    };
    onLinkPress?: (url: string) => void;
    onLinkLongPress?: (url: string) => void;

    /**
     * A custom function to render HTML nodes however you see fit. If the function returns undefined (not null), the
     * default renderer will be used for that node. The function takes the following arguments:
     *
     *   - defaultRenderer the default rendering implementation, so you can use the normal rendering logic for some subtree. defaultRenderer takes the following arguments:
     *      - node the node to render with the default rendering logic
     *      - parent the parent of node of node
     * @param node the html node as parsed by htmlparser2
     * @param index position of the node in parent node's children
     * @param siblings parent node's children (including current node)
     * @param parent parent node
     * @param defaultRenderer the default rendering implementation, so you can use the normal rendering logic for some subtree:
     */
    renderNode?: (
      node: HTMLViewNode,
      index: number,
      siblings: HTMLViewNode,
      parent: HTMLViewNode,
      defaultRenderer: (node: HTMLViewNode, parent: HTMLViewNode) => Node
    ) => Node;

    /**
     * Text which is rendered before every li inside a ul
     */
    bullet?: string;

    /**
     * Text which appears after every p element
     */
    paragraphBreak?: string;

    /**
     * Text which appears after text elements which create a new line (br, headings)
     */
    lineBreak?: string;

    /**
     * When explicitly false, effectively sets paragraphBreak and lineBreak to null
     */
    addLineBreaks?: boolean;
    RootComponent?: ComponentType;
    rootComponentProps?: ViewProperties;
    NodeComponent?: ComponentType;
    nodeComponentProps?: TextProperties;
    TextComponent?: ComponentType;
    textComponentProps?: TextProperties;
  }
  declare export default class HTMLView mixins Component<HTMLViewProps> {}
}
