declare module "default-gateway" {
  declare export var v4: DefaultGatewayFn;
  declare export var v6: DefaultGatewayFn;
  declare export interface DefaultGatewayFn {
    (): Promise<Gateway>;
    sync(): Gateway;
  }
  declare export interface Gateway {
    gateway: string;
    interface: string | null;
  }
}
