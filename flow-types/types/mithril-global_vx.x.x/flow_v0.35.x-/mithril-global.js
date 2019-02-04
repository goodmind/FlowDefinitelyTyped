declare module 'mithril-global' {
        import typeof * as mithril from 'mithril';

	import typeof * as stream from 'mithril/stream';

	declare export type MithrilGlobal$Lifecycle<A, S> = mithril.MithrilGlobal$Lifecycle<A, S>;

declare export type MithrilGlobal$Hyperscript = mithril.MithrilGlobal$Hyperscript;

declare export type MithrilGlobal$RouteResolver<S, P> = mithril.MithrilGlobal$RouteResolver<S, P>;

declare export type MithrilGlobal$RouteDefs = mithril.MithrilGlobal$RouteDefs;

declare export type MithrilGlobal$RouteOptions = mithril.MithrilGlobal$RouteOptions;

declare export type MithrilGlobal$Route = mithril.MithrilGlobal$Route;

declare export type MithrilGlobal$RequestOptions<T> = mithril.MithrilGlobal$RequestOptions<T>;

declare export type MithrilGlobal$JsonpOptions = mithril.MithrilGlobal$JsonpOptions;

declare export type MithrilGlobal$Child = mithril.MithrilGlobal$Child;

declare export type MithrilGlobal$ChildArray = mithril.MithrilGlobal$ChildArray;

declare export type MithrilGlobal$Children = mithril.MithrilGlobal$Children;

declare export type MithrilGlobal$ChildArrayOrPrimitive = mithril.MithrilGlobal$ChildArrayOrPrimitive;

declare export type MithrilGlobal$Vnode<A, S> = mithril.MithrilGlobal$Vnode<A, S>;

declare export type MithrilGlobal$VnodeDOM<A, S> = mithril.MithrilGlobal$VnodeDOM<A, S>;

declare export type MithrilGlobal$CVnode<A> = mithril.MithrilGlobal$CVnode<A>;

declare export type MithrilGlobal$CVnodeDOM<A> = mithril.MithrilGlobal$CVnodeDOM<A>;

declare export type MithrilGlobal$Component<A, S> = mithril.MithrilGlobal$Component<A, S>;

declare export type MithrilGlobal$Comp<A, S> = mithril.MithrilGlobal$Comp<A, S>;

declare export type MithrilGlobal$ClassComponent<A> = mithril.MithrilGlobal$ClassComponent<A>;

declare export type MithrilGlobal$FactoryComponent<A> = mithril.MithrilGlobal$FactoryComponent<A>;

declare export type MithrilGlobal$ComponentTypes<A, S> = mithril.MithrilGlobal$ComponentTypes<A, S>;

declare export type MithrilGlobal$Attributes = mithril.MithrilGlobal$Attributes;

declare export type MithrilGlobal$Stream<T> = stream.MithrilGlobal$Stream<T>;

declare export type MithrilGlobal$Static = mithril.MithrilGlobal$Static & {
stream: stream.MithrilGlobal$Static
};
	declare var MithrilGlobal: MithrilGlobal$MithrilGlobal$Static;
	declare module.exports: typeof MithrilGlobal

    }
