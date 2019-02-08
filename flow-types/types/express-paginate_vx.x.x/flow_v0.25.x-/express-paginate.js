declare interface Express$Request {
  skip?: number;
  offset?: number;
}
declare module "global" {
}
declare module "express-paginate" {
  declare export interface PageElement {
    number: number;
    url: typeof href;
  }
  declare export function middleware(
    limit?: number,
    maxLimit?: number
  ): (
    req: express.Express$Request,
    res: express.Response,
    next: express.NextFunction
  ) => void;

  declare export function hasNextPages(
    req: express.Express$Request
  ): (pageCount: number) => boolean;

  declare export function href(
    req: express.Express$Request
  ): (
    prev: { [key: string]: any } | boolean,
    params: { [key: string]: any }
  ) => string;

  declare export function getArrayPages(
    req: express.Express$Request
  ): (limit: number, pageCount: number, currentPage: number) => PageElement[];
}
