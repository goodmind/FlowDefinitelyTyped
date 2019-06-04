declare module "node-insights" {
  declare interface Config {
    insertKey: string;
    queryKey: string;
    accountId: string;
    timerInterval?: number;
    maxPending?: number;
    defaultEventType?: string;
    enabled?: boolean;
    gzip?: boolean;
  }
  declare type CallbackFunc = (
    err: Error | null | void,
    responseBody: string
  ) => void;
  declare class Insights {
    static collectorHost: string;
    static collectorBaseURL: string;
    static queryBaseURL: string;
    enabled: boolean;
    queryKey: string;
    insertKey: string;

    /**
     * Insights
     */
    constructor(config: Config): this;

    /**
     * Add insights data to the queue.
     * It is sent when the queue reaches a max size or a period of time has elapsed
     */
    add(data: { [key: string]: any }, eventType?: string): void;

    /**
     * Build a nrql query string
     * @example nrql = insights.nrql({
     * select: 'uniqueCount(session)',
     * from: 'PageView',
     * since: '1 week ago',
     * until: '1 day ago',
     * timeseries: '1 hour'
     * });
     * insights.query(nrql);
     */
    nrql(params: { [key: string]: any }): string;

    /**
     * nrql where clause builder
     */
    where(clause: string | string[] | { [key: string]: any }): string;

    /**
     * Execute a nrql query
     */
    query(query: string, callback: CallbackFunc): void;

    /**
     * Start the timer that will send insights after some interval of time
     * this is called implicitly when data is added via the add method
     */
    start(): void;

    /**
     * Stop the timer that will send insights after some interval of time
     * this is called implicitly when the amount of data exceeds maxPending and the queue is sent
     */
    stop(): void;

    /**
     * Stop the timer after flushing.
     */
    finish(): void;

    /**
     * Send accumulated insights data to new relic (if enabled)
     */
    send(done?: CallbackFunc): void;
  }
  declare export default typeof Insights;
}
