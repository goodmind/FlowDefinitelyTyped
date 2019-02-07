declare module "browser-fingerprint" {
  declare interface browserFingerprint {
    (): string;
    default: browserFingerprint;
  }
  declare var browserFingerprint: browserFingerprint;
  declare module.exports: typeof browserFingerprint;
}
