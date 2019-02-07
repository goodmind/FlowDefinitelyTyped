declare module "pid-from-port" {
  declare module.exports: typeof pidFromPort;

  /**
   * Get PID from a port
   * @param port Port to lookup.
   */
  declare function pidFromPort(port: number): Promise<number>;

  declare var npm$namespace$pidFromPort: {
    all: typeof pidFromPort$all,
    list: typeof pidFromPort$list
  };

  /**
   * Get PIDs for a list of ports.
   * @param ports Ports to lookup.
   * @returns A `Promise<Map>` with the port as key and the PID as value.
   */
  declare function pidFromPort$all(
    ports: number[]
  ): Promise<Map<number, number>>;

  /**
   * Get all PIDs from ports.
   * @returns A `Promise<Map>` with the port as key and the PID as value.
   */
  declare function pidFromPort$list(): Promise<Map<number, number>>;
}
