declare module 'react-broadcast' {
        import typeof * as React from 'react';

	declare interface Subscriber$DefaultProps {
quiet: boolean,
compareValues: (prevValue: T, nextValue: T) => boolean
} 

declare type Subscriber$Props<T> = {
channel: string,
children?: ((state: T) => React.ReactNode),
channel: string,
children: React.ReactNode,
value: T
} & $Shape<Subscriber$DefaultProps>

	declare interface Broadcast$DefaultProps {
quiet: boolean,
compareValues: (prevValue: T, nextValue: T) => boolean
} 

declare type Broadcast$Props<T> = {
channel: string,
children?: ((state: T) => React.ReactNode),
channel: string,
children: React.ReactNode,
value: T
} & $Shape<Broadcast$DefaultProps>

	declare export class Broadcast<T> mixins React.Component<Broadcast$Broadcast$Props<T>, any> {}
	declare export class Subscriber<T> mixins React.Component<Subscriber$Broadcast$Props<T>, any> {}
    }
