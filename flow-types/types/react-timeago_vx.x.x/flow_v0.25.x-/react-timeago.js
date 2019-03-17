declare module "react-timeago" {
  import typeof * as React from "react";

  declare type ReactTimeago$Unit =
    | "second"
    | "minute"
    | "hour"
    | "day"
    | "week"
    | "month"
    | "year";

  declare type ReactTimeago$Suffix = "ago" | "from now";

  declare type ReactTimeago$Formatter = (
    value: number,
    unit: ReactTimeago$Unit,
    suffix: ReactTimeago$Suffix,
    epochMiliseconds: number,
    nextFormatter?: ReactTimeago$Formatter
  ) => React.Node;

  declare interface ReactTimeago$ReactTimeagoProps {
    +live?: boolean;
    +minPeriod?: number;
    +maxPeriod?: number;
    +component?: string | React.ComponentType<any>;
    +title?: string;
    +formatter?: ReactTimeago$Formatter;
    +date: string | number | Date;
    +now?: () => number;
  }
  declare var ReactTimeago: React.ComponentClass<ReactTimeago$ReactTimeagoProps>;
  declare export default typeof ReactTimeago;
}
