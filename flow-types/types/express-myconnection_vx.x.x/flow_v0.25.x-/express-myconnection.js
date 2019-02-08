export interface mysql$Connection {}

export interface mysql$MysqlError {}
export interface Express$Request {
  getConnection?: (
    callback: (
      err: mysql$mysql$MysqlError,
      connection: mysql$mysql$Connection
    ) => void
  ) => void;
}
declare module "express-myconnection" {
  declare function connection(
    mysqlInstance: typeof mysql,
    dbConfig: mysql$ConnectionConfig,
    strategy: string
  ): express.RequestHandler;

  declare export default typeof connection;
}
