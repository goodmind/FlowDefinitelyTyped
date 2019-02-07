declare module "json-server" {
  import type { NextHandleFunction } from "connect";

  import type { Application, RequestHandler, Router } from "express";

  /**
   * Returns an Express server.
   */
  declare export function create(): Application;

  /**
   * Returns middlewares used by JSON Server.
   */
  declare export function defaults(
    options?: MiddlewaresOptions
  ): RequestHandler[];

  /**
   * Returns JSON Server router.
   * @param source Either a path to a json file (e.g. `'db.json'`) or an object in memory
   * @param options Set foreign key suffix (default: `'Id'`)
   */
  declare export function router(
    source: string | { [key: string]: any },
    options?: {
      foreignKeySuffix: string
    }
  ): Router;

  /**
   * Add custom rewrite rules.
   */
  declare export function rewriter(rules: {
    [rule: string]: string
  }): Router;

  /**
   * Returns body-parser middleware used by JSON Server router.
   * @returns ```
   * [bodyParser.json({ limit: '10mb', extended: false }), bodyParser.urlencoded({ extended: false })]
   * ```
   */
  declare export var bodyParser: [NextHandleFunction, NextHandleFunction];
  declare export interface MiddlewaresOptions {
    /**
     * Path to static files
     * @default "public" (if folder exists)
     */
    static?: string;

    /**
     * Enable logger middleware
     * @default true
     */
    logger?: boolean;

    /**
     * Enable body-parser middleware
     * @default true
     */
    bodyParser?: boolean;

    /**
     * Disable CORS
     * @default false
     */
    noCors?: boolean;

    /**
     * Accept only GET requests
     * @default false
     */
    readOnly?: boolean;
  }
}
