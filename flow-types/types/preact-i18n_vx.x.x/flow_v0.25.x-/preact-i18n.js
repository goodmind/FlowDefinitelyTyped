declare module "preact-i18n" {
  import type {
    h,
    Component,
    VNode,
    ComponentChild,
    ComponentChildren
  } from "preact";

  declare export class TextComponent
    mixins Component<{
        id: string,
        fields?: {},
        plural?: number
      }> {
    render(): TextComponent;
  }
  declare export class IntlProvider
    mixins Component<{
        scope?: any,
        mark?: boolean,
        definition?: {}
      }> {
    render(): IntlProvider;
  }
  declare export class Text mixins TextComponent {}
  declare export class MarkupText mixins TextComponent {}
  declare export class Localizer
    mixins Component<{
        children: ComponentChildren
      }> {
    render(): Localizer;
  }
  declare export function withText<Props, Context>(mapping: {}): (
    Child: ComponentChild
  ) => (props?: Props, context?: Context) => any;

  declare export default function intl(
    Child: Component,
    options?: {
      scope?: any,
      definition?: {}
    }
  ): VNode;
}
