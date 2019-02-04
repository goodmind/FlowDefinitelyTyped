declare module 'react-tag-input' {
        import typeof * as React from 'react';

	declare export interface ReactTagsProps {
tags?: Array<{
id: string,
text: string
}>,
suggestions?: Array<{
id: string,
text: string
}>,
delimiters?: number[],
placeholder?: string,
labelField?: string,
handleAddition: ((tag: {
id: string,
text: string
}) => void),
handleDelete: ((i: number) => void),
handleDrag?: ((tag: {
id: string,
text: string
}, currPos: number, newPos: number) => void),
handleFilterSuggestions?: ((
textInputValue: string,
possibleSuggestionsArray: Array<{
id: string,
text: string
}>) => Array<{
id: string,
text: string
}>),
handleTagClick?: ((i: number) => void),
autofocus?: boolean,
allowDeleteFromEmptyInput?: boolean,
handleInputChange?: ((value: string) => void),
handleInputFocus?: ((value: string) => void),
handleInputBlur?: ((textInputValue: string) => void),
minQueryLength?: number,
removeComponent?: React.Component<any, any>,
autocomplete?: boolean | 1,
readOnly?: boolean,
name?: string,
id?: string,
maxLength?: number,
inline?: boolean,
allowUnique?: boolean,
allowDragDrop?: boolean,
classNames?: {
tags?: string,
tagInput?: string,
tagInputField?: string,
selected?: string,
tag?: string,
remove?: string,
suggestions?: string,
activeSuggestion?: string
}
} 
	declare export class WithContext mixins React.Component<ReactTagsProps> {}
	declare export class WithOutContext mixins React.Component<ReactTagsProps> {}
	declare export default typeof WithContext

    }
