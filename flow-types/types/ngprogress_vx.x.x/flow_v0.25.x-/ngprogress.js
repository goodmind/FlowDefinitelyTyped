declare module "ngprogress" {
  declare export interface NgProgress$INgProgress {
    start(): void;
    height(height: string): void;
    color(color: string): void;
    status(): number;
    stop(): void;
    set(value: number): void;
    reset(): void;
    complete(): void;
  }

  declare export interface NgProgress$INgProgressFactory {
    createInstance(): NgProgress$INgProgress;
  }
}
