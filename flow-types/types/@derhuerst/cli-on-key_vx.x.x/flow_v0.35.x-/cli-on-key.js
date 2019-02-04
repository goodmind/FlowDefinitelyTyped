declare module '@derhuerst/cli-on-key' {
        declare interface listen$Key {
name?: string,
ctrl: boolean,
meta: boolean,
shift: boolean,
sequence: string,
code?: string,
raw: string
} 

declare type listen$Callback = (key: listen$Key) => void;

declare type listen$OffKeyPress = (key: listen$Key) => void;
	declare function listen(
stream: stream.Readable,
callback: listen$listen$Callback): listen$listen$OffKeyPress

	declare module.exports: typeof listen

    }
