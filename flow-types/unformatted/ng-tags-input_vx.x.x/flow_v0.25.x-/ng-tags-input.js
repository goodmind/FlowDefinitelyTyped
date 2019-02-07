declare module 'ng-tags-input' {
        import typeof * as angular from 'angular';

	declare export type ITagsInputParams = angular.ngTagsInput.ngTagsInput$TagsInputParams;
	declare export type IAutocompleteParams = angular.ngTagsInput.ngTagsInput$AutocompleteParams;
	declare export type ITagsInputConfigurationProvider = angular.ngTagsInput.ngTagsInput$TagsInputConfigurationProvider;
	declare module 'angular' {
        declare interface ngTagsInput$TagsInputParams {
ngModel?: string,
useStrings?: boolean,
template?: string | boolean,
templateScope?: string | boolean,
displayProperty?: string | boolean,
keyProperty?: string | boolean,
type?: string | boolean,
text?: string | boolean,
tabindex?: number | boolean,
placeholder?: string | boolean,
minLength?: number | boolean,
maxLength?: number | boolean,
minTags?: number | boolean,
maxTags?: number | boolean,
allowLeftoverText?: boolean,
removeTagSymbol?: string | boolean,
addOnEnter?: boolean,
addOnSpace?: boolean,
addOnComma?: boolean,
addOnBlur?: boolean,
addOnPaste?: boolean,
pasteSplitPattern?: string | boolean,
replaceSpacesWithDashes?: boolean,
allowedTagsPattern?: string | boolean,
enableEditingLastTag?: boolean,
addFromAutocompleteOnly?: boolean,
spellcheck?: boolean,
tagClass?: any,
onTagAdding?: any,
onTagAdded?: any,
onInvalidTag?: any,
onTagRemoving?: any,
onTagRemoved?: any,
onTagClicked?: any
} 

declare interface ngTagsInput$AutocompleteParams {
source?: any,
template?: string | boolean,
displayProperty?: string | boolean,
debounceDelay?: number | boolean,
minLength?: number | boolean,
highlightMatchedText?: boolean,
maxResultsToShow?: number | boolean,
loadOnDownArrow?: boolean,
loadOnEmpty?: boolean,
loadOnFocus?: boolean,
selectFirstMatch?: boolean,
matchClass?: any
} 

declare type ngTagsInput$TagsInputConfigurationProvider = {

/**
 * Sets the default configuration option for a directive.
 */
setDefaults(directive: string, defaults: ITagsInputParams | IAutocompleteParams): any,

/**
 * Sets active interpolation for a set of options.
 */
setActiveInterpolation(directive: string, options: ITagsInputParams | IAutocompleteParams): any,

/**
 * Sets the threshold used by the tagsInput directive to re-size the inner input field element based on its contents.
 */
setTextAutosizeThreshold(threshold: number): any
} & IServiceProvider

    }

    }
