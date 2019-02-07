declare module "host-validation" {
  import type { Request, Response, NextFunction } from "express";

  declare interface hostValidation$config {
    hosts?: Array<string | RegExp>;
    referers?: Array<string | RegExp>;
    mode?: "both" | "either";
    fail?: (req: Request, res: Response, next: NextFunction) => void;
  }
  declare function hostValidation(
    opts: hostValidation$hostValidation$config
  ): (req: Request, res: Response, next: NextFunction) => void;

  declare module.exports: typeof hostValidation;
}
