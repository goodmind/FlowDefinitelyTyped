declare module 'react-native-draggable-flatlist' {
        import type {
          VirtualizedListWithoutRenderItemProps
        } from 'react-native';

	import type {
          Component
        } from 'react';

	declare export interface RenderItemInfo<ItemR> {
item: ItemR,
index: number,
move: () => void,
moveEnd: () => void,
isActive: boolean
} 
	declare export interface OnMoveEndInfo<ItemM> {
data: $ReadOnlyArray<ItemM> | null,
to: number,
from: number,
row: ItemM
} 
	declare type DraggableFlatListProps<Item> = {

/**
 * Items to be rendered.
 */
data: $ReadOnlyArray<Item> | null,

/**
 * Function that returns updated ordering of data
 */
onMoveEnd?: (info: OnMoveEndInfo<Item>) => void,

/**
 * Function that is called when row becomes active.
 */
onMoveBegin?: (index: number) => void,

/**
 * Sets where scrolling begins.
 * 
 * Default is 5
 */
scrollPercent?: number,

/**
 * Function that calls move when the row should become active (in an onPress, onLongPress, etc). Calls moveEnd when the gesture is complete (in onPressOut).
 */
renderItem: (info: RenderItemInfo<Item>) => React.ReactElement<any> | null
} & VirtualizedListWithoutRenderItemProps<Item>

	declare class DraggableFlatList<Item> mixins Component<DraggableFlatListProps<Item>> {
constructor(props: DraggableFlatListProps<Item>): this
}
	declare export default typeof DraggableFlatList

    }
