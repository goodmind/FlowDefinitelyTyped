declare module 'react-input-mask' {
        import typeof * as React from 'react';

	declare export interface Selection {
start: number,
end: number
} 
	declare export interface InputState {
value: string,
selection: Selection | null
} 
	declare export interface MaskOptions {
mask: string,
maskChar: string,
alwaysShowMask: boolean,
formatChars: Record<string, string>,
permanents: number[]
} 
	declare type Props = {

/**
 * Mask string. Format characters are:
 * * `9`: `0-9`
 * * `a`: `A-Z, a-z`
 * * `\*`: `A-Z, a-z, 0-9`
 * 
 * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
 * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
 */
mask: string,

/**
 * Character to cover unfilled editable parts of mask. Default character is "_". If set to null, unfilled parts will be empty, like in ordinary input.
 */
maskChar?: string | null,

/**
 * Defines format characters with characters as keys and corresponding RegExp string as values. Default ones:
 * ```
 *    * {
 *    *   "9": "[0-9]",
 *    *   "a": "[A-Za-z]",
 *    *   "*": "[A-Za-z0-9]"
 *    * }```
 */
formatChars?: {
[key: string]: string
},

/**
 * Show mask even in empty input without focus.
 */
alwaysShowMask?: boolean,

/**
 * Use inputRef instead of ref if you need input node to manage focus, selection, etc.
 */
inputRef?: React.Ref<HTMLInputElement>,

/**
 * In case you need to implement more complex masking behavior, you can provide
 * beforeMaskedValueChange function to change masked value and cursor position
 * before it will be applied to the input.
 */
beforeMaskedValueChange(
newState: InputState,
oldState: InputState,
userInput: string,
maskOptions: MaskOptions): InputState
} & React.InputHTMLAttributes<HTMLInputElement>

	declare export class ReactInputMask mixins React.Component<Props> {}
	declare export default typeof ReactInputMask

    }
