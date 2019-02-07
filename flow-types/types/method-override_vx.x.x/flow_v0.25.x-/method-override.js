declare module "method-override" {
  declare export interface Express$Request {
    originalMethod?: string;
  }
  declare export interface e$MethodOverrideOptions {
    methods: string[];
  }
  declare function e(
    getter?:
      | string
      | ((req: express.Express$Request, res: express.Response) => string),
    options?: e$e$MethodOverrideOptions
  ): express.RequestHandler;

  declare module.exports: typeof e;
}
