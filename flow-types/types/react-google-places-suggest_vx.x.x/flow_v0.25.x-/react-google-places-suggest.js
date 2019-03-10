declare module "react-google-places-suggest" {
  import type { Component, Node } from "react";

  declare export default typeof ReactGooglePlacesSuggest;

  declare class ReactGooglePlacesSuggest
    mixins Component<ReactGooglePlacesSuggest$Props> {}
  declare type ReactGooglePlacesSuggest$Prediction = google.maps.places.AutocompletePrediction;

  declare type ReactGooglePlacesSuggest$GeocodedPrediction = google.maps.GeocoderResult;

  declare interface ReactGooglePlacesSuggest$Props {
    autocompletionRequest: google.maps.places.AutocompletionRequest;
    children?: Node;
    customRender?: (
      prediction?: ReactGooglePlacesSuggest$Prediction
    ) => React$Node | string;
    customContainerRender?: (
      predictions: $ReadOnlyArray<ReactGooglePlacesSuggest$Prediction>
    ) => React$Node | string;
    googleMaps: typeof google.maps;
    onSelectSuggest?: (
      geocodedPrediction: ReactGooglePlacesSuggest$GeocodedPrediction,
      originalPrediction: ReactGooglePlacesSuggest$Prediction
    ) => any;
    textNoResults?: string | null;
  }
}
