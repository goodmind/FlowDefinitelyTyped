declare module "artillery" {
  import typeof * as request from "request";

  import typeof * as events from "events";

  declare export interface ScenarioContext {
    vars: {
      [key: string]: any
    };
  }
  declare export type Next = (err?: Error) => void;
  declare export type ResponseRequest = request.ResponseRequest;
  declare export type RequestResponse = request.RequestResponse;
  declare export type EventEmitter = events.EventEmitter;
}
