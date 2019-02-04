declare module 'dat.gui' {
        declare export interface GUIParams {

/**
 * Handles GUI's element placement for you.
 * @default true
 */
autoPlace?: boolean,

/**
 * If true, starts closed.
 * @default false
 */
closed?: boolean,

/**
 * If true, close/open button shows on top of the GUI.
 * @default false
 */
closeOnTop?: boolean,

/**
 * If true, GUI is closed by the "h" keypress.
 * @default false
 */
hideable?: boolean,

/**
 * JSON object representing the saved state of this GUI.
 */
load?: any,

/**
 * The name of this GUI.
 */
name?: string,

/**
 * The identifier for a set of saved values.
 */
preset?: string,

/**
 * The width of GUI element.
 */
width?: number
} 
	declare export class GUI  {
constructor(option?: GUIParams): this;
__controllers: GUIController[];
__folders: GUI[];
domElement: HTMLElement;
add(
target: Object,
propName: string,
min?: number,
max?: number,
step?: number): GUIController;
add(target: Object, propName: string, status: boolean): GUIController;
add(target: Object, propName: string, items: string[]): GUIController;
add(target: Object, propName: string, items: number[]): GUIController;
add(target: Object, propName: string, items: Object): GUIController;
addColor(target: Object, propName: string): GUIController;
remove(controller: GUIController): void;
destroy(): void;
addFolder(propName: string): GUI;
removeFolder(subFolder: GUI): void;
open(): void;
close(): void;
remember(target: Object, ...additionalTargets: Object[]): void;
getRoot(): GUI;
getSaveObject(): Object;
save(): void;
saveAs(presetName: string): void;
revert(gui: GUI): void;
listen(controller: GUIController): void;
updateDisplay(): void;
parent: GUI;
scrollable: boolean;
autoPlace: boolean;
preset: string;
width: number;
name: string;
closed: boolean;
load: Object;
useLocalStorage: boolean
}
	declare export class GUIController  {
destroy(): void;
onChange: (value?: any) => GUIController;
onFinishChange: (value?: any) => GUIController;
setValue(value: any): GUIController;
getValue(): any;
updateDisplay(): GUIController;
isModified(): boolean;
min(n: number): GUIController;
max(n: number): GUIController;
step(n: number): GUIController;
fire(): GUIController;
options(option: any): GUIController;
name(s: string): GUIController;
listen(): GUIController;
remove(): GUIController
}
    }
