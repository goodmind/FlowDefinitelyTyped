declare module 'react-resolver' {
        import type {
          ComponentType,StatelessComponent,Factory
        } from 'react';

	declare export interface Resolver {
resolve<P>(
factory: Factory<P>): Promise<{
data: any,
Resolved: StatelessComponent<P>
}>,
render(factory: Factory<any>, root: Node | null): void
} 
	declare export var Resolver: Resolver;
	declare export type ResolveFn<Props, V> = (props: Props) => Promise<V>;
	
/**
 * Use this for gaining access to a context as a prop without the boilerplate of setting `contextTypes`.
 */
declare export function context<K: string>(
prop: K): <OwnProps>(
component: ComponentType<OwnProps>) => StatelessComponent<OwnProps & Record<K, any>>

	
/**
 * Use `@client(LoaderComponent)` (or `client(LoaderComponent)(YourComponent)`)
 * for when you want to skip server-side rendering of part of your view and
 * perform it only on the client.
 */
declare export function client(
loadingComponent: ComponentType<any>): <OwnProps>(component: ComponentType<OwnProps>) => StatelessComponent<OwnProps>

	declare export function resolve<OwnProps, K: string, V, MoreProps= {
[x: string]: any
}>(
prop: K,
resolveFn: ResolveFn<OwnProps & MoreProps, V>): (
component: ComponentType<OwnProps & $ObjMapi<{[k: K]: any}, <C>(C) => V>>) => StatelessComponent<OwnProps & MoreProps>

	declare export function resolve<OwnProps, ResolvableProps= {
[x: string]: any
}, MoreProps= {
[x: string]: any
}>(
resolversMap: $ObjMapi<ResolvableProps, <K>(K) => ResolveFn<OwnProps & MoreProps, $ElementType<ResolvableProps, K>>>): (
component: ComponentType<OwnProps & $ObjMapi<ResolvableProps, <K>(K) => $ElementType<ResolvableProps, K>>>) => StatelessComponent<OwnProps & MoreProps>

    }
