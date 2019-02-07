declare module "react-toastr" {
  import type { Component, ReactHTML } from "react";

  declare export class ToastContainer
    mixins Component<{
        toastMessageFactory: any,
        className?: string
      }> {
    error: (
      message: React.ReactNode,
      title: React.ReactNode,
      optionsOverride?: {}
    ) => void;
    info: (
      message: React.ReactNode,
      title: React.ReactNode,
      optionsOverride?: {}
    ) => void;
    success: (
      message: React.ReactNode,
      title: React.ReactNode,
      optionsOverride?: {}
    ) => void;
    warning: (
      message: React.ReactNode,
      title: React.ReactNode,
      optionsOverride?: {}
    ) => void;
    clear: () => void;
  }
  declare export var ToastMessageAnimated: $Keys<ReactHTML>;
  declare export var ToastMessagejQuery: $Keys<ReactHTML>;
}
