declare module "react-places-autocomplete" {
  import typeof * as React from "react";

  declare export type AutocompletePrediction = google.maps.places.AutocompletePrediction;
  declare export interface Suggestion {
    id: string;
    active: boolean;
    index: number;
    description: $ElementType<AutocompletePrediction, "description">;
    placeId: $ElementType<AutocompletePrediction, "place_id">;
    formattedSuggestion: {
      mainText: $ElementType<
        $ElementType<AutocompletePrediction, "structured_formatting">,
        "main_text"
      >,
      secondaryText: $ElementType<
        $ElementType<AutocompletePrediction, "structured_formatting">,
        "secondary_text"
      >
    };
    matchedSubstrings: $ElementType<
      AutocompletePrediction,
      "matched_substrings"
    >;
    terms: $ElementType<AutocompletePrediction, "terms">;
    types: $ElementType<AutocompletePrediction, "types">;
  }
  declare export interface PropTypes {
    onChange?: (value: string) => void;
    value?: string;
    onError?: (status: string, clearSuggestion: () => void) => void;
    onSelect?: (address: string, placeID: string) => void;
    searchOptions?: {
      bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral,
      componentRestrictions?: google.maps.GeocoderComponentRestrictions,
      location?: google.maps.LatLng | google.maps.LatLngLiteral,
      offset?: number | string,
      radius?: number | string,
      types?: string[]
    };
    debounce?: number;
    highlightFirstSuggestion?: boolean;
    shouldFetchSuggestions?: boolean;
    googleCallbackName?: string;
    children: (
      opts: $ReadOnly<{
        loading: boolean,
        suggestions: $ReadOnlyArray<Suggestion>,
        getInputProps: <InputProps: {}>(
          options?: InputProps
        ) => {
          type: "text",
          autoComplete: "off",
          role: "combobox",
          "aria-autocomplete": "list",
          "aria-expanded": boolean,
          "aria-activedescendant": string | null,
          disabled: boolean,
          onKeyDown: React.KeyboardEventHandler,
          onBlur: () => void,
          value: string | void,
          onChange: (ev: {
            target: {
              value: string
            }
          }) => void
        } & InputProps,
        getSuggestionItemProps: <SuggestionProps: {}>(
          suggestion: Suggestion,
          options?: SuggestionProps
        ) => {
          key: number,
          id: string | null,
          role: "option",
          onMouseEnter: () => void,
          onMouseLeave: () => void,
          onMouseDown: React.MouseEventHandler,
          onMouseUp: () => void,
          onTouchStart: () => void,
          onTouchEnd: () => void,
          onClick: (event?: Event) => void
        } & SuggestionProps
      }>
    ) => React.ReactNode;
  }
  declare export function geocodeByAddress(
    address: string
  ): Promise<google.maps.GeocoderResult[]>;

  declare export function geocodeByPlaceId(
    placeId: string
  ): Promise<google.maps.GeocoderResult[]>;

  declare export function getLatLng(
    results: google.maps.GeocoderResult
  ): Promise<google.maps.LatLngLiteral>;

  declare export default class PlacesAutocomplete
    mixins React.Component<PropTypes> {}
}
