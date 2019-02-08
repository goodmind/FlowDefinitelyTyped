declare module "CordovaPluginDeviceName" {
  declare interface CordovaPluginDeviceName {
    /**
     * User-friendly name of the device.
     * @example cordova.plugins.deviceName.name // e.g: Larry's Android
     */
    name: string;
  }
}
declare module "cordova-plugin-device-name" {
  declare interface CordovaPlugins {
    /**
     * cordova-plugin-device-name interface
     */
    deviceName: CordovaPluginDeviceName.CordovaPluginDeviceName;
  }
}
