declare module 'backgrid' {
        import typeof * as Backbone from 'backbone';

	declare module.exports: typeof Backgrid

	declare interface Backgrid$GridOptions {
columns: Backgrid$Column[],
collection: Backbone.Collection<Backbone.Model>,
header?: Backgrid$Header,
body?: Backgrid$Body,
row?: Backgrid$Row,
footer?: Backgrid$Footer
} 

declare class Backgrid$Header mixins Backbone.View<Backbone.Model> {}

declare class Backgrid$Footer mixins Backbone.View<Backbone.Model> {}

declare class Backgrid$Row mixins Backbone.View<Backbone.Model> {}

declare class Backgrid$Command  {
moveUp(): boolean;
moveDown(): boolean;
moveLeft(): boolean;
moveRight(): boolean;
save(): boolean;
cancel(): boolean;
passThru(): boolean
}

declare class Backgrid$CellFormatter  {
fromRaw(rawData: any, model: Backbone.Model): void;
toRaw(formattedData: any, model: Backbone.Model): void
}

declare class Backgrid$NumberFormatter mixins Backgrid$CellFormatter {}

declare class Backgrid$PercentFormatter mixins Backgrid$NumberFormatter {}

declare class Backgrid$DateTimeFormatter mixins Backgrid$CellFormatter {}

declare class Backgrid$StringFormatter mixins Backgrid$CellFormatter {}

declare class Backgrid$EmailFormatter mixins Backgrid$CellFormatter {}

declare class Backgrid$SelectFormatter mixins Backgrid$CellFormatter {}

declare class Backgrid$CellEditor mixins Backbone.View<Backbone.Model> {
initialize(options?: any): void;
postRender(model: Backbone.Model, column: Backbone.Model): void
}

declare class Backgrid$InputCellEditor mixins Backgrid$CellEditor {
render(): void;
saveOrCancel(event: any): void
}

declare class Backgrid$Cell mixins Backbone.View<Backbone.Model> {
tagName: string;
formatter: Backgrid$CellFormatter;
editor: Backgrid$InputCellEditor;
enterEditMode(): void;
renderError(): void;
exitEditMode(): void;
remove(): void
}

declare class Backgrid$StringCell mixins Backgrid$Cell {}

declare interface Backgrid$ColumnAttr {
name: string,
cell: string,
headerCell: string,
label: string,
sortable: boolean,
editable: boolean,
renderable: boolean,
formater: string
} 

declare class Backgrid$Column mixins Backbone.Model {
initialize(options?: any): void
}

declare class Backgrid$Body mixins Backbone.View<Backbone.Model> {
tagName: string;
initialize(options?: any): void;
insertRow(
model: Backbone.Model,
collection: Backbone.Collection<Backbone.Model>,
options: any): void;
moveToNextCell(model: Backbone.Model, cell: Backgrid$Column, command: Backgrid$Command): void;
refresh(): Backgrid$Body;
remove(): Backgrid$Body;
removeRow(
model: Backbone.Model,
collection: Backbone.Collection<Backbone.Model>,
options: any): void;
render(): Backgrid$Body
}

declare class Backgrid$Grid mixins Backbone.View<Backbone.Model> {
body: Backgrid$Backgrid$Body;
className: string;
footer: any;
header: any;
tagName: string;
constructor(options: Backgrid$GridOptions): this;
initialize(options: any): void;
getSelectedModels(): Backbone.Model[];
insertColumn(...options: any[]): Backgrid$Grid;
insertRow(
model: Backbone.Model,
collection: Backbone.Collection<Backbone.Model>,
options: any): void;
remove(): Backgrid$Grid;
removeColumn(...options: any[]): Backgrid$Grid;
removeRow(
model: Backbone.Model,
collection: Backbone.Collection<Backbone.Model>,
options: any): void;
render(): Backgrid$Grid
}
    }
