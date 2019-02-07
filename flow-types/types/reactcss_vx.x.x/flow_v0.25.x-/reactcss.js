declare module "reactcss" {
  import typeof * as React from "react";

  declare type LoopableProps = {
    "nth-child": number,
    "first-child"?: boolean,
    "last-child"?: boolean,
    even?: boolean,
    odd?: boolean
  } & React.Props<any>;

  declare type HoverProps<T> = {
    hover?: boolean
  } & React.Props<T>;

  declare interface Classes<T> {
    default: $Shape<T>;
    [scope: string]: $Shape<T>;
  }
  declare export type CSS = React.CSSProperties;
  declare export function hover<A>(
    component: React.ComponentClass<A> | React.StatelessComponent<A>
  ): React.ComponentClass<A>;

  declare export function loop(index: number, length: number): LoopableProps;

  declare export default function reactCSS<T>(
    classes: Classes<T>,
    ...activations: Array<any>
  ): T;
}
