declare module 'react-json-tree' {
        import type {
          Component,Props
        } from 'react';

	declare export type JSONTreeProps = {
data: [any] | {},
hideRoot?: boolean,
theme?: {} | string,
invertTheme?: boolean,
keyPath?: [string | number],
sortObjectKeys?: Function | boolean,
shouldExpandNode?: (keyPath: (string | number)[], data: [any] | {}, level: number) => boolean,
getItemString?: (
type: string,
data: [any] | {},
itemType: string,
itemString: string) => JSX.Element,
labelRenderer?: (
keyPath: string[],
nodeType?: string,
expanded?: boolean,
expandable?: boolean) => JSX.Element,
valueRenderer?: (
displayValue: string | number,
rawValue?: string | number | boolean | null,
...keyPath: (string | number)[]) => JSX.Element,
postprocessValue?: (raw: string) => JSX.Element,
isCustomNode?: () => boolean,
collectionLimit?: number
} & Props<JSONTreeComponent>

	declare export default class JSONTreeComponent mixins Component<JSONTreeProps, {}> {}
    }
