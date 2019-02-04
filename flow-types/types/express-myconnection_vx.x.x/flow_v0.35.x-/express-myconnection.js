declare export interface mysql$Connection {} 

declare export interface mysql$MysqlError {} declare export interface Express$Request {
getConnection?: (
callback: (err: mysql$mysql$MysqlError, connection: mysql$mysql$Connection) => void) => void
} declare module 'express-myconnection' {
        declare function connection(
mysqlInstance: (typeof mysql),
dbConfig: mysql$ConnectionConfig,
strategy: string): express.RequestHandler

	declare module.exports: typeof connection

    }
