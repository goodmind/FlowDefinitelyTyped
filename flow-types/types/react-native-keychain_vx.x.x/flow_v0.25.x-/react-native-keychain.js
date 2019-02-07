declare module "react-native-keychain" {
  declare export interface UserCredentials {
    username: string;
    password: string;
  }
  declare export interface SharedWebCredentials {
    server: string;
    username: string;
    password: string;
  }
  declare export interface Options {
    accessControl?: SecAccessControl;
    accessGroup?: string;
    accessible?: SecAccessible;
    authenticationPrompt?: string;
    authenticationType?: LAPolicy;
    service?: string;
  }
  declare export type SecAccessible =
    | "AccessibleWhenUnlocked"
    | "AccessibleAfterFirstUnlock"
    | "AccessibleAlways"
    | "AccessibleWhenPasscodeSetThisDeviceOnly"
    | "AccessibleWhenUnlockedThisDeviceOnly"
    | "AccessibleAfterFirstUnlockThisDeviceOnly"
    | "AccessibleAlwaysThisDeviceOnly";
  declare export type SecAccessControl =
    | "UserPresence"
    | "BiometryAny"
    | "BiometryCurrentSet"
    | "DevicePasscode"
    | "ApplicationPassword"
    | "BiometryAnyOrDevicePasscode"
    | "BiometryCurrentSetOrDevicePasscode";
  declare export type LAPolicy =
    | "Authentication"
    | "AuthenticationWithBiometrics";
  declare export function canImplyAuthentication(
    options?: Options
  ): Promise<boolean>;

  declare export function getSupportedBiometryType(): Promise<string | null>;

  declare export function setInternetCredentials(
    server: string,
    username: string,
    password: string,
    options?: Options
  ): Promise<boolean>;

  declare export function getInternetCredentials(
    server: string
  ): Promise<UserCredentials>;

  declare export function resetInternetCredentials(
    server: string
  ): Promise<boolean>;

  declare export function setGenericPassword(
    username: string,
    password: string,
    serviceOrOptions?: string | Options
  ): Promise<boolean>;

  declare export function getGenericPassword(
    serviceOrOptions?: string | Options
  ): Promise<
    | boolean
    | {
        service: string,
        username: string,
        password: string
      }
  >;

  declare export function resetGenericPassword(
    serviceOrOptions?: string | Options
  ): Promise<boolean>;

  declare export function requestSharedWebCredentials(): Promise<SharedWebCredentials>;

  declare export function setSharedWebCredentials(
    server: string,
    username: string,
    password: string
  ): Promise<boolean>;
}
