declare module "hapi-decorators" {
  import typeof * as hapi from "hapi";

  import typeof * as Joi from "joi";

  declare interface ControllerStatic {
    new(...args: any[]): Controller;
  }
  declare export interface Controller {
    baseUrl: string;
    routes: () => hapi.RouteConfiguration[];
  }
  declare export function controller(
    baseUrl: string
  ): (target: ControllerStatic) => void;

  declare interface IRouteSetup {
    (target: any, key: any, descriptor: any): any;
  }
  declare interface IRouteDecorator {
    (method: string, path: string): IRouteSetup;
  }
  declare interface IRouteConfig {
    (path: string): IRouteSetup;
  }
  declare export var route: IRouteDecorator;
  declare export var get: IRouteConfig;
  declare export var post: IRouteConfig;
  declare export var put: IRouteConfig;
  declare export var patch: IRouteConfig;
  declare export var all: IRouteConfig;
  declare export function config(
    config: hapi.RouteAdditionalConfigurationOptions
  ): (target: any, key: any, descriptor: any) => any;

  declare export function validate(
    config: hapi.RouteValidationConfigurationObject
  ): (target: any, key: any, descriptor: any) => any;

  declare interface ICacheConfig {
    privacy?: string;
    expiresIn?: number;
    expiresAt?: number;
  }
  declare export function cache(
    cacheConfig: ICacheConfig
  ): (target: any, key: any, descriptor: any) => any;

  declare export function pre(pre: {
    [key: string]: any
  }): (target: any, key: any, descriptor: any) => any;
}
