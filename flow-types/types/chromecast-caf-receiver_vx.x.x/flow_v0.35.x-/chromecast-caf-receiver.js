declare module 'chromecast-caf-receiver' {
        import typeof * as framework from './cast.framework';

	import type {
          PlayerDataChangedEvent
        } from './cast.framework.ui';

	import type {
          Event
        } from './cast.framework.events';

	declare export {
          framework
        }

	declare module 'global' {
        declare type EventHandler = (event: Event) => void;
	declare type PlayerDataChangedEventHandler = (event: PlayerDataChangedEvent) => void;
	declare type RequestHandler = (request: framework.NetworkRequestInfo) => void;
	declare type BinaryHandler = (data: Uint8Array) => Uint8Array;
    }

    }
