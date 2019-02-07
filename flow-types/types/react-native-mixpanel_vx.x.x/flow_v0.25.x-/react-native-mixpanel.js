declare module "react-native-mixpanel" {
  declare export function sharedInstanceWithToken(token: string): void;

  declare export function track(event: string): void;

  declare export function trackWithProperties(
    event: string,
    property: { [key: string]: any }
  ): void;

  declare export function createAlias(id: string): void;

  declare export function identify(id: string): void;

  declare export function set(property: { [key: string]: any }): void;

  declare export function setOnce(property: { [key: string]: any }): void;

  declare export function timeEvent(event: string): void;

  declare export function registerSuperProperties(property: {
    [key: string]: any
  }): void;

  declare export function registerSuperPropertiesOnce(property: {
    [key: string]: any
  }): void;

  declare export function trackCharge(id: number): void;

  declare export function trackChargeWithProperties(
    id: number,
    property: { [key: string]: any }
  ): void;

  declare export function increment(property: string, value: number): void;

  declare export function setPushRegistrationId(token: string): void;

  declare export function initPushHandling(token: string): void;

  declare export function clearPushRegistrationId(): void;

  declare export function addPushDeviceToken(token: string): void;

  declare export function reset(): void;

  declare export function getDistinctId(handler: (id: string) => void): void;
}
