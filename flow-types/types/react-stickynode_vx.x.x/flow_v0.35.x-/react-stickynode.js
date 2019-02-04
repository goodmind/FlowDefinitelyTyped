declare module 'react-stickynode' {
        import typeof * as React from 'react';

	declare module.exports: typeof Sticky

	
/**
 * A performant and comprehensive React sticky component.
 */
declare class Sticky mixins React.Component<Sticky$Sticky$Props> {
static defaultProps: Sticky$Sticky$Props;
static STATUS_ORIGINAL: Sticky$Sticky$StatusCode.STATUS_ORIGINAL;
static STATUS_RELEASED: Sticky$Sticky$StatusCode.STATUS_RELEASED;
static STATUS_FIXED: Sticky$Sticky$StatusCode.STATUS_FIXED
}
	declare  class Sticky$StatusCode {
  constructor(...args: empty): mixed;
static +STATUS_ORIGINAL: Class<Sticky$StatusCode__STATUS_ORIGINAL> & Sticky$StatusCode__STATUS_ORIGINAL & 0;// 0
static +STATUS_RELEASED: Class<Sticky$StatusCode__STATUS_RELEASED> & Sticky$StatusCode__STATUS_RELEASED & 1;// 1
static +STATUS_FIXED: Class<Sticky$StatusCode__STATUS_FIXED> & Sticky$StatusCode__STATUS_FIXED & 2;// 2

}

declare class Sticky$StatusCode__STATUS_ORIGINAL mixins Sticky$StatusCode {}
declare class Sticky$StatusCode__STATUS_RELEASED mixins Sticky$StatusCode {}
declare class Sticky$StatusCode__STATUS_FIXED mixins Sticky$StatusCode {}


declare interface Sticky$Status {
status: Sticky$StatusCode
} 

declare interface Sticky$Props {

/**
 * The switch to enable or disable Sticky (true by default ).
 */
enabled?: boolean,

/**
 * The offset from the top of window where the top of the element will
 * be when sticky state is triggered(0 by default ).If it is a selector
 * to a target(via `querySelector()`), the offset will be the height of
 * the target.
 */
top?: number | string,

/**
 * The offset from the top of document which release state will be
 * triggered when the bottom of the element reaches at.If it is a
 * selector to a target(via `querySelector()`), the offset will be the
 * bottom of the target.
 */
bottomBoundary?: number | string,

/**
 * z - index of the sticky
 */
innerZ?: number | string,

/**
 * Enable the use of CSS3 transforms (true by default ).
 */
enableTransforms?: boolean,

/**
 * Class name to be applied to the element when the sticky state is
 * active (active by default ).
 */
activeClass?: string,

/**
 * Class name to be applied to the element when the sticky state is
 * released (released by default ).
 */
releasedClass?: string,

/**
 * Callback for when the sticky state changes.See below.
 */
onStateChange?: (status: Sticky$Status) => void,
shouldFreeze?: () => boolean
} 
    }
