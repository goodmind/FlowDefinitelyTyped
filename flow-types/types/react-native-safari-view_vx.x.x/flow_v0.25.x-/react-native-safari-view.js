declare module "react-native-safari-view" {
  import type { EmitterSubscription } from "react-native";

  declare export interface SafariViewOptions {
    /**
     * A String containing the url you want to load in the Safari View
     */
    url: string;

    /**
     * A Boolean indicating to use Safari's Reader Mode if available
     */
    readerMode?: boolean;

    /**
     * A String containing a hex or rgba color to use for the browser controls
     */
    tintColor?: string;

    /**
     * A String containing a hex or rgba color to use for the background of the browser controls (only available on iOS 10 and higher)
     */
    barTintColor?: string;

    /**
     * A Boolean indicating to open the Safari View from the bottom
     */
    fromBottom?: boolean;
  }

  declare var npm$namespace$SafariView: {
    show: typeof SafariView$show,
    dismiss: typeof SafariView$dismiss,
    isAvailable: typeof SafariView$isAvailable,
    addEventListener: typeof SafariView$addEventListener,
    removeEventListener: typeof SafariView$removeEventListener
  };

  /**
   * Displays a Safari View with the provided URL
   */
  declare function SafariView$show(
    options: SafariViewOptions
  ): Promise<boolean>;

  /**
   * Dismisses the currently active Safari View
   */
  declare function SafariView$dismiss(): void;

  /**
   * Checks if Safari View is available on the device
   */
  declare function SafariView$isAvailable(): Promise<boolean>;

  declare function SafariView$addEventListener(
    event: string,
    listener: () => void
  ): EmitterSubscription;

  declare function SafariView$removeEventListener(
    event: string,
    listener: () => void
  ): void;

  declare export default typeof SafariView;
}
