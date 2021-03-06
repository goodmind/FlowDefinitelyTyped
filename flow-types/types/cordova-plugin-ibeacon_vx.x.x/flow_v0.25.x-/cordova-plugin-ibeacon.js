declare module "global" {
  declare interface CordovaPlugins {
    locationManager: BeaconPlugin$BeaconPlugin$LocationManager;
  }

  /**
   * Beacon Plugin.
   */
  declare export interface BeaconPlugin$LocationManager {
    delegate: BeaconPlugin$Delegate;
    BeaconPlugin$BeaconRegion: BeaconPlugin$BeaconRegion;
    BeaconPlugin$Region: BeaconPlugin$Region;
    onDomDelegateReady(): Q.Promise<void>;
    startMonitoringForRegion(region: BeaconPlugin$Region): Q.Promise<void>;
    stopMonitoringForRegion(region: BeaconPlugin$Region): Q.Promise<void>;
    requestStateForRegion(region: BeaconPlugin$Region): Q.Promise<void>;
    startRangingBeaconsInRegion(region: BeaconPlugin$Region): Q.Promise<void>;
    stopRangingBeaconsInRegion(region: BeaconPlugin$Region): Q.Promise<void>;
    getAuthorizationStatus(): Q.Promise<BeaconPlugin$PluginResult>;
    requestWhenInUseAuthorization(): Q.Promise<void>;
    requestAlwaysAuthorization(): Q.Promise<void>;
    getMonitoredRegions(): Q.Promise<BeaconPlugin$Region[]>;
    getRangedRegions(): Q.Promise<BeaconPlugin$Region[]>;
    isRangingAvailable(): Q.Promise<boolean>;
    isMonitoringAvailableForClass(
      region: BeaconPlugin$Region
    ): Q.Promise<boolean>;
    startAdvertising(
      region: BeaconPlugin$Region,
      measuredPower: boolean
    ): Q.Promise<void>;
    stopAdvertising(): Q.Promise<void>;
    isAdvertisingAvailable(): Q.Promise<boolean>;
    isAdvertising(): Q.Promise<boolean>;
    disableDebugLogs(): Q.Promise<void>;
    enableDebugNotifications(): Q.Promise<void>;
    disableDebugNotifications(): Q.Promise<void>;
    enableDebugLogs(): Q.Promise<void>;
    isBluetoothEnabled(): Q.Promise<boolean>;
    enableBluetooth(): Q.Promise<void>;
    disableBluetooth(): Q.Promise<void>;
    appendToDeviceLog(message: string): Q.Promise<string>;
  }

  declare export interface BeaconPlugin$PluginResult {
    eventType: string;
    region: BeaconPlugin$Region;
    beacons: BeaconPlugin$Beacon[];
    authorizationStatus: string;
    state: string;
    error: string;
  }

  declare export interface BeaconPlugin$Delegate {
    didDetermineStateForRegion(pluginResult: BeaconPlugin$PluginResult): void;
    didStartMonitoringForRegion(pluginResult: BeaconPlugin$PluginResult): void;
    didExitRegion(pluginResult: BeaconPlugin$PluginResult): void;
    didEnterRegion(pluginResult: BeaconPlugin$PluginResult): void;
    didRangeBeaconsInRegion(pluginResult: BeaconPlugin$PluginResult): void;
    peripheralManagerDidStartAdvertising(
      pluginResult: BeaconPlugin$PluginResult
    ): void;
    peripheralManagerDidUpdateState(
      pluginResult: BeaconPlugin$PluginResult
    ): void;
    didChangeAuthorizationStatus(authorizationStatus: string): void;
    monitoringDidFailForRegionWithError(
      pluginResult: BeaconPlugin$PluginResult
    ): void;
  }

  declare export interface BeaconPlugin$Region {
    identifier: string;
    new(identifier: string): BeaconPlugin$Region;
  }

  declare export type BeaconPlugin$BeaconRegion = {
    uuid: string,
    major: string,
    minor: string,
    notifyEntryStateOnDisplay: boolean,
    new(
      identifier: string,
      uuid: string,
      major?: number,
      minor?: number,
      notifyEntryStateOnDisplay?: boolean
    ): BeaconPlugin$BeaconRegion
  } & BeaconPlugin$Region;

  declare export type BeaconPlugin$CircularRegion = {
    latitude: number,
    longitude: number,
    radius: number,
    new(
      identifier: string,
      latitude: number,
      longitude: number,
      radius: number
    ): BeaconPlugin$CircularRegion
  } & BeaconPlugin$Region;

  declare export interface BeaconPlugin$Beacon {
    uuid: string;
    major: string;
    minor: string;
    proximity: string;
    tx: number;
    rssi: number;
    accuracy: number;
  }
}
declare module "cordova-plugin-ibeacon" {
  import typeof * as Q from "q";
}
