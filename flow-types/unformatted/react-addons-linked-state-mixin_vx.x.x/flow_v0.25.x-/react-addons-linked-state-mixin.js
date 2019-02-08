declare module 'react' {
        declare interface HTMLAttributes<T> {
checkedLink?: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$ReactLink<boolean>,
valueLink?: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$ReactLink<boolean | string | number>,
checkedLink?: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$ReactLink<boolean>,
valueLink?: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$ReactLink<boolean | string | number>
} 
    }
export interface LinkedStateMixin$ReactLink<T> {
value: T,
requestChange(newValue: T): void
} 

export type LinkedStateMixin$LinkedStateMixin = {
linkState<T>(key: string): LinkedStateMixin$ReactLink<T>
} & Mixin<any, any>
declare module 'react-addons-linked-state-mixin' {
        import type {
          Mixin
        } from 'react';

	declare var LinkedStateMixin$LinkedStateMixin: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$LinkedStateMixin;
	declare type LinkedStateMixin = LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$LinkedStateMixin;
	declare export default typeof LinkedStateMixin$LinkedStateMixin

	declare module 'react' {
        declare interface HTMLAttributes<T> {
checkedLink?: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$ReactLink<boolean>,
valueLink?: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$ReactLink<boolean | string | number>,
checkedLink?: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$ReactLink<boolean>,
valueLink?: LinkedStateMixin$LinkedStateMixin.LinkedStateMixin$ReactLink<boolean | string | number>
} 
    }

    }
