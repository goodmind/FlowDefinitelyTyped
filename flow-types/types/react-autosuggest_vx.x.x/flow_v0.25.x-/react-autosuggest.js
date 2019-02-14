declare module "react-autosuggest" {
  import typeof * as React from "react";

  declare class Autosuggest<T = any>
    mixins React.Component<Autosuggest$AutosuggestProps<T>> {}
  declare export default typeof Autosuggest;

  /**
   * Utilies types based on:
   * https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
   * @internal
   */
  declare type Autosuggest$Omit<T, K: $Keys<T>> = Pick<
    T,
    $ElementType<
      $ObjMapi<T, <P>(P) => P> &
        $ObjMapi<{ [k: K]: any }, <P>(P) => empty> & {
          [x: string]: empty,
          [x: number]: empty
        },
      $Keys<T>
    >
  >;

  declare interface Autosuggest$SuggestionsFetchRequestedParams {
    value: string;
    reason:
      | "input-changed"
      | "input-focused"
      | "escape-pressed"
      | "suggestions-revealed"
      | "suggestion-selected";
  }

  declare interface Autosuggest$RenderSuggestionParams {
    query: string;
    isHighlighted: boolean;
  }

  declare interface Autosuggest$SuggestionHighlightedParams {
    suggestion: any;
  }

  declare interface Autosuggest$ChangeEvent {
    newValue: string;
    method: "down" | "up" | "escape" | "enter" | "click" | "type";
  }

  declare interface Autosuggest$BlurEvent<TSuggestion> {
    highlightedSuggestion: TSuggestion;
  }

  declare type Autosuggest$InputProps<TSuggestion> = {
    onChange(
      event: React.FormEvent<any>,
      params: Autosuggest$ChangeEvent
    ): void,
    onBlur?: (
      event: React.FormEvent<any>,
      params?: Autosuggest$BlurEvent<TSuggestion>
    ) => void,
    value: string,
    [key: string]: any
  } & Omit<React.InputHTMLAttributes<any>, "onChange" | "onBlur">;

  declare interface Autosuggest$SuggestionSelectedEventData<TSuggestion> {
    suggestion: TSuggestion;
    suggestionValue: string;
    suggestionIndex: number;
    sectionIndex: number | null;
    method: "click" | "enter";
  }

  declare type Autosuggest$ThemeKey =
    | "container"
    | "containerOpen"
    | "input"
    | "inputOpen"
    | "inputFocused"
    | "suggestionsContainer"
    | "suggestionsContainerOpen"
    | "suggestionsList"
    | "suggestion"
    | "suggestionFirst"
    | "suggestionHighlighted"
    | "sectionContainer"
    | "sectionContainerFirst"
    | "sectionTitle";

  declare type Autosuggest$Theme =
    | Record<string, string | React.CSSProperties>
    | $Shape<Record<Autosuggest$ThemeKey, string | React.CSSProperties>>;

  declare interface Autosuggest$RenderSuggestionsContainerParams {
    containerProps: {
      id: string,
      key: string,
      ref: any,
      style: any
    };
    children: React.ReactNode;
    query: string;
  }

  declare type Autosuggest$GetSectionSuggestions<TSuggestion> = (
    section: any
  ) => TSuggestion[];

  declare type Autosuggest$GetSuggestionValue<TSuggestion> = (
    suggestion: TSuggestion
  ) => string;

  declare type Autosuggest$OnSuggestionHighlighted = (
    params: Autosuggest$SuggestionHighlightedParams
  ) => void;

  declare type Autosuggest$SuggestionsFetchRequested = (
    request: Autosuggest$SuggestionsFetchRequestedParams
  ) => void;

  declare type Autosuggest$OnSuggestionsClearRequested = () => void;

  declare type Autosuggest$OnSuggestionSelected<TSuggestion> = (
    event: React.FormEvent<any>,
    data: Autosuggest$SuggestionSelectedEventData<TSuggestion>
  ) => void;

  declare type Autosuggest$RenderInputComponent<TSuggestion> = (
    inputProps: Autosuggest$InputProps<TSuggestion>
  ) => React.ReactNode;

  declare type Autosuggest$RenderSuggestionsContainer = (
    params: Autosuggest$RenderSuggestionsContainerParams
  ) => React.ReactNode;

  declare type Autosuggest$RenderSectionTitle = (
    section: any
  ) => React.ReactNode;

  declare type Autosuggest$RenderSuggestion<TSuggestion> = (
    suggestion: TSuggestion,
    params: Autosuggest$RenderSuggestionParams
  ) => React.ReactNode;

  declare type Autosuggest$ShouldRenderSuggestions = (value: string) => boolean;

  declare interface Autosuggest$AutosuggestProps<TSuggestion> {
    /**
     * Set it to true if you'd like to render suggestions even when the input is not focused.
     */
    alwaysRenderSuggestions?: boolean;

    /**
     * Set it to false if you don't want Autosuggest to keep the input focused when suggestions are clicked/tapped.
     */
    focusInputOnSuggestionClick?: boolean;

    /**
     * Implement it to teach Autosuggest where to find the suggestions for every section.
     */
    getSectionSuggestions?: Autosuggest$GetSectionSuggestions<TSuggestion>;

    /**
     * Implement it to teach Autosuggest what should be the input value when suggestion is clicked.
     */
    getSuggestionValue: Autosuggest$GetSuggestionValue<TSuggestion>;

    /**
     * Set it to true if you'd like Autosuggest to automatically highlight the first suggestion.
     */
    highlightFirstSuggestion?: boolean;

    /**
     * Use it only if you have multiple Autosuggest components on a page.
     */
    id?: string;

    /**
     * Pass through arbitrary props to the input. It must contain at least value and onChange.
     */
    inputProps: Autosuggest$InputProps<TSuggestion>;

    /**
     * Set it to true if you'd like to display suggestions in multiple sections (with optional titles).
     */
    multiSection?: boolean;

    /**
     * Will be called every time the highlighted suggestion changes.
     */
    onSuggestionHighlighted?: Autosuggest$OnSuggestionHighlighted;

    /**
     * Will be called every time you need to recalculate suggestions.
     */
    onSuggestionsFetchRequested: Autosuggest$SuggestionsFetchRequested;

    /**
     * Will be called every time you need to set suggestions to [].
     */
    onSuggestionsClearRequested?: Autosuggest$OnSuggestionsClearRequested;

    /**
     * Will be called every time suggestion is selected via mouse or keyboard.
     */
    onSuggestionSelected?: Autosuggest$OnSuggestionSelected<TSuggestion>;

    /**
     * Use it only if you need to customize the rendering of the input.
     */
    renderInputComponent?: Autosuggest$RenderInputComponent<TSuggestion>;

    /**
     * Use it if you want to customize things inside the suggestions container beyond rendering the suggestions themselves.
     */
    renderSuggestionsContainer?: Autosuggest$RenderSuggestionsContainer;

    /**
     * Use your imagination to define how section titles are rendered.
     */
    renderSectionTitle?: Autosuggest$RenderSectionTitle;

    /**
     * Use your imagination to define how suggestions are rendered.
     */
    renderSuggestion: Autosuggest$RenderSuggestion<TSuggestion>;

    /**
     * When the input is focused, Autosuggest will consult this function when to render suggestions.
     * Use it, for example, if you want to display suggestions when input value is at least 2 characters long.
     */
    shouldRenderSuggestions?: Autosuggest$ShouldRenderSuggestions;

    /**
     * These are the suggestions that will be displayed. Items can take an arbitrary shape.
     */
    suggestions: TSuggestion[];

    /**
     * Use your imagination to style the Autosuggest.
     */
    theme?: Autosuggest$Theme;
  }
}
