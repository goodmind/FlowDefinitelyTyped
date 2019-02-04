declare module 'react-dnd-touch-backend' {
        import type {
          BackendFactory
        } from 'dnd-core';

	declare export default function createTouchBackend(option?: TouchBackendOptions): BackendFactory

	declare export interface TouchBackendOptions {

/**
 * Support mouse events as well as touch events.
 */
enableMouseEvents?: boolean,

/**
 * Can cancel drag by hitting Escape if enableKeyboardEvents option is set to true
 */
enableKeyboardEvents?: boolean,

/**
 * Number of milliseconds that the item needs to be touched before the touch is considered the start of a drag.
 * This is used to allow both flick-to-scroll and drag-n-drop on objects in a list.
 */
delayTouchStart?: number,

/**
 * Number of milliseconds that the item needs to be clicked on before the click is considered the start of a drag.
 */
delayMouseStart?: number,

/**
 * Number of milliseconds delay before the touch/click is considered a drag.
 * @deprecated replaced by delayTouchStart and delayMouseStart, but is still supported at present.
 */
delay?: number,

/**
 * Specifies the pixel distance moved before a drag is signaled. Default 0.
 */
touchSlop?: number,

/**
 * If true, prevents the contextmenu event from canceling a drag. Default false.
 */
ignoreContextMenu?: boolean,

/**
 * Specifies ranges of angles in degrees that drag events should be ignored. This is useful when you want to allow
 * the user to scroll in a particular direction instead of dragging. Degrees move clockwise, 0/360 pointing to the
 * left. Default: undefined
 */
scrollAngleRanges?: $ReadOnlyArray<{
start?: number,
end?: number
}>
} 
    }
