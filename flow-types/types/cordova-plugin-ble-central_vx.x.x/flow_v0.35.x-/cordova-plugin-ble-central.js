declare module 'cordova-plugin-ble-central' {
        declare interface BLECentralPlugin$PeripheralCharacteristic {
service: string,
characteristic: string,
properties: string[],
descriptors?: any[]
} 

declare interface BLECentralPlugin$PeripheralData {
name: string,
id: string,
rssi: number,
advertising: ArrayBuffer | any
} 

declare type BLECentralPlugin$PeripheralDataExtended = {
services: string[],
characteristics: BLECentralPlugin$PeripheralCharacteristic[]
} & BLECentralPlugin$PeripheralData


declare interface BLECentralPlugin$BLEError {
name: string,
id: string,
errorMessage: string
} 

declare interface BLECentralPlugin$StartScanOptions {
reportDuplicates?: boolean
} 

declare export interface BLECentralPlugin$BLECentralPluginStatic {
scan(
services: string[],
seconds: number,
success: (data: BLECentralPlugin$PeripheralData) => any,
failure?: (error: string) => any): void,
startScan(
services: string[],
success: (data: BLECentralPlugin$PeripheralData) => any,
failure?: (error: string | BLECentralPlugin$BLEError) => any): void,
startScanWithOptions(
services: string[],
options: BLECentralPlugin$StartScanOptions,
success: (data: BLECentralPlugin$PeripheralData) => any,
failure?: (error: string) => any): void,
stopScan(): void,
stopScan(success: () => any, failure?: () => any): void,
connect(
device_id: string,
success: (data: BLECentralPlugin$PeripheralDataExtended) => any,
failure: (error: string | BLECentralPlugin$BLEError) => any): void,
autoConnect(
device_id: string,
success: (data: BLECentralPlugin$PeripheralDataExtended) => any,
failure: (error: string | BLECentralPlugin$BLEError) => any): void,
disconnect(
device_id: string,
success?: () => any,
failure?: (error: string | BLECentralPlugin$BLEError) => any): void,
read(
device_id: string,
service_uuid: string,
characteristic_uuid: string,
success?: (rawData: ArrayBuffer) => any,
failure?: (error: string | BLECentralPlugin$BLEError) => any): void,
write(
device_id: string,
service_uuid: string,
characteristic_uuid: string,
data: ArrayBuffer,
success?: () => any,
failure?: (error: string | BLECentralPlugin$BLEError) => any): void,
writeWithoutResponse(
device_id: string,
service_uuid: string,
characteristic_uuid: string,
data: ArrayBuffer,
success?: () => any,
failure?: (error: string) => any): void,
startNotification(
device_id: string,
service_uuid: string,
characteristic_uuid: string,
success: (rawData: ArrayBuffer) => any,
failure?: (error: string | BLECentralPlugin$BLEError) => any): void,
stopNotification(
device_id: string,
service_uuid: string,
characteristic_uuid: string,
success?: () => any,
failure?: (error: string | BLECentralPlugin$BLEError) => any): void,
isEnabled(success: () => any, failure: (error: string) => any): void,
isConnected(device_id: string, success: () => any, failure?: (error: string) => any): void,
requestMtu(device_id: string, mtu: number, success?: () => any, failure?: () => any): void,
refreshDeviceCache(
device_id: string,
timeout_millis: number,
success?: (data: BLECentralPlugin$PeripheralDataExtended) => any,
failure?: (error: string | BLECentralPlugin$BLEError) => any): void,
startStateNotifications(success: (state: string) => any, failure?: (error: string) => any): void,
stopStateNotifications(success?: () => any, failure?: () => any): void,
showBluetoothSettings(success: () => any, failure: () => any): void,
enable(success: () => any, failure: (error: string) => any): void,
readRSSI(
device_id: string,
success: (rssi: number) => any,
failure?: (error: string) => any): void,
connectedPeripheralsWithServices(
services: string[],
success: (data: BLECentralPlugin$PeripheralData[]) => any,
failure: () => any): void,
peripheralsWithIdentifiers(
services: string[],
success: (data: BLECentralPlugin$PeripheralData[]) => any,
failure: () => any): void,
bondedDevices(
success: (data: BLECentralPlugin$PeripheralData[]) => any,
failure: () => any): void
} 
	declare var ble: BLECentralPlugin$BLECentralPlugin$BLECentralPluginStatic;
    }
