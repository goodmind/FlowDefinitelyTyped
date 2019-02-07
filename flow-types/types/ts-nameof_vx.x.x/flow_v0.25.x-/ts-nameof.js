declare module "ts-nameof" {
  declare function nameof<T>(func?: (obj: T) => void): string;

  declare function nameof(obj: any): string;

  declare var npm$namespace$nameof: {
    full: typeof nameof$full
  };
  declare function nameof$full<T>(periodIndex?: number): string;

  declare function nameof$full<T>(
    func: (obj: T) => void,
    periodIndex?: number
  ): string;

  declare function nameof$full(obj: any, periodIndex?: number): string;
}
