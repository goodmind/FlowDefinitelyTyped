declare module "cloud-env" {
  declare interface DefaultSettings {
    PORT?: number;
    IP?: string;
    HOSTNAME?: string;
    APP_NAME?: string;
    MONGODB_DB_URL?: string;
    MONGODB_DB_HOST?: string;
    MONGODB_DB_PORT?: number;
    MONGODB_DB_USERNAME?: string;
    MONGODB_DB_PASSWORD?: string;
    POSTGRESQL_DB_URL?: string;
    POSTGRESQL_DB_HOST?: string;
    POSTGRESQL_DB_PORT?: number;
    POSTGRESQL_DB_USERNAME?: string;
    POSTGRESQL_DB_PASSWORD?: string;
    MYSQL_DB_URL?: string;
    MYSQL_DB_HOST?: string;
    MYSQL_DB_PORT?: number;
    MYSQL_DB_USERNAME?: string;
    MYSQL_DB_PASSWORD?: string;
  }
  declare type MaybeNum = number | void;
  declare type MaybeStr = string | void;
  declare export var get: (key: string, default_key?: string) => MaybeStr;
  declare export var defaults: {
    [key: string]: DefaultSettings
  };
  declare export var PORT: MaybeNum;
  declare export var IP: MaybeStr;
  declare export var HOSTNAME: MaybeStr;
  declare export var APP_NAME: MaybeStr;
  declare export var MONGODB_DB_URL: MaybeStr;
  declare export var MONGODB_DB_HOST: MaybeStr;
  declare export var MONGODB_DB_PORT: MaybeNum;
  declare export var MONGODB_DB_USERNAME: MaybeStr;
  declare export var MONGODB_DB_PASSWORD: MaybeStr;
  declare export var POSTGRESQL_DB_URL: MaybeStr;
  declare export var POSTGRESQL_DB_HOST: MaybeStr;
  declare export var POSTGRESQL_DB_PORT: MaybeNum;
  declare export var POSTGRESQL_DB_USERNAME: MaybeStr;
  declare export var POSTGRESQL_DB_PASSWORD: MaybeStr;
  declare export var MYSQL_DB_URL: MaybeStr;
  declare export var MYSQL_DB_HOST: MaybeStr;
  declare export var MYSQL_DB_PORT: MaybeNum;
  declare export var MYSQL_DB_USERNAME: MaybeStr;
  declare export var MYSQL_DB_PASSWORD: MaybeStr;
}
