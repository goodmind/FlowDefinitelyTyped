declare module 'route-parser' {
        declare class Route  {

/**
 * Represents a route
 * @example var route = new Route('/:foo/:bar');
 * @example var route = new Route('/:foo/:bar');
 */
constructor(spec: string): this;

/**
 * Match a path against this route, returning the matched parameters if
 * it matches, false if not.
 * @example var route = new Route('/this/is/my/route')
route.match('/this/is/my/route') // -> {}
 * @example var route = new Route('/:one/:two')
route.match('/foo/bar/') // -> {one: 'foo', two: 'bar'}
 */
match(pathname: string): {
[i: string]: string
} | false;

/**
 * Reverse a route specification to a path, returning false if it can't be
 * fulfilled
 * @example var route = new Route('/:one/:two')
route.reverse({one: 'foo', two: 'bar'}) -> '/foo/bar'
 */
reverse(params: {
[i: string]: any
}): string | false
}
	
	declare module.exports: typeof Route

    }
