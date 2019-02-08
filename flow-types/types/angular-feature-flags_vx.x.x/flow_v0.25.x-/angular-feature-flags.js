declare module "angular" {
  declare export interface featureflags$FlagData {
    /**
     * Unique key that is used from the markup to resolve whether a flag is active or not.
     */
    key: string;

    /**
     * Boolean value for enabling/disabling the feature
     */
    active: boolean;

    /**
     * A short name of the flag (only visible in the list of flags)
     */
    name: string;

    /**
     * A long description of the flag to further explain the feature being toggled
     * (only visible in the list of flags)
     */
    description: string;
  }

  declare export interface featureflags$FeatureFlagsProvider {
    setInitialFlags(flags: $ReadOnlyArray<featureflags$FlagData>): void;
  }

  declare export interface featureflags$FeatureFlagsService {
    set(
      flagsPromise:
        | ng.IPromise<$ReadOnlyArray<featureflags$FlagData>>
        | ng.IHttpPromise<$ReadOnlyArray<featureflags$FlagData>>
    ): void;
  }
}
declare module "angular-feature-flags" {
  import typeof * as ng from "angular";
}
