declare module "persona" {
  declare export interface Persona$WatchOptions {
    loggedInUser: string;
    onlogin: (s: string) => void;
    onlogout: () => void;
    onready?: () => void;
  }

  declare export interface Persona$RequestOptions {
    backgroundColor?: string;
    siteName?: string;
    siteLogo?: string;
    termsOfService?: string;
    privacyPolicy?: string;
    returnTo?: string;
    oncancel?: () => void;
  }

  declare export interface Persona$GetOptions {
    backgroundColor?: string;
    siteName?: string;
    siteLogo?: string;
    termsOfService?: string;
    privacyPolicy?: string;
  }

  declare export interface Persona$Persona {
    watch(options: Persona$WatchOptions): void;
    request(options: Persona$RequestOptions): void;
    request(): void;
    logout(): void;
    get(gotAssertion: (s: string) => void): void;
    get(gotAssertion: (s: string) => void, options: Persona$GetOptions): void;
  }
  declare interface Navigator {
    id: Persona$Persona.Persona$Persona;
  }
}
