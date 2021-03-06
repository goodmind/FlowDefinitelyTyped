declare module "meshblu" {
  declare var Meshblu: MeshbluStatic;
  declare module.exports: typeof Meshblu;
}
declare interface MeshbluStatic {
  /**
   * Establish a secure socket.io connection to Meshblu.
   * @param opt
   * @returns A Meshblu Connection.
   */
  createConnection(
    opt: Meshblu$Meshblu$ConnectionOptions
  ): Meshblu$Meshblu$Connection;
}
declare interface Meshblu$Connection {
  /**
   * Authenticate with Meshblu.
   * @returns This Connection.
   */
  identify(): Meshblu$Connection;

  /**
 * @param {string
| number
| {[key: string]: any}
| array
| Buffer} data - data for signing.
 */
  sign(data: any): string;

  /**
 * @param {string
| number
| {[key: string]: any}
| array
| Buffer} message - signed data.
 * @param signature
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
  verify(message: any, signature: any): any;

  /**
 * @param uuid
 * @param {string
| number
| {[key: string]: any}
| array
| Buffer} message - data for encrypting.
 * @param options
 * @param fn The callback to be called. It should take one parameter, result,
which is an object containing a property "error".
 * @returns This Connection.
 */
  encryptMessage(
    uuid: string,
    message: any,
    options: Meshblu$Meshblu$ConnectionOptions,
    fn: (result: any) => void
  ): Meshblu$Connection;

  /**
 * Send a meshblu message.
 * @param payload An array of devices UUIDs.
 * @param fn The callback to be called. It should take one parameter, result,
which is an object containing a property "error".
 * @returns This Connection.
 */
  message(
    payload: Meshblu$MessagePayload,
    fn: (result: any) => void
  ): Meshblu$Connection;

  /**
   * Update a device record.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  update(
    data: Meshblu$UpdateData,
    fn: (result: Meshblu$UpdateSuccess) => void
  ): Meshblu$Connection;

  /**
   * Register a new device record.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  register(
    data: Meshblu$RegisterData,
    fn: (result: Meshblu$RegisterResponse) => void
  ): Meshblu$Connection;

  /**
   * Removes a device record.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  unregister(
    data: Meshblu$Device,
    fn: (result: Meshblu$Device) => void
  ): Meshblu$Connection;

  /**
   * Get my device info.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  whoami(
    data: any,
    fn: (result: Meshblu$DeviceResponse) => void
  ): Meshblu$Connection;

  /**
   * Find a Meshblu device.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  device(
    data: Meshblu$Device,
    fn: (result: Meshblu$DeviceResponse) => void
  ): Meshblu$Connection;

  /**
   * Find Meshblu devices.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  devices(
    data: Meshblu$Color,
    fn: (result: Meshblu$DeviceResponse[]) => void
  ): Meshblu$Connection;

  /**
   * Returns device messages as they are sent and received.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  subscribe(
    data: Meshblu$SubscribeData,
    fn: (result: any) => void
  ): Meshblu$Connection;

  /**
   * Cancels device subscription.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  unsubscribe(
    data: Meshblu$UnsubscribeData,
    fn: (result: any) => void
  ): Meshblu$Connection;

  /**
   * Send a meshblu data message.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  data(data: Meshblu$DataInput, fn: (result: any) => void): Meshblu$Connection;

  /**
   * Get a meshblu data for a device.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   * @returns This Connection.
   */
  getdata(
    data: Meshblu$GetDataInput,
    fn: (result: any) => void
  ): Meshblu$Connection;

  /**
   * Generate a new session token for a device.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   */
  generateAndStoreToken(
    data: Meshblu$Device,
    fn: (result: Meshblu$ConnectionOptions) => void
  ): void;

  /**
   * Remove a session token from a device.
   * @param data
   * @param fn The callback to be called. It should take one parameter, result.
   */
  revokeToken(
    data: Meshblu$ConnectionOptions,
    fn: (result: Meshblu$Device) => void
  ): void;

  /**
 * @param uuid
 * @param fn The callback to be called. It should take one parameter, err,
which will be null if there was no problem, and one parameter, publicKey,
of type NodeRSA.
 */
  getPublicKey(uuid: string, fn: (err: Error, publicKey: any) => void): void;
  send(text: string): Meshblu$Connection;
  bufferedSocketEmit(): void;
  parseUrl(serverUrl: string, port: string): string;
  generateKeyPair(): Meshblu$KeyPair;
  setPrivateKey(privateKey: string): void;
  setup(): Meshblu$Connection;
  connect(): void;
  reconnect(): void;
  claimdevice(
    data: Meshblu$Device,
    fn: (result: Meshblu$Device) => void
  ): Meshblu$Connection;
  mydevices(data: any, fn: (result: any) => void): Meshblu$Connection;
  status(data: any): Meshblu$Connection;
  authenticate(data: any, fn: (result: any) => void): Meshblu$Connection;
  events(data: any, fn: (result: any) => void): Meshblu$Connection;
  localdevices(fn: (result: any) => void): Meshblu$Connection;
  unclaimeddevices(data: any, fn: (result: any) => void): Meshblu$Connection;
  textBroadcast(data: any): Meshblu$Connection;
  directText(data: any): Meshblu$Connection;
  subscribeText(data: any, fn: (result: any) => void): Meshblu$Connection;
  unsubscribeText(data: any, fn: (result: any) => void): Meshblu$Connection;
  close(fn: (result: any) => void): Meshblu$Connection;
  resetToken(data: any, fn: (result: any) => void): void;
}

/**
 * Contains the primary means of identifying a device.
 */
declare interface Meshblu$ConnectionOptions {
  uuid: string;
  token: string;
}

declare interface Meshblu$KeyPair {
  privateKey: string;
  publicKey: string;
}

declare interface Meshblu$MessagePayload {
  devices: string[];
  topic: string;
  payload: any;
  qos?: number;
}

declare interface Meshblu$UpdateData {
  uuid: string;
  color: string;
}

declare interface Meshblu$UpdateSuccess {
  uuid: string;
  token: string;
  status: string;
}

declare interface Meshblu$RegisterData {
  type: string;
}

declare interface Meshblu$RegisterResponse {
  uuid: string;
  token: string;
  type: string;
}

declare interface Meshblu$Device {
  uuid: string;
}

declare interface Meshblu$DeviceResponse {
  uuid: string;
  online: boolean;
  color: string;
}

declare interface Meshblu$Color {
  color: string;
}

declare interface Meshblu$SubscribeData {
  uuid: string;
  types?: string[];
  topics?: string[];
}

declare interface Meshblu$UnsubscribeData {
  uuid: string;
  types?: string[];
}

declare interface Meshblu$DataInput {
  uuid: string;
  online: boolean;
  x: number;
  y: number;
}

declare interface Meshblu$GetDataInput {
  uuid: string;
  start: string;
  finish: string;
  limit: number;
}

declare interface Meshblu$IdentifySuccess {
  uuid: string;
  token: string;
  status: string;
}
