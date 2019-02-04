declare module 'react-text-mask' {
        import typeof * as React from 'react';

	declare export type maskArray = Array<string | RegExp>;
	declare export type MaskedInputProps = {
mask?: maskArray | ((value: string) => maskArray),
guide?: boolean,
placeholderChar?: string,
keepCharPositions?: boolean,
pipe?: (
conformedValue: string,
config: any) => false | string | {
value: string,
indexesOfPipedChars: number[]
},
showMask?: boolean,
render?: (ref: (inputElement: HTMLElement) => void, props: any) => any
} & React.InputHTMLAttributes<HTMLInputElement>

	declare export interface conformToMaskResult {
conformedValue: string,
meta: {
someCharsRejected: boolean
}
} 
	declare export default class MaskedInput mixins React.Component<MaskedInputProps, any> {
inputElement: HTMLElement
}
	declare export function conformToMask(text: string, mask: maskArray, config: any): conformToMaskResult

    }
