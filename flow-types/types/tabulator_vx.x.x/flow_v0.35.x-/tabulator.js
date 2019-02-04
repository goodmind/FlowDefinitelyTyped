declare module 'tabulator' {
        declare module.exports: typeof Tabulator

	declare class Tabulator  {
constructor(): this;
defaultShowAttribute: string;
toMatrix(datum: {[key: string]: any}): {[key: string]: any};
toHtmlTable(matrix: {[key: string]: any}): any
}
    }
