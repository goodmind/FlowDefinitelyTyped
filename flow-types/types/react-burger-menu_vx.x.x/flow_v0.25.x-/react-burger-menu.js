declare module "react-burger-menu" {
  import typeof * as React from "react";

  declare export interface State {
    isOpen: boolean;
  }
  declare export interface Styles {
    bmBurgerBars: $Shape<CSSStyleDeclaration>;
    bmBurgerButton: $Shape<CSSStyleDeclaration>;
    bmCross: $Shape<CSSStyleDeclaration>;
    bmCrossButton: $Shape<CSSStyleDeclaration>;
    bmItemList: $Shape<CSSStyleDeclaration>;
    bmMenuWrap: $Shape<CSSStyleDeclaration>;
    bmMenu: $Shape<CSSStyleDeclaration>;
    bmMorphShape: $Shape<CSSStyleDeclaration>;
    bmOverlay: $Shape<CSSStyleDeclaration>;
  }
  declare export interface Props {
    bodyClassName?: string;
    burgerBarClassName?: string;
    burgerButtonClassName?: string;
    crossButtonClassName?: string;
    crossClassName?: string;
    customBurgerIcon?: React$Node | false;
    customCrossIcon?: React$Node | false;
    disableOverlayClick?: boolean;
    id?: string;
    isOpen?: boolean;
    itemListClassName?: string;
    menuClassName?: string;
    morphShapeClassName?: string;
    noOverlay?: boolean;
    onStateChange?: (state: State) => void;
    outerContainerId?: string;
    overlayClassName?: string;
    pageWrapId?: string;
    right?: boolean;
    styles?: Styles;
    width?: number | string;
  }
  declare export class ReactBurgerMenu mixins React.Component<Props> {}
  declare export class slide mixins ReactBurgerMenu {}
  declare export class stack mixins ReactBurgerMenu {}
  declare export class elastic mixins ReactBurgerMenu {}
  declare export class bubble mixins ReactBurgerMenu {}
  declare export class push mixins ReactBurgerMenu {}
  declare export class pushRotate mixins ReactBurgerMenu {}
  declare export class scaleDown mixins ReactBurgerMenu {}
  declare export class scaleRotate mixins ReactBurgerMenu {}
  declare export class fallDown mixins ReactBurgerMenu {}
  declare export class reveal mixins ReactBurgerMenu {}
}
