declare module "redis-errors" {
  declare export class RedisError mixins Error {}
  declare export class ParserError mixins RedisError {
    buffer: string;
    offset: number;
    constructor(message: string, buffer: string, offset: number): this;
  }
  declare export class ReplyError mixins RedisError {
    command: string;
    args: any[];
    code: string;
    constructor(message: string): this;
  }
  declare export class AbortError mixins RedisError {
    command: string;
    args: any[];
  }
  declare export class InterruptError mixins RedisError {
    command: string;
    args: any[];
    origin: Error;
  }
}
