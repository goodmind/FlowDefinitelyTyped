declare module "tedious-connection-pool" {
  /**
   * Extends Tedious Connection with release function
   */
  declare class tcp$PooledConnection mixins tedious.Connection {
    /**
     * If the connection is issued from a connection pool returns the connection to the pool.
     */
    release(): void;
  }

  /**
   * Provides a connection or an error
   * @param err error if any
   * @param connection issued from the pool
   */
  declare type tcp$ConnectionCallback = (
    err: Error,
    connection: tcp$PooledConnection
  ) => void;

  /**
   * Pool Configuration interface
   */
  declare interface tcp$PoolConfig {
    /**
     * Minimum concurrent connections
     */
    min?: number;

    /**
     * Maximum concurrent connections
     */
    max?: number;

    /**
     * Defines if logging is activated
     */
    log?: boolean;

    /**
     * Idle timeout
     */
    idleTimeout?: number;

    /**
     * Retry delay
     */
    retryDelay?: number;

    /**
     * Acquire timeout
     */
    acquireTimeout?: number;
  }

  /**
   * Tedious Connection Pool Class
   */
  declare class tcp mixins events.EventEmitter {
    /**
     * Connection Pool constructor
     * @param poolConfig the pool configuration
     * @param connectionConfig the connection configuration
     */
    constructor(
      poolConfig: tcp$tcp$PoolConfig,
      connectionConfig: tedious.ConnectionConfig
    ): this;

    /**
     * acquires a connection from the pool
     * @param callback invoked when the connection is retrieved and ready
     */
    acquire(callback: tcp$tcp$ConnectionCallback): void;

    /**
     * closes opened connections
     */
    drain(): void;
  }
  declare module.exports: typeof tcp;
}
