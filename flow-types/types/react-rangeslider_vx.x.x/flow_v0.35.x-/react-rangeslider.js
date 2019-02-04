declare module 'react-rangeslider' {
        import typeof * as React from 'react';

	declare export interface SliderProps {
disabled?: boolean,
format?: (value: number) => string | number | void,
handleLabel?: boolean,
labels?: {
[value: number]: string
},
max?: number,
min?: number,
onChange(value: number): void,
onChangeComplete(value: number): void,
onChangeStart(value: number): void,
orientation?: string,
reverse?: boolean,
step?: number,
tooltip?: boolean,
value: number
} 
	declare export default class Slider mixins React.Component<SliderProps> {}
    }
