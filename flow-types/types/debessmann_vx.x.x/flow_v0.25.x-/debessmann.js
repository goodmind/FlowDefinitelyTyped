declare module "global" {
  declare interface Window {
    dm: DM;
  }
}
declare module "debessmann" {
  declare export class EventId {
    time: Date;
    seq: number;
  }
  declare export class Event {
    _id: EventId;
    timestamp: string;
    id: string;
    payload: any;
    headers: {
      [key: string]: string
    };
    metrics: {
      [key: string]: number
    };
  }
  declare export class DM {
    init(endpoint: string, authkey: string): void;
    send(data: Event): void;
  }
}
