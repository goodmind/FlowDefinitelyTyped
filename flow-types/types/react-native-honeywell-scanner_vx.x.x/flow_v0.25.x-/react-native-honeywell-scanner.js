declare module "react-native-honeywell-scanner" {
  declare var HoneywellScanner: typeof npm$namespace$HoneywellScanner;

  declare var npm$namespace$HoneywellScanner: {
    on: typeof HoneywellScanner$on,
    off: typeof HoneywellScanner$off,
    startReader: typeof HoneywellScanner$startReader,
    stopReader: typeof HoneywellScanner$stopReader,
    isCompatible: typeof HoneywellScanner$isCompatible
  };
  declare var HoneywellScanner$isCompatible: boolean;

  declare function HoneywellScanner$on(
    eventName: string,
    handler: (event: string | null) => void
  ): void;

  declare function HoneywellScanner$off(
    eventName: string,
    handler: () => void
  ): void;

  declare function HoneywellScanner$startReader(): Promise<boolean>;

  declare function HoneywellScanner$stopReader(): Promise<void>;

  declare export default typeof HoneywellScanner;
}
