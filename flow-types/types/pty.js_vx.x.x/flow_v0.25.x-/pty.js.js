declare module "native" {
  /**
   * Unix-only.
   */
  declare export function fork(
    file: string,
    args: string[],
    env: any,
    cwd: string,
    cols: number,
    rows: number,
    uid?: number,
    gid?: number
  ): {
    fd: number,
    pid: number,
    pty: string
  };

  /**
   * Unix-only.
   */
  declare export function open(
    cols: number,
    rows: number
  ): {
    master: number,
    slave: number,
    pty: string
  };

  /**
   * Unix-only.
   */
  declare export function process(fd: number, tty: string): string;

  /**
   * Windows-only.
   */
  declare export function open(
    dataPipe: string,
    cols: number,
    rows: number,
    debug: boolean
  ): {
    pid: number,
    pty: number,
    fd: number
  };

  /**
   * Windows-only.
   */
  declare export function startProcess(
    pid: number,
    file: string,
    cmdline: string,
    env: string[],
    cwd: string
  ): void;

  /**
   * Windows-only.
   */
  declare export function kill(pid: number): void;

  declare export function resize(fd: number, cols: number, rows: number): void;
}
declare module "pty.js" {
  /**
   * Options that can be used when creating a new pseudo-terminal.
   */
  declare interface TerminalOptions {
    name?: string;
    cols?: number;
    rows?: number;
    cwd?: string;
    env?: any;
    uid?: number;
    gid?: number;
  }
  declare export class Terminal {
    /**
     * Read-only name of the terminal.
     */
    name: string;

    /**
     * Read-only number of columns in the terminal.
     */
    cols: number;

    /**
     * Read-only number of rows in the terminal.
     */
    rows: number;

    /**
     * Read-only identifier of the spawned process associated with the slave end of the
     * pseudo-terminal. This will be null if the terminal was created via [[Terminal.open]].
     */
    pid: number;

    /**
     * Read-only file descriptor of the master end of the pseudo-terminal.
     */
    fd: number;

    /**
     * Read-only name of the slave end of the pseudo-terminal.
     */
    pty: string;

    /**
     * Read-only filename of the executable associated with the slave end of the pseudo-terminal.
     */
    file: string;

    /**
     * Read-only name of the process associated with the slave end of the pseudo-terminal.
     */
    process: string;
    stdout: Terminal;

    /**
     * Note that an exception will be thrown if an attempt is made to access this property.
     */
    stderr: Terminal;
    stdin: Terminal;
    socket: net.Socket;

    /**
     * Creates a new pseudo-terminal, spawns a child process, and associates it with the slave
     * end of the pseudo-terminal.
     */
    constructor(file?: string, args?: string[], opt?: TerminalOptions): this;
    resize(cols?: number, rows?: number): void;

    /**
     * Sends a signal to the spawned process associated with the slave end of the
     * pseudo-terminal (this only works if [[pid]] is not null).
     */
    kill(signal?: string): void;
    redraw(): void;
    write(data: any): boolean;
    end(data: any): void;
    pause(): void;
    resume(): void;
    setEncoding(encoding: string): void;

    /**
     * Closes the master end of the pseudo-terminal, and attempts to kill the spawned process
     * associated with the slave end of the pseudo-terminal (but only if [[pid]] is not null).
     */
    destroy(): void;
    pipe<T: NodeJS.WritableStream>(
      destination: T,
      options?: {
        end?: boolean
      }
    ): T;
    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
    eventNames(): string[];
  }

  /**
   * Creates a new pseudo-terminal, spawns a child process, and associates it with the slave
   * end of the pseudo-terminal.
   */
  declare export function createTerminal(
    file?: string,
    args?: string[],
    opt?: TerminalOptions
  ): Terminal;

  /**
   * Alias for [[createTerminal]].
   */
  declare export function fork(
    file?: string,
    args?: string[],
    opt?: TerminalOptions
  ): Terminal;

  /**
   * Alias for [[createTerminal]].
   */
  declare export function spawn(
    file?: string,
    args?: string[],
    opt?: TerminalOptions
  ): Terminal;

  /**
   * Creates a new pseudo-terminal.
   * This function is not available on Windows, use [[fork]] there instead.
   */
  declare export function open(opt?: {
    cols?: number,
    rows?: number
  }): Terminal;
}
