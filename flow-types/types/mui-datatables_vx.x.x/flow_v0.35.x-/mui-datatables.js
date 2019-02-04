declare module 'mui-datatables' {
        import typeof * as React from 'react';

	declare interface MUIDataTableData {
index: number,
data: any[]
} 
	declare interface MUIDataTableStateRows {
data: string[],
lookup: any
} 
	declare interface MUIDataTableState {
announceText: string | null,
activeColumn: string | null,
page: number,
rowsPerPage: number,
filterList: string[][],
selectedRows: MUIDataTableStateRows,
expandedRows: MUIDataTableStateRows,
showResponsive: boolean,
searchText: string | null,
rowsPerPageOptions: number[]
} 
	declare interface MUIDataTableMeta {
rowIndex: number,
columnIndex: number,
columnData: MUIDataTableColumnOptions[],
rowData: any[],
tableData: MUIDataTableData[],
tableState: MUIDataTableState
} 
	declare type MUIDataTableCustomHeadRenderer = {
index: number
} & MUIDataTableColumn

	declare interface MUIDataTableColumn {
name: string,
options?: MUIDataTableColumnOptions
} 
	declare interface MUIDataTableTextLabelsBody {
noMatch: string,
toolTip: string
} 
	declare interface MUIDataTableTextLabelsPagination {
next: string,
previous: string,
rowsPerPage: string,
displayRows: string
} 
	declare interface MUIDataTableTextLabelsToolbar {
search: string,
downloadCsv: string,
print: string,
viewColumns: string,
filterTable: string
} 
	declare interface MUIDataTableTextLabelsFilter {
all: string,
title: string,
reset: string
} 
	declare interface MUIDataTableTextLabelsViewColumns {
title: string,
titleAria: string
} 
	declare interface MUIDataTableTextLabelsSelectedRows {
text: string,
delete: string,
deleteAria: string
} 
	declare interface MUIDataTableTextLabels {
body: MUIDataTableTextLabelsBody,
pagination: MUIDataTableTextLabelsPagination,
toolbar: MUIDataTableTextLabelsToolbar,
filter: MUIDataTableTextLabelsFilter,
viewColumns: MUIDataTableTextLabelsViewColumns,
selectedRows: MUIDataTableTextLabelsSelectedRows
} 
	declare export interface MUIDataTableColumnOptions {
display?: "true" | "false" | "excluded",
filter?: boolean,
filterList?: string[],
filterOptions?: string[],
sort?: boolean,
sortDirection?: "asc" | "desc",
download?: boolean,
hint?: string,
customHeadRender?: (
columnMeta: MUIDataTableCustomHeadRenderer,
updateDirection: (params: any) => any) => string,
customBodyRender?: (
value: any,
tableMeta: MUIDataTableMeta,
updateValue: (s: any, c: any, p: any) => any) => string | React.ReactNode,
setCellProps?: (cellValue: string, rowIndex: number, columnIndex: number) => string
} 
	declare export interface MUIDataTableOptions {
page?: number,
count?: number,
serverSide?: boolean,
rowsSelected?: any[],
filterType?: "dropdown" | "checkbox" | "multiselect" | "textField",
textLabels?: MUIDataTableTextLabels,
pagination?: boolean,
selectableRows?: boolean,
IsRowSelectable?: (dataIndex: any) => boolean,
resizableColumns?: boolean,
expandableRows?: boolean,
renderExpandableRow?: (
rowData: string[],
rowMeta: {
dataIndex: number,
rowIndex: number
}) => React.ReactNode,
customToolbar?: () => React.ReactNode,
customToolbarSelect?: () => React.ReactNode,
customFooter?: () => React.ReactNode,
customSort?: (data: any[], colIndex: number, order: string) => any[],
elevation?: number,
caseSensitive?: boolean,
responsive?: "stacked" | "scroll",
rowsPerPage?: number,
rowsPerPageOptions?: number[],
rowHover?: boolean,
fixedHeader?: boolean,
sortFilterList?: boolean,
sort?: boolean,
filter?: boolean,
search?: boolean,
print?: boolean,
download?: boolean,
downloadOptions?: {
filename: string,
separator: string
},
viewColumns?: boolean,
onRowsSelect?: (currentRowsSelected: any[], rowsSelected: any[]) => void,
onRowsDelete?: (rowsDeleted: any[]) => void,
onRowClick?: (rowData: string[], rowMeta: {
dataIndex: number,
rowIndex: number
}) => void,
onCellClick?: (colIndex: number, rowIndex: number) => void,
onChangePage?: (currentPage: number) => void,
onChangeRowsPerPage?: (numberOfRows: number) => void,
onSearchChange?: (searchText: string) => void,
onFilterChange?: (changedColumn: string, filterList: any[]) => void,
onColumnSortChange?: (changedColumn: string, direction: string) => void,
onColumnViewChange?: (changedColumn: string, action: string) => void,
onTableChange?: (action: string, tableState: {[key: string]: any}) => void,
setRowProps?: (row: any[], rowIndex: number) => any
} 
	declare export type MUIDataTableColumnDef = string | MUIDataTableColumn;
	declare export interface MuiDatatablesTableState {
page: number,
rowsPerPage: number,
filterList: any[]
} 
	declare export interface MUIDataTableProps {
title: string,
columns: MUIDataTableColumnDef[],
data: any[],
options?: MUIDataTableOptions
} 
	declare var MUIDataTable: React.ComponentType<MUIDataTableProps>;
	declare export default typeof MUIDataTable

    }
