declare module 'react-mentions' {
        import typeof * as React from 'react';

	
/**
 * MentionsInput is the main component rendering the textarea control. It takes one or multiple Mention components as its children.
 */
declare export var MentionsInput: MentionsInputClass;
	
/**
 * Each Mention component represents a data source for a specific class of mentionable objects, such as users, template variables, issues, etc.
 */
declare export var Mention: React.SFC<MentionProps>;
	
/**
 * The properties for the @see MentionsInput component.
 */
declare export interface MentionsInputProps {

/**
 * If set to `true` a regular text input element will be rendered
 * instead of a textarea
 */
singleLine?: boolean,

/**
 * If set to `true` spaces will not interrupt matching suggestions
 */
allowSpaceInQuery?: boolean,
markup?: string,
value?: string,
displayTransform?: DisplayTransformFunc,
onChange?: OnChangeHandlerFunc,
placeholder?: string,
onBlur?: (
event: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>,
clickedSuggestion: boolean) => void,
onSelect?: (event: React.UIEvent) => void,
onKeyDown?: (
event: React.KeyboardEvent<HTMLTextAreaElement> | React.KeyboardEvent<HTMLInputElement>) => void,
children: React.ReactElement<MentionProps> | Array<React.ReactElement<MentionProps>>,
className?: string,
style?: any,
regex?: RegExp,
suggestionsPortalHost?: Element,
inputRef?: React.RefObject<HTMLTextAreaElement> | React.RefObject<HTMLInputElement>
} 
	
/**
 * Exposes the type for use with the @see MentionsInputComponent.wrappedInstance which is added by react-mentions' use of substyle (https://github.com/jfschwarz/substyle).
 */
declare export type MentionsInputComponentUnrwapped = {

/**
 * @deprecated since version 2.4.0. Please use
 * @see MentionsInputProps.inputRef
 */
inputRef?: HTMLInputElement | HTMLTextAreaElement
} & React.Component<MentionsInputProps>

	
/**
 * Used with @see React.RefObject<MentionsInputComponent>.
 */
declare export type MentionsInputComponent = {
wrappedInstance?: MentionsInputComponentUnrwapped
} & React.Component<MentionsInputProps>

	
/**
 * Used to reference MentionsInput element in a TSX file.
 */
declare export type MentionsInputClass = {} & React.ComponentClass<MentionsInputProps>

	
/**
 * Props definition for a mention subelement.
 */
declare export interface MentionProps {
type?: string,
onAdd?: (id: string | number, display: string) => void,
renderSuggestion?: (
suggestion: SuggestionDataItem,
search: string,
highlightedDisplay: React.ReactNode,
index: number,
focused: boolean) => React.ReactNode,
className?: string,
trigger: string | RegExp,
isLoading?: boolean,
data: SuggestionDataItem[] | DataFunc,
style?: any,
appendSpaceOnAdd?: boolean
} 
	
/**
 * The shape of a mention.
 */
declare export interface MentionItem {
display: string,
id: string,
type: null
} 
	
/**
 * The shape of suggestion items.
 */
declare export interface SuggestionDataItem {
id: string | number,
display: string
} 
	
/**
 * Defines the function signature for implementing @see MentionsInputProps.displayTransform
 */
declare export type DisplayTransformFunc = (id: string, display: string, type: string) => string;
	
/**
 * Defines the function signature for implementing @see MentionsInputProps.onChange
 */
declare export type OnChangeHandlerFunc = (
event: {
target: {
value: string
}
},
newValue: string,
newPlainTextValue: string,
mentions: MentionItem[]) => void;
	
/**
 * The function to implement asynchronous loading of suggestions in @see MentionProps.data .
 */
declare export type DataFunc = (
query: string,
callback: (data: SuggestionDataItem[]) => void) => void | SuggestionDataItem[];
    }
