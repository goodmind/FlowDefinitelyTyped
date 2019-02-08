declare module "in-app-purchase" {
  declare export var UNITY: any; // "unity";
  declare export var APPLE: any; // "apple";
  declare export var GOOGLE: any; // "google";
  declare export var WINDOWS: any; // "windows";
  declare export var AMAZON: any; // "amazon";
  declare export var ROKU: any; // "roku";
  declare export function config(params: Config): void;

  declare export function setup(): Promise<void>;

  declare export function setup(callback: (err: any) => void): void;

  declare export function getService(receipt: Receipt): Service;

  declare export function validate(
    receipt: Receipt
  ): Promise<ValidationResponse>;

  declare export function validate(
    receipt: Receipt,
    callback: (err: any, res: ValidationResponse) => void
  ): void;

  declare export function validate(
    service: Service,
    receipt: Receipt,
    callback: (err: any, res: ValidationResponse) => void
  ): void;

  declare export function validateOnce(
    receipt: Receipt,
    secretOrPubKey: any
  ): Promise<ValidationResponse>;

  declare export function validateOnce(
    receipt: Receipt,
    secretOrPubKey: any,
    callback: (err: any, res: ValidationResponse) => void
  ): void;

  declare export function validateOnce(
    service: Service,
    secretOrPubKey: any,
    receipt: Receipt,
    callback: (err: any, res: ValidationResponse) => void
  ): void;

  declare export function isValidated(response: ValidationResponse): boolean;

  declare export function isExpired(item: PurchasedItem): boolean;

  declare export function isCanceled(item: PurchasedItem): boolean;

  declare export function getPurchaseData(
    purchaseData?: ValidationResponse,
    options?: {
      ignoreCanceled: boolean,
      ignoreExpired: boolean
    }
  ): PurchasedItem[] | null;

  declare export function refreshGoogleToken(): Promise<void>;

  declare export function refreshGoogleToken(
    callback: (err: any) => void
  ): void;

  declare export function reset(): void;

  declare export interface Config {
    amazonAPIVersion?: number;
    secret?: string;
    applePassword?: string;
    googlePublicKeyPath?: string;
    googleAccToken?: string;
    googleRefToken?: string;
    clientId?: string;
    clientSecret?: string;
    refreshToken?: string;
    rokuApiKey?: string;
    test?: boolean;
    verbose?: boolean;
  }
  declare export type Service =
    | typeof UNITY
    | typeof APPLE
    | typeof GOOGLE
    | typeof WINDOWS
    | typeof AMAZON
    | typeof ROKU;
  declare export type UnityReceipt = { [key: string]: any } | string;
  declare export type AppleReceipt = string;
  declare export type GoogleReceipt =
    | {
        date: string,
        signature: string
      }
    | string;
  declare export type WindowsReceipt = string;
  declare export type AmazonReceipt = { [key: string]: any } | string;
  declare export type RokuReceipt = string;
  declare export type Receipt =
    | UnityReceipt
    | AppleReceipt
    | GoogleReceipt
    | WindowsReceipt
    | AmazonReceipt
    | RokuReceipt;
  declare export interface ValidationResponse {
    service: Service;
    status: number;
  }
  declare export interface PurchasedItem {
    bundleId?: string;
    appItemId?: string;
    orderId?: string;
    originalTransactionId?: string;
    transactionId: string;
    productId: string;
    originalPurchaseDate?: string;
    purchaseDate: number | string;
    isTrial?: boolean;
    cancellationDate?: number;
    expirationDate?: number;
    quantity: number;
  }
}
