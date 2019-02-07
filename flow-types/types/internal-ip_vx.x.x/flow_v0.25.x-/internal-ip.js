declare module "internal-ip" {
  declare export var v6: IPGetterFn;
  declare export var v4: IPGetterFn;
  declare export interface IPGetterFn {
    (): Promise<string | null>;
    sync(): string | null;
  }
}
