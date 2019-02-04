declare module 'bootstrap-table' {
        declare interface JQuery {
bootstrapTable(options?: any): JQuery,
bootstrapTable(method: string, parameter?: any): JQuery
} 
	declare var bootstrapTable: JQueryStatic;
    }
