declare module 'actions-on-google' {
        import typeof * as Transactions from './transactions';

	import typeof * as Responses from './response-builder';

	declare export {
          Assistant
        }from './assistant-app';

	declare export {
          ActionsSdkAssistant
        }from './actions-sdk-app';

	declare export {
          ApiAiApp
        }from './dialogflow-app';

	declare export {
          Transactions
        }

	declare export {
          Responses
        }

    }
