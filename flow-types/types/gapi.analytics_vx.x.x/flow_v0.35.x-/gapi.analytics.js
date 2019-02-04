declare module 'gapi.analytics' {
        
      declare var npm$namespace$column: {
        list: typeof column$list,
        
      }
declare export function column$list(): Promise<any>

	declare interface DataQuery {
"ids"?: string,
"start-date"?: string,
"30daysAgo"?: string,
"end-date"?: string,
"yesterday"?: string,
"metrics"?: string,
"dimensions"?: string,
"sort"?: string,
"filters"?: string,
"segment"?: string,
"samplingLevel"?: string,
"include-empty-rows"?: string,
"start-index"?: string,
"max-results"?: string
} 
	declare interface View {
accountId?: string,
webPropertyId?: string,
webViewId?: string
} 
    }
