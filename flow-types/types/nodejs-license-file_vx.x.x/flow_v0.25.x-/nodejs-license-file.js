declare module "nodejs-license-file" {
  declare export function parse(options: ParseOptions): License;

  declare export function generate(options: GenerateOptions): string;

  declare export interface License {
    valid: boolean;
    serial: string;
    data: any;
  }
  declare export interface ParseOptions {
    publicKeyPath?: string;
    publicKey?: string;
    licenseFilePath?: string;
    licenseFile?: string;
    template: string;
  }
  declare export interface GenerateOptions {
    privateKeyPath?: string;
    privateKey?: string;
    template: string;
    data: any;
  }
}
