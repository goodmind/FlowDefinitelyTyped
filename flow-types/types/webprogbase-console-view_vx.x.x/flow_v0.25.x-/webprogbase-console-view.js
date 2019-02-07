declare module "webprogbase-console-view" {
  declare export interface BasicObject<T> {
    [key: string]: T;
  }
  declare export interface FormFieldDescriptor {
    description: string;
    default?: string;
    auto?: string;
  }
  declare export interface StateLinkDescriptor {
    description: string;
    data: BasicObject<any>;
  }
  declare export type FormFields = BasicObject<string | FormFieldDescriptor>;
  declare export type StateLinks = BasicObject<string | StateLinkDescriptor>;
  declare export class InputForm {
    constructor(nextState: string, fieldsObject: FormFields): this;
  }
  declare export class Request {
    state: string;
    data: BasicObject<any> | null;
    constructor(): this;
  }
  declare export class Response {
    send(text: string, statesOrForm?: StateLinks | InputForm): void;
    redirect(toState: string, data?: BasicObject<any>): void;
    constructor(): this;
  }

  /**
   * *********************************************************************************
   */
  declare export type ServerAppHandler = (req: Request, res: Response) => void;
  declare export class ServerApp {
    constructor(): this;

    /**
     * Register a request handler function for the state
     * @param stateName name of the state
     * @param handler state request handler function
     */
    use(stateName: string, handler: ServerAppHandler): void;

    /**
     * Start listening for new clients' connections
     * @param port port number where server will listen for new connections
     */
    listen(port: number): void;
  }

  /**
   * *************************************************************************************
   */
  declare export class ConsoleBrowser {
    constructor(): this;
    open(serverPort: number): void;
    sendRequest(req: Request): void;
  }
}
