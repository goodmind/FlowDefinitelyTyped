declare module "w3c-permissions" {
  declare class Permissions {
    query(permissionDesc: PermissionDescriptor): Promise<PermissionStatus>;
  }
  declare type PermissionState = "granted" | "denied" | "prompt";
  declare type PermissionName =
    | "geolocation"
    | "notifications"
    | "push"
    | "midi"
    | "camera"
    | "microphone"
    | "speaker"
    | "device-info"
    | "background-sync"
    | "bluetooth"
    | "persistent-storage"
    | "ambient-light-sensor"
    | "accelerometer"
    | "gyroscope"
    | "magnetometer"
    | "clipboard";
  declare class PermissionStatus mixins EventTarget {
    state: PermissionState;
    onchange(): (ev: Event) => any;
  }
  declare interface PermissionDescriptor {
    name: string;
  }
  declare type GeolocationPermissionDescriptor = PermissionDescriptor;
  declare type NotificationsPermissionDescriptor = PermissionDescriptor;
  declare type PushPermissionDescriptor = {
    userVisibleOnly?: boolean
  } & PermissionDescriptor;

  declare type MidiPermissionDescriptor = {
    sysex: boolean
  } & PermissionDescriptor;

  declare type DevicePermissionDescriptor = {
    deviceId: string
  } & PermissionDescriptor;

  declare type BackgroundSyncPermissionDescriptor = PermissionDescriptor;
  declare type AmbientLightSensorPermissionDescriptor = PermissionDescriptor;
  declare type AccelerometerPermissionDescriptor = PermissionDescriptor;
  declare type GyroscopePermissionDescriptor = PermissionDescriptor;
  declare type MagnetometerPermissionDescriptor = PermissionDescriptor;
  declare type ClipboardPermissionDescriptor = PermissionDescriptor;
  declare interface Navigator {
    +permissions: Permissions;
  }
  declare interface WorkerNavigator {
    +permissions: Permissions;
  }
}
