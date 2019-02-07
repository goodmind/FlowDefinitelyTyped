declare module "swagger-ui-express" {
  import type { RequestHandler } from "express";

  import type { ServeStaticOptions } from "serve-static";

  declare interface JsonObject {
    [key: string]: any;
  }
  declare interface SwaggerUiOptions {
    [key: string]: any;
  }
  declare interface SwaggerOptions {
    [key: string]: any;
  }
  declare interface SwaggerUiExpress {
    /**
     * Creates a middleware function that returns the pre-generated html file for the Swagger UI page.
     * @param swaggerDoc json object with the API schema.
     * @param opts swagger-ui-express options.
     * @param options custom swagger options.
     * @param customCss string with a custom css to embed into the page.
     * @param customfavIcon link to a custom favicon.
     * @param swaggerUrl Url of the swagger API schema, can be specified instead of the swaggerDoc.
     * @param customeSiteTitle custom title for a page
     * @returns an express middleware function that returns the generated html page.
     */
    setup(
      swaggerDoc?: JsonObject | null,
      opts?: SwaggerUiOptions | false | null,
      options?: SwaggerOptions,
      customCss?: string | false | null,
      customfavIcon?: string | false | null,
      swaggerUrl?: string | false | null,
      customeSiteTitle?: string | false | null
    ): RequestHandler;

    /**
     * Returns handlers for serving Swagger UI files.
     * This includes custom initialization js file and static files of Swagger UI.
     * @returns Express handlers that process requests and return files for Swagger UI.
     */
    serve(): RequestHandler[];

    /**
     * Returns handlers for serving Swagger UI files.
     * This includes custom initialization js file and static files of Swagger UI.
     * Additional options are passed to the express.static middleware.
     * @param options options object that is passed to the express.static middleware.
     * @returns Express handlers that process requests and return files for Swagger UI.
     */
    serveWithOptions(options: ServeStaticOptions): RequestHandler[];

    /**
     * Generates the custom html page for the UI API.
     * @param swaggerDoc json object with the API schema.
     * @param opts swagger-ui-express options.
     * @param options custom swagger options.
     * @param customCss string with a custom css to embed into the page.
     * @param customfavIcon link to a custom favicon.
     * @param swaggerUrl Url of the swagger API schema, can be specified instead of the swaggerDoc.
     * @param customeSiteTitle custom title for a page
     * @returns the generated html page.
     */
    generateHTML(
      swaggerDoc?: JsonObject | null,
      opts?: SwaggerUiOptions | false | null,
      options?: SwaggerOptions,
      customCss?: string | false | null,
      customfavIcon?: string | false | null,
      swaggerUrl?: string | false | null,
      customeSiteTitle?: string | false | null
    ): string;

    /**
     * Returns handlers for serving Swagger UI files.
     * This includes custom initialization js file and static files of Swagger UI.
     * Additional options object is passed to Swagger UI.
     * @param swaggerDoc json object with the Swagger API schema.
     * @param opts options to pass to Swagger UI.
     * @returns Express handlers that process requests and return files for Swagger UI.
     */
    serveFiles(
      swaggerDoc?: JsonObject,
      opts?: SwaggerUiOptions
    ): RequestHandler[];
  }
  declare var swaggerUiExpress: SwaggerUiExpress;
  declare module.exports: typeof swaggerUiExpress;
}
