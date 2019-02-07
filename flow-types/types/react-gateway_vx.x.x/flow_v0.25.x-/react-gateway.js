declare module "react-gateway" {
  import type { GatewayProps } from "./Gateway";

  import type { GatewayDestProps } from "./GatewayDest";

  declare export {
    Gateway,
    GatewayProps,
    GatewayDest,
    GatewayDestProps,
    GatewayProvider,
    GatewayRegistry
  };
}
