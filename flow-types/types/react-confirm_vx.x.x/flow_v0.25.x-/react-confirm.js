declare module "react-confirm" {
  import typeof * as React from "react";

  declare export function confirmable<P>(
    component: React.ComponentType<ReactConfirmProps & P>
  ): React.ComponentType<P>;

  declare export function createConfirmation(
    component: React.ComponentType<any>,
    unmountDelay?: number
  ): (props: any) => Promise<string>;

  declare export interface ReactConfirmProps {
    confirmation: string | React.ReactElement<any>;
    dismiss: () => void;
    proceed: (value?: string) => void;
    cancel: (value?: string) => void;
    show: boolean;
  }
}
