declare module "fluent-react" {
  import typeof * as React from "react";

  import type { FluentBundle } from "fluent";

  declare export interface Node {
    TEXT_NODE: 3;
    nodeType: number;
    localName?: string;
    textContext: string;
  }
  declare export type MarkupParser = (str: string) => Node[];
  declare export interface Context {
    l10n: ReactLocalization;
    parseMarkup: MarkupParser;
  }
  declare export interface LocalizationProviderProps {
    bundles: IterableIterator<FluentBundle>;
    parseMarkup?: MarkupParser;
  }
  declare export class LocalizationProvider
    mixins React.Component<LocalizationProviderProps> {}
  declare export class ReactLocalization {
    constructor(bundles: IterableIterator<FluentBundle>): this;
    getString(
      id: string,
      args?: { [key: string]: any },
      fallback?: string
    ): string;
  }
  declare export interface LocalizedProps {
    id: string;
    attrs?: { [key: string]: any };
    [key: string]: any;
  }
  declare export class Localized mixins React.Component<LocalizedProps> {}

  /**
   * A property P will be present if:
   * - it is present in DecorationTargetProps
   *
   * Its value will be dependent on the following conditions
   * - if property P is present in InjectedProps and its definition extends the definition
   *    in DecorationTargetProps, then its definition will be that of DecorationTargetProps[P]
   * - if property P is not present in InjectedProps then its definition will be that of
   *    DecorationTargetProps[P]
   * - if property P is present in InjectedProps but does not extend the
   *    DecorationTargetProps[P] definition, its definition will be that of InjectedProps[P]
   */
  declare export type Matching<InjectedProps, DecorationTargetProps> = $ObjMapi<
    DecorationTargetProps,
    <P>(P) => "There was Conditional Type, use $Call utility type"
  >;

  /**
   * a property P will be present if :
   * - it is present in both DecorationTargetProps and InjectedProps
   * - InjectedProps[P] can satisfy DecorationTargetProps[P]
   * ie: decorated component can accept more types than decorator is injecting
   *
   * For decoration, inject props or ownProps are all optionally
   * required by the decorated (right hand side) component.
   * But any property required by the decorated component must be satisfied by the injected property.
   */
  declare export type Shared<
    InjectedProps,
    DecorationTargetProps: Shared<InjectedProps, DecorationTargetProps>
  > = $ObjMapi<
    { [k: Extract<$Keys<InjectedProps>, $Keys<DecorationTargetProps>>]: any },
    <P>(P) => "There was Conditional Type, use $Call utility type"
  >;
  declare export type GetProps<C> =
    "There was Conditional Type, use $Call utility type";
  declare export type GetString = (
    id: string,
    args?: { [key: string]: any }
  ) => string;
  declare export interface InjectedProps {
    getString: GetString;
  }
  declare export type Omit<T, K> = Pick<T, Exclude<$Keys<T>, K>>;
  declare export function withLocalization<
    C: React.ComponentType<Matching<InjectedProps, GetProps<C>>>
  >(
    component: C
  ): React.ComponentType<
    Omit<GetProps<C>, $Keys<Shared<InjectedProps, GetProps<C>>>>
  >;
}
