declare module "accept-language-parser" {
  declare export function parse(acceptLanguage: string): Language[];

  declare export function pick<T: string>(
    supportedLanguages: T[],
    acceptLanguage: string | Language[],
    options?: PickOptions
  ): T | null;

  declare export interface Language {
    code: string;
    script?: string | null;
    region?: string;
    quality: number;
  }
  declare export interface PickOptions {
    loose?: boolean;
  }
}
