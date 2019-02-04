declare module 'react-is' {
        import type {
          LazyExoticComponent,MemoExoticComponent,ReactElement,ReactType
        } from 'react';

	declare export function typeOf(value: any): Symbol | void

	declare export function isValidElementType(value: any): boolean

	declare export function isAsyncMode(value: any): boolean

	declare export function isContextConsumer(value: any): boolean

	declare export function isContextProvider(value: any): boolean

	declare export function isElement(value: any): boolean

	declare export function isForwardRef(value: any): boolean

	declare export function isFragment(value: any): boolean

	declare export function isLazy(value: any): boolean

	declare export function isMemo(value: any): boolean

	declare export function isProfiler(value: any): boolean

	declare export function isPortal(value: any): boolean

	declare export function isStrictMode(value: any): boolean

	declare export function isSuspense(value: any): boolean

	declare export var AsyncMode: Symbol;
	declare export var ContextConsumer: Symbol;
	declare export var ContextProvider: Symbol;
	declare export var Element: Symbol;
	declare export var ForwardRef: Symbol;
	declare export var Fragment: Symbol;
	declare export var Lazy: Symbol;
	declare export var Memo: Symbol;
	declare export var Portal: Symbol;
	declare export var Profiler: Symbol;
	declare export var StrictMode: Symbol;
	declare export var Suspense: Symbol;
    }
