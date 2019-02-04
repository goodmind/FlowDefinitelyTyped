declare module 'react-native-sortable-grid' {
        import typeof * as React from 'react';

	import type {
          StyleProp,ViewStyle,Animated
        } from 'react-native';

	declare interface SortableGridItemProps {
key: string,

/**
 * Function that is executed when the block is tapped once, but not pressed
 *   for long enough to activate the drag.
 */
onTap(): void,

/**
 * Function that is executed when the block is double tapped within a
 * timeframe of doubleTapTreshold (default 150ms). Assigning this will
 * delay the execution of onTap. Omitting this will cause all taps to be
 * handled as single taps, regardless of their frequency.
 */
onDoubleTap(): void,

/**
 * Flag to mark a child node as being inactive. If set, no touch events
 * will be fired when users interact with the node.
 */
inactive?: boolean
} 
	declare type SortableGridItem = React.ReactElement<SortableGridItemProps>;
	declare interface OrderedItem {
key: string,
ref: SortableGridItem | null,
order: number
} 
	declare export interface ItemOrder {
itemOrder: $ReadOnlyArray<OrderedItem>
} 
	declare interface SortableGridProps {

/**
 * Custom styles to override or complement the sortableGrid native style.
 */
style?: StyleProp<ViewStyle>,

/**
 * How long should the transition of a passive block take when the active
 * block takes its place (milliseconds)
 */
blockTransitionDuration?: number,

/**
 * How long should it take for the block that is being dragged to seek its
 * place after it's released (milliseconds)
 */
activeBlockCenteringDuration?: number,

/**
 * How many items should be placed on one row
 */
itemsPerRow?: number,

/**
 * If set, itemsPerRow will be calculated to fit items of this size
 */
itemWidth?: number,

/**
 * When used together with itemsPerRow, sets the size of a block to
 * something other than the default square
 */
itemHeight?: number,

/**
 * How long must the user hold the press on the block until it becomes
 * active and can be dragged (milliseconds)
 */
dragActivationThreshold?: number,

/**
 * How long will the execution wait for the second tap before deciding it
 * was a single tap (milliseconds). Will be omitted if no
 * onDoubleTap-property is given to the item being tapped - In which case
 * single-tap callback will be executed instantly
 */
doubleTapTreshold?: number,

/**
 * Function that is called when the dragging starts. This can be used to
 * lock other touch responders from listening to the touch such as
 * ScrollViews and Swipers.
 */
onDragStart(item: OrderedItem): void,

/**
 * Function that is executed after the drag is released. Will return the
 * new item order.
 */
onDragRelease(itemOrder: ItemOrder): void,

/**
 * Function that is executed item is deleted. Will return the properties
 * of the deleted item.
 */
onDeleteItem(deletedItem: OrderedItem): void,

/**
 * Custom animation to override the default wiggle. Must be an object
 * containing a key transform, which is an array of transformations.
 */
dragStartAnimation?: {
transform: $ReadOnlyArray<{
[type: string]: Animated.AnimatedInterpolation
}>
},

/**
 * Items to be rendered in the SortableGrid
 */
children?: $ReadOnlyArray<SortableGridItem>
} 
	declare type SortableGridStatic = {

/**
 * Calling this will toggle item deletion mode on/off.
 */
toggleDeleteMode(): {
deleteModeOn: boolean
}
} & React.ClassicComponentClass<SortableGridProps>

	declare var SortableGrid: SortableGridStatic;
	declare type SortableGrid = SortableGridStatic;
	declare export default typeof SortableGrid

    }
