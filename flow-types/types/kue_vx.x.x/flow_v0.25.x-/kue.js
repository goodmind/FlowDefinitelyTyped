declare module "kue" {
  declare export class Queue mixins events.EventEmitter {
    name: string;
    id: string;
    promoter: any;
    workers: Worker[];
    shuttingDown: boolean;
    client: redisClientFactory.RedisClient;
    testMode: TestMode;
    static singleton: Queue;
    constructor(options: Object): this;
    create(type: string, data: Object): Job;
    createJob(type: string, data: Object): Job;
    promote(ms?: number): void;
    setupTimer(): void;
    checkJobPromotion(ms: number): void;
    checkActiveJobTtl(ttlOptions: Object): void;
    watchStuckJobs(ms: number): void;
    setting(name: string, fn: Function): Queue;
    process(
      type: string,
      n?: number | ProcessCallback,
      fn?: ProcessCallback
    ): void;
    shutdown(timeout: number, fn: Function): Queue;
    shutdown(timeout: number, type: string, fn: Function): Queue;
    types(fn: Function): Queue;
    state(string: string, fn: Function): Queue;
    workTime(fn: Function): Queue;
    cardByType(type: string, state: string, fn: Function): Queue;
    card(state: string, fn: Function): Queue;
    complete(fn: Function): Queue;
    failed(fn: Function): Queue;
    inactive(fn: Function): Queue;
    active(fn: Function): Queue;
    delayed(fn: Function): Queue;
    completeCount(type: string, fn: Function): Queue;
    failedCount(type: string, fn: Function): Queue;
    inactiveCount(type: string, fn: Function): Queue;
    activeCount(type: string, fn: Function): Queue;
    delayedCount(type: string, fn: Function): Queue;
  }
  declare interface Priorities {
    low: number;
    normal: number;
    medium: number;
    high: number;
    critical: number;
  }
  declare export type DoneCallback = (err?: any, result?: any) => void;
  declare export type JobCallback = (err?: any, job?: Job) => void;
  declare export type ProcessCallback = (job: Job, cb: DoneCallback) => void;
  declare export class Job mixins events.EventEmitter {
    id: number;
    type: string;
    data: any;
    result: any;
    created_at: string | number;
    updated_at: string | number;
    promote_at: string | number;
    failed_at: string | number;
    started_at: string | number;
    client: redisClientFactory.RedisClient;
    workerId: string;
    static priorities: Priorities;
    static disableSearch: boolean;
    static jobEvents: boolean;
    static get(id: number, type: string | JobCallback, fn?: JobCallback): void;
    static remove(id: number, fn?: Function): void;
    static removeBadJob(id: number): void;
    static log(id: number, fn: Function): void;
    static range(from: number, to: number, order: string, fn: Function): void;
    static rangeByState(
      state: string,
      from: number,
      to: number,
      order: string,
      fn: Function
    ): void;
    static rangeByType(
      type: string,
      state: string,
      from: number,
      to: number,
      order: string,
      fn: Function
    ): void;
    constructor(type: string, data?: any): this;
    toJSON(): Object;
    log(str: string): Job;
    set(key: string, val: string, fn?: Function): Job;
    get(key: string, fn?: Function): Job;
    get(key: string, jobType: string, fn?: Function): Job;
    progress(complete: number, total: number, data?: any): Job;
    delay(ms: number | Date): Job;
    removeOnComplete(param: any): Job;
    backoff(param: any): Job;
    ttl(param: any): Job;
    priority(level: string | number): Job;
    priority(): number | string;
    attempt(fn: Function): Job;
    reattempt(attempt: number, fn?: Function): void;
    attempts(n: number): Job;
    searchKeys(keys: string[] | string): Job;
    remove(fn?: Function): Job;
    state(state: string, fn?: Function): Job;
    error(err: Error): Job;
    complete(fn?: Function): Job;
    failed(fn?: Function): Job;
    inactive(fn?: Function): Job;
    active(fn?: Function): Job;
    delayed(fn?: Function): Job;
    save(fn?: Function): Job;
    update(fn?: Function): Job;
    subscribe(fn?: Function): Job;
    events(events: boolean): Job;
  }
  declare class Worker mixins events.EventEmitter {
    queue: Queue;
    type: string;
    client: redisClientFactory.RedisClient;
    job: Job;
    constructor(queue: Queue, type: string): this;
    start(fn: Function): Worker;
    error(err: Error, job: Job): Worker;
    failed(job: Job, theErr: Object, fn?: Function): Worker;
    process(job: Job, fn: Function): Worker;
    idle(): Worker;
    shutdown(timeout: number, fn: Function): void;
    emitJobEvent(event: Object, job: Job, arg1: any, arg2: any): void;
    resume(): boolean;
  }
  declare interface Redis {
    configureFactory(options: Object, queue: Queue): void;
    createClient(): redisClientFactory.RedisClient;
    createClientFactory(options: Object): redisClientFactory.RedisClient;
    client(): redisClientFactory.RedisClient;
    pubsubClient(): redisClientFactory.RedisClient;
    reset(): void;
  }
  declare interface TestMode {
    jobs: Job[];
    enter(process?: Boolean): void;
    exit(): void;
    clear(): void;
  }
  declare export var app: express.Application;
  declare export var workers: Worker[];
  declare export function createQueue(options?: Object): Queue;
}
