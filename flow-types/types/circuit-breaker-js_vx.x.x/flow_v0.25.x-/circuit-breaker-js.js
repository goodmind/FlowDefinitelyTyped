declare module "circuit-breaker-js" {
  declare module.exports: typeof CircuitBreaker;

  declare interface CircuitBreaker$Options {
    windowDuration?: number;
    numBuckets?: number;
    timeoutDuration?: number;
    errorThreshold?: number;
    volumeThreshold?: number;
    onCircuitOpen?: (m: CircuitBreaker$Metrics) => void;
    onCircuitClose?: (m: CircuitBreaker$Metrics) => void;
  }

  declare interface CircuitBreaker$Metrics {
    totalCount: number;
    errorCount: number;
    errorPercentage: number;
  }
  declare class CircuitBreaker {
    static OPEN: 0;
    static HALF_OPEN: 1;
    static CLOSED: 2;
    constructor(options?: CircuitBreaker$CircuitBreaker$Options): this;
    run(
      command: (success: () => void, failure: () => void) => void,
      fallback?: () => void
    ): void;
    forceClose(): void;
    forceOpen(): void;
    unforce(): void;
    isOpen(): boolean;
  }
}
