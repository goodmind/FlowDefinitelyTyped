declare module 'redux-auth-wrapper' {
        import type {
          ComponentClass,StatelessComponent,ComponentType,ReactType
        } from 'react';

	declare export type StateSelector<State, OwnProps, R> = (state: State, props: OwnProps) => R;
	declare export type AuthWrapperDecorator<Props> = (component: ComponentType<Props>) => ComponentClass<Props>;
	declare export interface AuthConfig {
AuthenticatingComponent?: ReactType,
wrapperDisplayName?: string
} 
	declare export type AuthBaseConfig<OwnProps, State> = {
authenticatedSelector: StateSelector<State, OwnProps, boolean>,
authenticatingSelector?: StateSelector<State, OwnProps, boolean>
} & AuthConfig

    }
