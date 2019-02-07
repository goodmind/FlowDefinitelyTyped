declare module "actions-on-google" {
  import typeof * as Transactions from "./transactions";

  import typeof * as Responses from "./response-builder";

  declare export { AssistantApp as Assistant } from "./assistant-app";

  declare export {
    ActionsSdkApp as ActionsSdkAssistant
  } from "./actions-sdk-app";

  declare export { DialogflowApp as ApiAiApp } from "./dialogflow-app";

  declare export { Transactions };

  declare export { Responses };
}
