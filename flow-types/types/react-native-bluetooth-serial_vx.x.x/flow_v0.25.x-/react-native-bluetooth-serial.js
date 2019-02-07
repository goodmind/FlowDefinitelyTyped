declare module "react-native-bluetooth-serial" {
  import typeof * as React from "react";

  import typeof * as ReactNative from "react-native";

  declare export type Buffer = (data: number[]) => void;

  declare var npm$namespace$BluetoothSerial: {
    on: typeof BluetoothSerial$on,
    removeListener: typeof BluetoothSerial$removeListener,
    write: typeof BluetoothSerial$write,
    list: typeof BluetoothSerial$list,
    isEnabled: typeof BluetoothSerial$isEnabled,
    connect: typeof BluetoothSerial$connect,
    disconnect: typeof BluetoothSerial$disconnect,
    isConnected: typeof BluetoothSerial$isConnected
  };
  declare function BluetoothSerial$on(
    eventName: string,
    handler: () => void
  ): void;

  declare function BluetoothSerial$removeListener(
    eventName: string,
    handler: () => void
  ): void;

  declare function BluetoothSerial$write(
    data: Buffer | string
  ): Promise<boolean>;

  declare function BluetoothSerial$list(): Promise<
    Array<{
      id: string,
      name: string
    }>
  >;

  declare function BluetoothSerial$isEnabled(): Promise<boolean>;

  declare function BluetoothSerial$connect(id: string): Promise<void>;

  declare function BluetoothSerial$disconnect(): Promise<void>;

  declare function BluetoothSerial$isConnected(): Promise<boolean>;
}
