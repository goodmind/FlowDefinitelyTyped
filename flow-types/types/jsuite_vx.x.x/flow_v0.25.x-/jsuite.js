declare module "jSuite" {
  declare function getVersion(): string;

  declare function setLogging(toggle: boolean): void;

  declare function getRoleCenter(): any;

  declare function getUser(): any;

  declare function getScriptParameter(paramName: string): any;

  declare function getDeploymentId(): any;

  declare function getScriptId(): any;

  declare function isProduction(): any;

  declare function clearSublist(
    transaction: nlobjRecord,
    listType: string
  ): void;

  declare function getCompanyPreference(paramName: string): any;

  declare function roundNum(num: number, length: number): number;

  declare function isNumber(n: any): boolean;

  declare function runSearch(config?: Iconfig): any;

  declare function lookupField(dataIn: any): string;

  declare function submitField(dataIn: any): any;

  declare function asyncLookupField(config: any, callback: any): void;

  declare function asyncSubmitField(config: any): JQueryXHR;

  declare function audit(title: string, message: string): void;

  declare function debug(title: string, message: string): void;

  declare function error(title: string, message: string): void;

  declare function emergency(title: string, message: string): void;
}
declare module "jsuite" {
  declare interface Iconfig {
    logging?: boolean;
    smartConvert?: boolean;
    searchId?: string;
    recordType?: string;
    filterExpression?: any;
    columns?: string;
    start?: number;
    end?: number;
    maxUnitsUsage?: number;
  }
}
