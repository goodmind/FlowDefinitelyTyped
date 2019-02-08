declare var Mailcheck: MailcheckModule$MailcheckModule$Static;
export interface MailcheckModule$IDistanceFunction {
  (s1: string, s2: string): number;
}

export interface MailcheckModule$ISuggestFunction {
  (
    email: string,
    domains?: string[],
    topLevelDomains?: string[],
    distanceFunction?: MailcheckModule$IDistanceFunction
  ): void;
}

export interface MailcheckModule$IJQuerySuggested {
  (element: JQuery, suggested: MailcheckModule$ISuggestion): void;
}

export interface MailcheckModule$IJQueryEmpty {
  (element: JQuery): void;
}

export interface MailcheckModule$IEmpty {
  (): void;
}

export interface MailcheckModule$ISuggested {
  (suggested: MailcheckModule$ISuggestion): void;
}

export interface MailcheckModule$ISplitEmail {
  topLevelDomain?: string;
  domain?: string;
  address?: string;
}

export interface MailcheckModule$ISuggestion {
  address: string;
  domain: string;
  full: string;
}

export interface MailcheckModule$IOptions {
  email: string;
  domains?: string[];
  secondLevelDomains?: string[];
  topLevelDomains?: string[];
  distanceFunction?: MailcheckModule$IDistanceFunction;
  suggested?: MailcheckModule$ISuggested | MailcheckModule$IJQuerySuggested;
  empty?: MailcheckModule$IEmpty | MailcheckModule$IJQueryEmpty;
}

export interface MailcheckModule$Static {
  defaultDomains: string[];
  defaultSecondLevelDomains: string[];
  defaultTopLevelDomains: string[];
  domainThreshold: number;
  topLevelThreshold: number;
  run(opts: MailcheckModule$IOptions): void;
  suggest: MailcheckModule$ISuggestFunction;
  encodeEmail(email: string): string;
  splitEmail(email: string): MailcheckModule$ISplitEmail;
  sift3Distance(s1: string, s2: string): number;
  findClosestDomain(
    domain: string,
    domains: string[],
    distanceFunction?: MailcheckModule$IDistanceFunction,
    threshold?: number
  ): boolean | string;
}
declare interface JQuery {
  mailcheck(opts: MailcheckModule$MailcheckModule$IOptions): void;
}
declare module "mailcheck" {
  declare export default typeof Mailcheck;
}
