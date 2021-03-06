declare module "jasmine-es6-promise-matchers" {
  declare var npm$namespace$JasminePromiseMatchers: {
    install: typeof JasminePromiseMatchers$install,
    uninstall: typeof JasminePromiseMatchers$uninstall
  };
  declare export function JasminePromiseMatchers$install(): void;

  declare export function JasminePromiseMatchers$uninstall(): void;

  declare interface jasmine$Matchers<T> {
    /**
     * Verifies that a Promise is (or has been) rejected.
     */
    toBeRejected(done?: () => void): boolean;

    /**
     * Verifies that a Promise is (or has been) rejected with the specified parameter.
     */
    toBeRejectedWith(value: any, done?: () => void): boolean;

    /**
     * Verifies that a Promise is (or has been) resolved.
     */
    toBeResolved(done?: () => void): boolean;

    /**
     * Verifies that a Promise is (or has been) resolved with the specified parameter.
     */
    toBeResolvedWith(value: any, done?: () => void): boolean;
  }
}
