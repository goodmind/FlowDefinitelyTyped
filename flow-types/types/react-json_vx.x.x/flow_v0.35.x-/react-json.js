declare module 'react-json' {
        import typeof * as React from 'react';

	declare type OnChangeHandler = (value: any) => void;
	declare interface JsonProperties {
value: any,
onChange?: OnChangeHandler
} 
	declare class Json mixins React.Component<JsonProperties> {}
	declare module.exports: typeof Json

    }
