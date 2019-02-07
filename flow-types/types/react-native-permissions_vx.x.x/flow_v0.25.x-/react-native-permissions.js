declare module "react-native-permissions" {
  declare export type Status =
    | "authorized"
    | "denied"
    | "restricted"
    | "undetermined";
  declare export interface Rationale {
    title: string;
    message: string;
  }
  declare export type CheckOptions =
    | string
    | {
        type: string
      };
  declare export type RequestOptions =
    | string
    | {
        type: string,
        rationale?: Rationale
      };
  declare export interface ReactNativePermissions {
    canOpenSettings: () => Promise<boolean>;
    openSettings: () => Promise<any>;
    getTypes: () => string[];
    check: (permission: string, options?: CheckOptions) => Promise<Status>;
    request: (permission: string, options?: RequestOptions) => Promise<Status>;
    checkMultiple: (
      permissions: string[]
    ) => Promise<{
      [key: string]: string
    }>;
  }
  declare var Permissions: ReactNativePermissions;
  declare export default typeof Permissions;
}
