declare module "promisify-supertest" {
  import typeof * as superagent from "superagent";

  import typeof * as express from "express";

  declare type CallbackHandler = (
    err: any,
    res: supertest$supertest$Response
  ) => void;
  declare function supertest(
    app: express.Express
  ): supertest$supertest$SuperTest;

  declare var npm$namespace$supertest: {
    agent: typeof supertest$agent
  };
  declare function supertest$agent(app?: any): supertest$supertest$SuperTest;

  declare type supertest$SuperTest = {} & superagent.SuperAgent<supertest$Test>;

  declare type supertest$Test = {
    url: string,
    serverAddress(app: any, path: string): string,
    expect(status: number, callback?: CallbackHandler): this,
    expect(status: number, body: string, callback?: CallbackHandler): this,
    expect(body: string, callback?: CallbackHandler): this,
    expect(body: RegExp, callback?: CallbackHandler): this,
    expect(body: Object, callback?: CallbackHandler): this,
    expect(field: string, val: string, callback?: CallbackHandler): this,
    expect(field: string, val: RegExp, callback?: CallbackHandler): this,
    expect(checker: (res: supertest$Response) => any): this,
    end(callback?: CallbackHandler): this & Promise<supertest$Response>
  } & superagent.SuperAgentRequest;

  declare type supertest$Response = {} & superagent.supertest$Response;

  declare module.exports: typeof supertest;
}
