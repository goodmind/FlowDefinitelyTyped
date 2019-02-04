declare module 'yesql' {
        declare function readSqlFiles(
dir: string,
options?: {
readSqlFiles$pg?: boolean,
type?: "pg" | "mysql"
}): string

	
      declare var npm$namespace$readSqlFiles: {
        pg: typeof readSqlFiles$pg,
mysql: typeof readSqlFiles$mysql,
        
      }
declare function readSqlFiles$pg(query: string): (data: {[key: string]: any}) => {
text: string,
values: any[]
}


declare function readSqlFiles$mysql(query: string): (data: {[key: string]: any}) => {
sql: string,
values: any[]
}

	declare module.exports: typeof readSqlFiles

    }
