declare module "mongoose-seeder" {
  import typeof * as Q from "q";

  declare export interface IOptions {
    dropDatabase?: boolean;
    dropCollections?: boolean;
  }
  declare type seedCallback = (err: any, dbData: any) => void;
  declare export function seed(
    data: any,
    options: IOptions,
    callback: seedCallback
  ): void;

  declare export function seed(data: any, callback: seedCallback): void;

  declare export function seed(data: any, options: IOptions): Q.Promise<any>;
}
