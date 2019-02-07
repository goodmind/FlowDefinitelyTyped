declare module "react-overlays" {
  import typeof * as React from "react";

  declare export {
    Affix,
    AutoAffix,
    Modal,
    ModalManager,
    Overlay,
    Portal,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    RootCloseWrapper,
    WaitForContainer
  } from "./lib";

  declare export interface TransitionCallbacks {
    /**
     * Callback fired before the Overlay transitions in
     */
    onEnter?: (node: HTMLElement) => any;

    /**
     * Callback fired as the Overlay begins to transition in
     */
    onEntering?: (node: HTMLElement) => any;

    /**
     * Callback fired after the Overlay finishes transitioning in
     */
    onEntered?: (node: HTMLElement) => any;

    /**
     * Callback fired right before the Overlay transitions out
     */
    onExit?: (node: HTMLElement) => any;

    /**
     * Callback fired as the Overlay begins to transition out
     */
    onExiting?: (node: HTMLElement) => any;

    /**
     * Callback fired after the Overlay finishes transitioning out
     */
    onExited?: (node: HTMLElement) => any;
  }
}
