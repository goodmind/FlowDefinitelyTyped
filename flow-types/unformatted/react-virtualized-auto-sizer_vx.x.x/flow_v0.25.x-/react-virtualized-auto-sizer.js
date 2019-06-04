declare module 'react-virtualized-auto-sizer' {
        import typeof * as React from 'react';

	declare export interface Size {
height: number,
width: number
} 
	declare export interface AutoSizerProps {

/**
 * Function responsible for rendering children.
 */
children: (size: Size) => React.Node,

/**
 * Optional custom CSS class name to attach to root AutoSizer element.
 */
className?: string,

/**
 * Default height to use for initial render; useful for SSR
 */
defaultHeight?: number,

/**
 * Default width to use for initial render; useful for SSR
 */
defaultWidth?: number,

/**
 * Disable dynamic :height property
 */
disableHeight?: boolean,

/**
 * Disable dynamic :width property
 */
disableWidth?: boolean,

/**
 * Nonce of the inlined stylesheet for Content Security Policy
 */
nonce?: string,

/**
 * Callback to be invoked on-resize
 */
onResize?: (size: Size) => void,

/**
 * Optional inline style
 */
style?: React.CSSProperties
} 
	declare export default class INVALID NAME REF mixins React.Component<AutoSizerProps> {}
    }
