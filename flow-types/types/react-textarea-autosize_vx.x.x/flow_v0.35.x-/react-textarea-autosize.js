declare module 'react-textarea-autosize' {
        import typeof * as React from 'react';

	
/**
 * <TextareaAutosize/> properties
 */
declare export type TextareaAutosizeProps = {

/**
 * Current textarea value
 */
value?: string,

/**
 * Callback on value change
 * @param event
 */
onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,

/**
 * Callback on height change
 * @param height
 */
onHeightChange?: (height: number) => void,

/**
 * Try to cache DOM measurements performed by component so that we don't
 * touch DOM when it's not needed.
 * 
 * This optimization doesn't work if we dynamically style <textarea />
 * component.
 * @default false
 */
useCacheForDOMMeasurements?: boolean,

/**
 * Minimal number of rows to show.
 */
rows?: number,

/**
 * Alias for `rows`.
 */
minRows?: number,

/**
 * Maximum number of rows to show.
 */
maxRows?: number,

/**
 * Allows an owner to retrieve the DOM node.
 */
inputRef?: (node: HTMLTextAreaElement) => void
} & React.HTMLProps<HTMLTextAreaElement>

	
/**
 * <TextareaAutosize/>
 */
declare export default class TextareaAutosize mixins React.Component<TextareaAutosizeProps> {}
    }
