declare module 'react-addons-transition-group' {
        import type {
          ComponentClass,TransitionGroupProps
        } from 'react';

	declare module 'react' {
        declare export type HTMLTransitionGroupProps<T> = {
component?: ReactType,
childFactory?: (child: ReactElement<any>) => ReactElement<any>
} & HTMLAttributes<T>

	declare export type TransitionGroupProps = {} & HTMLTransitionGroupProps<ReactTransitionGroup>

    }

	declare var ReactTransitionGroup: ReactTransitionGroup;
	declare type ReactTransitionGroup = ComponentClass<TransitionGroupProps>;
	declare module.exports: typeof ReactTransitionGroup

    }
