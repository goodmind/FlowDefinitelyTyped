declare module "react-html-parser" {
  import type { ReactElement } from "react";

  declare export interface Transform {
    (
      node: { [key: string]: any },
      index: number,
      transform?: Transform
    ): ReactElement | void | null;
  }
  declare export interface Options {
    decodeEntities?: boolean;
    transform?: Transform;
    preprocessNodes?: (nodes: { [key: string]: any }[]) => any;
  }
  declare export function convertNodeToElement(
    node: { [key: string]: any },
    index: number,
    transform: Transform
  ): ReactElement;

  declare export function processNodes(
    nodes: { [key: string]: any }[],
    transform: Transform
  ): ReactElement[];

  declare export default function HtmlParser(
    html: string,
    options?: Options
  ): ReactElement[];
}
