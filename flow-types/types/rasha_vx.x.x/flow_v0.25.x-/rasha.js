declare module "rasha" {
  declare export interface Jwk {
    kty: string;
    n: string;
    e: string;
    d: string;
    p: string;
    q: string;
    dp: string;
    dq: string;
    qi: string;
  }
  declare export interface GenerateOptions {
    format: string;
    encoding?: string;
    modulusLength?: number;
    publicExponent?: number;
  }
  declare export interface ImportOptions {
    pem: string;
    public: boolean;
  }
  declare export interface ExportOptions {
    jwk: Jwk;
    format: string;
    public: boolean;
  }
  declare export interface RsaKeys {
    private: string;
    public: string;
  }
  declare export function generate(opts: GenerateOptions): Promise<RsaKeys>;

  declare function Import(opts: ImportOptions): Promise<Jwk>;

  declare export { Import as import };

  declare function Export(opts: ExportOptions): Promise<string>;

  declare export { Export as export };

  declare export function thumbprint(jwk: Jwk): Promise<any>;
}
