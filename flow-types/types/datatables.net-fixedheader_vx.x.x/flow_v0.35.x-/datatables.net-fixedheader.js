declare module 'datatables.net-fixedheader' {
        declare interface DataTables$Settings {
fixedHeader?: boolean | DataTables$FixedHeaderSettings
} 

declare interface DataTables$StaticFunctions {
FixedHeader: DataTables$FixedHeaderStaticFunctions
} 

declare interface DataTables$FixedHeaderStaticFunctions {
new (dt: DataTables$Api, settings: boolean | DataTables$FixedHeaderSettings): void,
version: string,
defaults: DataTables$FixedHeaderSettings
} 

declare interface DataTables$Api {
fixedHeader: DataTables$FixedHeaderApi
} 

declare interface DataTables$FixedHeaderApi {

/**
 * Recalculate the position of the DataTable on the page and adjust the fixed element as appropriate.
 */
adjust(): DataTables$Api,

/**
 * Disable the fixed elements
 */
disable(): DataTables$Api,

/**
 * Enable / disable the fixed elements
 */
enable(enable: boolean): DataTables$Api,

/**
 * Get the fixed footer's offset.
 */
footerOffset(offset: number): DataTables$Api,

/**
 * Get the fixed header's offset.
 */
headerOffset(offset: number): DataTables$Api
} 

declare interface DataTables$FixedHeaderSettings {
footer?: boolean,
footerOffset?: number,
header?: boolean,
headerOffset?: number
} 
    }
