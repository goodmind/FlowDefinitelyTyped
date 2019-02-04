declare module 'react-intl-redux' {
        import type {
          Action,AnyAction
        } from 'redux';

	import type {
          ReduxProvider
        } from 'react-redux';

	import type {
          ReactIntlProvider
        } from 'react-intl';

	declare interface IntlState {
locale: string,
messages: any
} 
	declare type IntlAction = {
payload?: IntlState
} & Action

	declare export function intlReducer(state: IntlState, action: IntlAction): IntlState

	declare export function updateIntl(opts: IntlState): IntlAction

	declare export class IntlProvider mixins ReactIntlProvider {}
	declare export class Provider<A: Action> mixins ReduxProvider<A> {}
    }
