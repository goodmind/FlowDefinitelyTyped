declare module "mkcert" {
  declare export interface Certificate {
    cert: string;
    key: string;
  }
  declare export interface CACertificateInfo {
    organization: string;
    countryCode: string;
    state: string;
    locality: string;
    validityDays: number;
  }
  declare export interface CertificateInfo {
    domains: string[];
    validityDays: number;
    caKey: string;
    caCert: string;
  }
  declare export function createCA(
    caCerticateInfo: CACertificateInfo
  ): Promise<Certificate>;

  declare export function createCert(
    certicateInfo: CertificateInfo
  ): Promise<Certificate>;
}
