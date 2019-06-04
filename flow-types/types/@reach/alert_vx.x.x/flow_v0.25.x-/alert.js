declare module "@reach/alert" {
  import typeof * as React from "react";

  declare export type AlertProps = {
    type?: "assertive" | "polite"
  } & React.HTMLProps<HTMLDivElement>;
  declare export var Alert: React.FC<AlertProps>;
}
