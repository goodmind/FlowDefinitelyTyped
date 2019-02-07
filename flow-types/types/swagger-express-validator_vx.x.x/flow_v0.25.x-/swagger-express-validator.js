declare module "swagger-express-validator" {
  import type { Request, RequestHandler } from "express";

  declare function SwaggerExpressValidator(
    options: SwaggerExpressValidator$SwaggerExpressValidator$Options
  ): RequestHandler;

  declare var npm$namespace$SwaggerExpressValidator: {
    validator: typeof SwaggerExpressValidator$validator
  };
  declare interface SwaggerExpressValidator$Options {
    schema: string;
    validateRequest?: boolean;
    validateResponse?: boolean;
    allowNullable?: boolean;
    requestValidationFn?: (req: Request, data: any, errors: any) => void;
    responseValidationFn?: (req: Request, data: any, errors: any) => void;
  }

  declare function SwaggerExpressValidator$validator(
    options: SwaggerExpressValidator$Options
  ): RequestHandler;

  declare module.exports: typeof SwaggerExpressValidator;
}
