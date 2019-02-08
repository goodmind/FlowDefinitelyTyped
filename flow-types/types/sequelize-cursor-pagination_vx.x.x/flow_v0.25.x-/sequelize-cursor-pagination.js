declare var npm$namespace$SequelizeCursorPagination: {
  withPagination: typeof SequelizeCursorPagination$withPagination
};
declare interface SequelizeCursorPagination$Cursors {
  before: string | null;
  after: string | null;
  hasNext: boolean;
  hasPrevious: boolean;
}

declare interface SequelizeCursorPagination$BasicPaginateOptions<T> {
  where?: $ElementType<Sequelize.FindOptions<T>, "where">;
  attributes?: $ElementType<Sequelize.FindOptions<T>, "attributes">;
  include?: $ElementType<Sequelize.FindOptions<T>, "include">;
  limit?: number;
  desc?: boolean;
  before?: string;
  after?: string;
  paginationField?: string;
  subQuery?: boolean;
}

declare type SequelizeCursorPagination$PaginateRawOptions<T> = {
  raw: true
} & SequelizeCursorPagination$BasicPaginateOptions<T>;

declare type SequelizeCursorPagination$PaginateInstOptions<T> = {
  raw?: boolean
} & SequelizeCursorPagination$BasicPaginateOptions<T>;

declare interface SequelizeCursorPagination$WithPaginationOptions<
  MethodName: string
> {
  methodName?: MethodName;
  primaryKeyField?: string;
}

declare type SequelizeCursorPagination$WithPaginationModel<
  MethodName: string,
  Model,
  ModelInst,
  ModelAttrs
> = Model &
  $ObjMapi<
    { [k: MethodName]: any },
    <key>(
      key
    ) => {
      (
        options?: SequelizeCursorPagination$PaginateRawOptions<ModelAttrs>
      ): {
        results: ModelAttrs[],
        cursors: SequelizeCursorPagination$Cursors
      },
      (
        options?: SequelizeCursorPagination$PaginateInstOptions<ModelAttrs>
      ): {
        results: ModelInst[],
        cursors: SequelizeCursorPagination$Cursors
      }
    }
  >;

declare function SequelizeCursorPagination$withPagination<MethodName: string>(
  options?: SequelizeCursorPagination$WithPaginationOptions<MethodName>
): <Model: Sequelize.Model<ModelInst, ModelAttrs>, ModelInst, ModelAttrs>(
  model: Model
) => SequelizeCursorPagination$WithPaginationModel<
  MethodName,
  Model,
  ModelInst,
  ModelAttrs
>;
declare module "sequelize-cursor-pagination" {
  declare module.exports: typeof SequelizeCursorPagination$SequelizeCursorPagination$withPagination;
}
