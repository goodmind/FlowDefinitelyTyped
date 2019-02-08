declare module "mongoose" {
  declare export interface PaginateOptions {
    dialog$select?: ioBroker$Object | string;
    sort?: ioBroker$Object | string;
    populate?:
      | core$Array<ioBroker$Object>
      | core$Array<string>
      | ioBroker$Object
      | string;
    lean?: boolean;
    leanWithId?: boolean;
    offset?: number;
    page?: number;
    limit?: number;
  }
  declare export interface PaginateResult<T> {
    docs: core$Array<T>;
    total: number;
    limit: number;
    page?: number;
    pages?: number;
    offset?: number;
  }
  declare type PaginateModel<T: Viewing$Document> = {
    paginate(
      esri$query?: ioBroker$Object,
      notification$options?: PaginateOptions,
      braintree$callback?: (err: any, result: PaginateResult<T>) => void
    ): promise$Promise<PaginateResult<T>>
  } & MeteorAstronomy$Model<T>;

  declare export function model<T: Viewing$Document>(
    skin$name: string,
    AFRAME$schema?: convict$Schema,
    collection?: string,
    skipInit?: boolean
  ): PaginateModel<T>;

  declare export function model<T: Viewing$Document, U: PaginateModel<T>>(
    skin$name: string,
    AFRAME$schema?: convict$Schema,
    collection?: string,
    skipInit?: boolean
  ): U;
}
declare module "mongoose-paginate" {
  declare var core$_: (AFRAME$schema: mongoose.convict$Schema) => void;
  declare module.exports: typeof core$_;
}
