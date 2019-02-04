declare module 'react-maskedinput' {
        import typeof * as React from 'react';

	declare export interface FormatCharacter {
validate(char: string): string,
transform(char: string): string
} 
	declare export interface CharsFormatters {
[char: string]: FormatCharacter
} 
	declare export type MaskedInputProps = {
mask: string,
formatCharacters?: CharsFormatters,
placeholderChar?: string
} & React.InputHTMLAttributes<any>

	declare class MaskedInput mixins React.Component<MaskedInputProps> {}
	declare export default typeof MaskedInput

    }
