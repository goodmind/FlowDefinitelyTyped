declare module 'react-geosuggest' {
        import type {
          Component,InputHTMLAttributes
        } from 'react';

	declare export default class Geosuggest mixins Component<GeosuggestProps> {
focus(): void;
blur(): void;
update(value: string): void;
clear(): void;
selectSuggest(value?: Suggest): void
}
	declare export type Omit<T, K: $Keys<T>> = Pick<T, $ElementType<($ObjMapi<T, <P>(P) => P> & $ObjMapi<{[k: K]: any}, <P>(P) => empty> & {
[x: string]: empty,
[x: number]: empty
}), $Keys<T>>>;
	declare export type GeosuggestProps = {
placeholder?: string,
initialValue?: string,
className?: string,
style?: Styles,
inputClassName?: string,
disabled?: boolean,
location?: google.maps.LatLng,
radius?: number,
bounds?: google.maps.LatLngBounds,
country?: string | string[],
types?: QueryType[],
fixtures?: Fixture[],
maxFixtures?: number,
googleMaps?: typeof undefined,
ignoreTab?: boolean,
queryDelay?: number,
minLength?: number,
highlightMatch?: boolean,
onFocus(value: any): void,
onBlur(value: any): void,
onChange(value: any): void,
onKeyDown(event: any): void,
onKeyPress(event: any): void,
onSuggestSelect(suggest: Suggest): void,
onUpdateSuggests(suggests: any, activeSuggest: any): void,
onActivateSuggest(suggest: Suggest): void,
onSuggestNoResults(userInput: string): void,
getSuggestLabel(googleSuggest: google.maps.places.AutocompletePrediction): string,
renderSuggestItem(googleSuggest: google.maps.places.AutocompletePrediction): any,
skipSuggest(googleSuggest: google.maps.places.AutocompletePrediction): boolean,
autoActivateFirstSuggest?: boolean,
label?: string,
suggestsClassName?: string,
suggestsHiddenClassName?: string,
suggestItemClassName?: string,
suggestItemActiveClassName?: string,
autoComplete?: string
} & Omit<InputHTMLAttributes<HTMLInputElement>, "style">

	declare export interface Styles {
input?: Record<string, any>,
suggestItem?: Record<string, any>,
suggests?: Record<string, any>
} 
	declare export type QueryType = "address"
| "establishment"
| "geocode"
| "(cities)"
| "(regions)";
	declare export interface Fixture {
className?: string,
label: string,
location?: google.maps.LatLng
} 
	declare export interface Suggest {
gmaps?: google.maps.GeocoderResult,
label: string,
location: {
lat: string,
lng: string
},
placeId: string
} 
    }
