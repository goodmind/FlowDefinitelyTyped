declare module "sinon-express-mock" {
  import type { SinonStub } from "sinon";

  import type { Request, Response } from "express";

  declare interface mockReq$MockReq {
    accepts: SinonStub;
    acceptsCharsets: SinonStub;
    acceptsEncodings: SinonStub;
    acceptsLanguages: SinonStub;
    body: { [key: string]: any };
    flash: SinonStub;
    get: SinonStub;
    is: SinonStub;
    params: { [key: string]: any };
    query: { [key: string]: any };
    session: { [key: string]: any };
  }
  declare interface mockRes$MockRes {
    append: SinonStub;
    attachement: SinonStub;
    clearCookie: SinonStub;
    cookie: SinonStub;
    download: SinonStub;
    end: SinonStub;
    format: { [key: string]: any };
    get: SinonStub;
    headersSent: SinonStub;
    json: SinonStub;
    jsonp: SinonStub;
    links: SinonStub;
    locals: { [key: string]: any };
    location: SinonStub;
    redirect: SinonStub;
    render: SinonStub;
    send: SinonStub;
    sendFile: SinonStub;
    sendStatus: SinonStub;
    set: SinonStub;
    status: SinonStub;
    type: SinonStub;
    vary: SinonStub;
  }
  declare export function mockReq<T: { [key: string]: any }>(
    options?: T
  ): mockReq$mockReq$MockReq & T & Request;

  declare export function mockRes<T: { [key: string]: any }>(
    options?: T
  ): mockRes$mockRes$MockRes & T & Response;
}
