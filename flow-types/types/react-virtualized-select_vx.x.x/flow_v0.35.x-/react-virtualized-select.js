declare module 'react-virtualized-select' {
        import typeof * as React from 'react';

	import type {
          ReactSelectProps,ReactAsyncSelectProps,ReactCreatableSelectProps,LoadOptionsHandler,OptionValues
        } from 'react-select';

	import type {
          ListProps
        } from 'react-virtualized';

	declare export interface VirtualizedOptionRenderOptions<T> {
focusedOption: T,
focusedOptionIndex: number,
focusOption(option: T): void,
key: string,
labelKey: $Keys<T>,
listProps: ListProps,
option: T,
options: T[],
selectValue(option: T): void,
style: Record<string, string>,
valueArray: T[]
} 
	declare export interface AdditionalVirtualizedSelectProps<TValue> {
maxHeight?: number,
optionHeight?: number,
optionRenderer(options: VirtualizedOptionRenderOptions<TValue>): JSX.Element,
selectComponent?: React.ComponentClass<any> | React.StatelessComponent<any>
} 
	declare type VirtualizedSelectProps<TValue> = (ReactCreatableSelectProps<TValue> & ReactAsyncSelectProps<TValue> & AdditionalVirtualizedSelectProps<TValue> & {
async: true
}) | ReactCreatableSelectProps<TValue> & ReactSelectProps<TValue> & AdditionalVirtualizedSelectProps<TValue>;
	declare class VirtualizedSelect<TValue> mixins React.PureComponent<VirtualizedSelectProps<TValue>> {}
	declare export default typeof VirtualizedSelect

    }
