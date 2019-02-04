declare module 'redux-first-router-restore-scroll' {
        import type {
          History,Location
        } from 'history';

	import type {
          LocationState
        } from 'redux-first-router';

	
/**
 * This package provides complete scroll restoration for redux-first-router
 * through the call of a single function. It also insures hash changes work as
 * you would expect (e.g. like when you click #links to different section of a
 * Github readme it automatically scrolls, and allows you to use the browser
 * back/next buttons to move between sections you've visited).
 * @example import restoreScroll from 'redux-first-router-restore-scroll'
connectRoutes(history, routesMap, { restoreScroll: restoreScroll() })
 */
declare export default function restoreScroll(
options?: {

/**
 * @default false
 */
manual?: boolean,

/**
 * Use to implement custom scroll positioning.
 */
shouldUpdateScroll(
prev: LocationState,
locationState: LocationState): boolean | "profile-box" | [number, number],

/**
 * To implement a custom backend storage for scroll state, pass a custom
 * stateStorage object. The object should implement the methods as described
 * by the package `scroll-behavior` as well as a function called setPrevKey
 * that keeps track of the previous key.
 */
stateStorage?: {
setPrevKey(key: string | null): void,
read(location: Location, key: string | null): Location,
save(location: Location, key: string | null, value: any): void
}
}): (history: History) => {[key: string]: any}

    }
