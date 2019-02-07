declare module "keen-tracking" {
  declare export default class KeenTracking {
    constructor(options: {
      projectId: string,
      writeKey: string,
      requestType?: string
    }): this;
    recordEvent(
      collectionName: string,
      event: { [key: string]: any }
    ): Promise<{
      created: boolean
    }>;
    recordEvents(events: {
      [collectionName: string]: { [key: string]: any }[]
    }): Promise<{
      [collectionName: string]: boolean[]
    }>;
  }
}
