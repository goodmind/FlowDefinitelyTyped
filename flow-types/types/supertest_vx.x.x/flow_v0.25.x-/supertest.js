declare module "supertest" {
  import typeof * as superagent from "superagent";

  declare export default typeof supertest;

  declare function supertest(app: any): supertest$SuperTest<supertest$Test>;

  declare var npm$namespace$supertest: {
    agent: typeof supertest$agent
  };
  declare type supertest$Response = {} & superagent.Response;

  declare type supertest$Request = {} & superagent.SuperAgentRequest;

  declare type supertest$CallbackHandler = (
    err: any,
    res: supertest$Response
  ) => void;

  declare type supertest$Test = {
    app?: any,
    url: string,
    serverAddress(app: any, path: string): string,
    expect(status: number, callback?: supertest$CallbackHandler): this,
    expect(
      status: number,
      body: any,
      callback?: supertest$CallbackHandler
    ): this,
    expect(
      checker: (res: supertest$Response) => any,
      callback?: supertest$CallbackHandler
    ): this,
    expect(body: string, callback?: supertest$CallbackHandler): this,
    expect(body: RegExp, callback?: supertest$CallbackHandler): this,
    expect(body: Object, callback?: supertest$CallbackHandler): this,
    expect(
      field: string,
      val: string,
      callback?: supertest$CallbackHandler
    ): this,
    expect(
      field: string,
      val: RegExp,
      callback?: supertest$CallbackHandler
    ): this,
    end(callback?: supertest$CallbackHandler): this
  } & superagent.SuperAgentRequest;

  declare interface supertest$AgentOptions {
    ca?: any;
  }

  declare function supertest$agent(
    app?: any,
    options?: supertest$AgentOptions
  ): supertest$SuperTest<supertest$Test>;

  declare type supertest$SuperTest<
    T: superagent.SuperAgentRequest
  > = {} & superagent.SuperAgent<T>;
}
