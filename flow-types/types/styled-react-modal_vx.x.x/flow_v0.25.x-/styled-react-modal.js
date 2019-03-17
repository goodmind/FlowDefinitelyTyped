declare module "styled-react-modal" {
  import typeof * as React from "react";

  import type {
    StyledComponent,
    AnyStyledComponent,
    CSSObject,
    InterpolationFunction
  } from "styled-components";

  declare var BaseModalBackground: StyledComponent<"div", any>;
  declare interface ModalProps {
    children?: React.Node;
    isOpen: boolean;
    allowScroll?: boolean;
    afterOpen?: () => void;
    afterClose?: () => void;
    beforeOpen?: Promise<void> | (() => void);
    beforeClose?: Promise<void> | (() => void);
    onEscapeKeydown?: (event: Event) => void;
    onBackgroundClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  }
  declare class Modal mixins React.Component<ModalProps> {
    static styled(
      object: CSSObject | InterpolationFunction<any>
    ): StyledComponent<React.ComponentClass<ModalProps>, any>;
    static styled(
      strings: TemplateStringsArray,
      ...interpolations: any[]
    ): StyledComponent<React.ComponentClass<ModalProps>, any>;
  }
  declare interface ModalProviderProps {
    backgroundComponent?: AnyStyledComponent;
    children: React.Node;
  }
  declare class ModalProvider mixins React.Component<ModalProviderProps> {}
  declare export default typeof Modal;

  declare export { BaseModalBackground, ModalProvider };
}
