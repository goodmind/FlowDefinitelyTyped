declare module "@feathersjs/feathers" {
  declare interface Application<ServiceTypes> {
    authenticate(options?: FeathersAuthCredentials): Promise<any>;
    logout(): Promise<void>;
    passport: Passport;
  }
}
declare module "@feathersjs/authentication-client" {
  import typeof * as self from "@feathersjs/authentication-client";

  declare var feathersAuthClient: ((
    config?: FeathersAuthClientConfig
  ) => () => void) &
    typeof self;
  declare export default typeof feathersAuthClient;

  declare export interface FeathersAuthClientConfig {
    storage?: Storage;
    header?: string;
    cookie?: string;
    storageKey?: string;
    jwtStrategy?: string;
    path?: string;
    entity?: string;
    service?: string;
  }
  declare export interface FeathersAuthCredentials {
    strategy: string;
    [index: string]: any;
  }
  declare export var defaults: {
    header: string,
    cookie: string,
    storageKey: string,
    jwtStrategy: string,
    path: string,
    entity: string,
    service: string,
    timeout: number
  };
  declare export interface Passport {
    setupSocketListeners(): void;
    connected(): Promise<any>;
    authenticate(credentials?: FeathersAuthCredentials): any;
    authenticateSocket(
      credentials: FeathersAuthCredentials,
      socket: any,
      emit: any
    ): any;
    logoutSocket(socket: any, emit: any): Promise<any>;
    logout(): Promise<any>;
    setJWT(data: any): Promise<any>;
    getJWT(): Promise<any>;
    verifyJWT(token: string): Promise<any>;
    payloadIsValid(payload: string): boolean;
    getCookie(name: string): string;
    clearCookie(name: string): null;
    getStorage(storage: any): any;
  }
}
