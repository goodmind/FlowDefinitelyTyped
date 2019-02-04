declare module 'rosie' {
        declare interface rosie$IFactoryStatic {
new <T>(): rosie$IFactory<T>,

/**
 * Defines a factory by name and constructor function. Call #attr and #option
 * on the result to define the properties of this factory.
 * @param {"NO PRINT IMPLEMENTED: JSDocNonNullableType"} name
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} constructor
 * @return {Factory}
 */
define<T>(
name: string,
function Object() { [native code] }?: ((...opts: any[]) => any) | ((...opts: any[]) => any)): rosie$IFactory<T>,

/**
 * Locates a factory by name and calls #build on it.
 * @param {string} name
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} attributes
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} options
 * @return {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
build<T>(
name: string,
attributes?: $ObjMapi<T, <k>(k) => $ElementType<T, k>>,
options?: any): T,

/**
 * Builds a collection of objects using the named factory.
 * @param {string} name
 * @param {number} size
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} attributes
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} options
 * @return {Array<"NO PRINT IMPLEMENTED: JSDocAllType">}
 */
buildList(name: string, size: number, attributes?: any, options?: any): any[],

/**
 * Locates a factory by name and calls #attributes on it.
 * @param {string} name
 * @param {{[key: string]: any}} attributes
 * @param {{[key: string]: any}} options
 * @return {{[key: string]: any}}
 */
attributes(name: string, attributes: any, options?: any): any
} 

declare interface rosie$IFactory<T> {

/**
 * Define an attribute on this factory. Attributes can optionally define a
 * default value, either as a value (e.g. a string or number) or as a builder
 * function. For example:
 * 
 *    // no default value for age
 *    Factory.define('Person').attr('age')
 * 
 *    // static default value for age
 *    Factory.define('Person').attr('age', 18)
 * 
 *    // dynamic default value for age
 *    Factory.define('Person').attr('age', function() {
 *       return Math.random() * 100;
 *    })
 * 
 * Attributes with dynamic default values can depend on options or other
 * attributes:
 * 
 *    Factory.define('Person').attr('age', ['name'], function(name) {
 *      return name === 'Brian' ? 30 : 18;
 *    });
 * 
 * By default if the consumer of your factory provides a value for an
 * attribute your builder function will not be called. You can override this
 * behavior by declaring that your attribute depends on itself:
 * 
 *    Factory.define('Person').attr('spouse', ['spouse'], function(spouse) {
 *      return Factory.build('Person', spouse);
 *    });
 * 
 * As in the example above, this can be a useful way to fill in
 * partially-specified child objects.
 * @param {string} attr
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} | any dependenciesOrValue
 * @param any
 * @return {Factory}
 */
attr<K: $Keys<T>>(name: K, defaultValue: $ElementType<T, K>): rosie$IFactory<T>,
attr<K: $Keys<T>>(
name: K,
generatorFunction: () => $ElementType<T, K>): rosie$IFactory<T>,
attr<K: $Keys<T>, D1: $Keys<T>, D2: $Keys<T>, D3: $Keys<T>, D4: $Keys<T>, D5: $Keys<T>>(
name: K,
dependencies: [D1, D2, D3, D4, D5],
generatorFunction: (
value1: $ElementType<T, D1>,
value2: $ElementType<T, D2>,
value3: $ElementType<T, D3>,
value4: $ElementType<T, D4>,
value5: $ElementType<T, D5>) => $ElementType<T, K>): rosie$IFactory<T>,
attr<K: $Keys<T>, D1: $Keys<T>, D2: $Keys<T>, D3: $Keys<T>, D4: $Keys<T>>(
name: K,
dependencies: [D1, D2, D3, D4],
generatorFunction: (
value1: $ElementType<T, D1>,
value2: $ElementType<T, D2>,
value3: $ElementType<T, D3>,
value4: $ElementType<T, D4>) => $ElementType<T, K>): rosie$IFactory<T>,
attr<K: $Keys<T>, D1: $Keys<T>, D2: $Keys<T>, D3: $Keys<T>>(
name: K,
dependencies: [D1, D2, D3],
generatorFunction: (
value1: $ElementType<T, D1>,
value2: $ElementType<T, D2>,
value3: $ElementType<T, D3>) => $ElementType<T, K>): rosie$IFactory<T>,
attr<K: $Keys<T>, D1: $Keys<T>, D2: $Keys<T>>(
name: K,
dependencies: [D1, D2],
generatorFunction: (value1: $ElementType<T, D1>, value2: $ElementType<T, D2>) => $ElementType<T, K>): rosie$IFactory<T>,
attr<K: $Keys<T>, D: $Keys<T>>(
name: K,
dependencies: D[],
generatorFunction: (value: $ElementType<T, D>) => $ElementType<T, K>): rosie$IFactory<T>,
attr<K: $Keys<T>, D: $Keys<T>>(
name: K,
dependencies: D[],
generatorFunction: any): rosie$IFactory<T>,

/**
 * Convenience function for defining a set of attributes on this object as
 * builder functions or static values. If you need to specify dependencies,
 * use #attr instead.
 * 
 * For example:
 * 
 *    Factory.define('Person').attrs({
 *      name: 'Michael',
 *      age: function() { return Math.random() * 100; }
 *    });
 * @param {{[key: string]: any}} attributes
 * @return {Factory}
 */
attrs(
attributes: $ObjMapi<T, <K>(K) => $ElementType<T, K> | ((opts?: any) => $ElementType<T, K>)>): rosie$IFactory<T>,

/**
 * Define an option for this factory. Options are values that may inform
 * dynamic attribute behavior but are not included in objects built by the
 * factory. Like attributes, options may have dependencies. Unlike
 * attributes, options may only depend on other options.
 * 
 *    Factory.define('Person')
 *      .option('includeRelationships', false)
 *      .attr(
 *        'spouse',
 *        ['spouse', 'includeRelationships'],
 *        function(spouse, includeRelationships) {
 *          return includeRelationships ?
 *            Factory.build('Person', spouse) :
 *            null;
 *        });
 * 
 *    Factory.build('Person', null, { includeRelationships: true });
 * 
 * Options may have either static or dynamic default values, just like
 * attributes. Options without default values must have a value specified
 * when building.
 * @param {string} opt
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} | any dependencies or value
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} value
 * @return {Factory}
 */
option(
name: string,
dependenciesOrValue?: any | string[],
value?: any): rosie$IFactory<T>,

/**
 * Defines an attribute that, by default, simply has an auto-incrementing
 * numeric value starting at 1. You can provide your own builder function
 * that accepts the number of the sequence and returns whatever value you'd
 * like it to be.
 * 
 * Sequence values are inherited such that a factory derived from another
 * with a sequence will share the state of that sequence and they will never
 * conflict.
 * 
 *    Factory.define('Person').sequence('id');
 * @param {string} attr
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} | Function dependencies or builder
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} builder
 * @return {Factory}
 */
sequence<K: $Keys<T>>(name: K, builder?: (i: number) => any): rosie$IFactory<T>,
sequence<K: $Keys<T>, D: $Keys<T>>(
name: K,
dependencies: D[],
builder: (i: number, ...args: any[]) => any): rosie$IFactory<T>,

/**
 * Sets a post-processor callback that will receive built objects and the
 * options for the build just before they are returned from the #build
 * function.
 * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} callback
 * @return {Factory}
 */
after(functionArg: (obj: T, opts?: any) => void): rosie$IFactory<T>,

/**
 * Sets the constructor for this factory to be another factory. This can be
 * used to create more specific sub-types of factories.
 * @param {Factory} parentFactory
 * @return {Factory}
 */
inherits(functionArg: (parentFactory: rosie$IFactory<T>) => void): rosie$IFactory<T>,

/**
 * Builds a plain object containing values for each of the declared
 * attributes. The result of this is the same as the result when using #build
 * when there is no constructor registered.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} attributes
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} options
 * @return {{[key: string]: any}}
 */
attributes(attributes?: $ObjMapi<T, <k>(k) => $ElementType<T, k>>, options?: any): T,

/**
 * Generates values for all the registered options using the values given.
 * @private
 * @param {{[key: string]: any}} options
 * @return {{[key: string]: any}}
 */
options(options: any): any,

/**
 * Builds objects by getting values for all attributes and optionally passing
 * the result to a constructor function.
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} attributes
 * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} options
 * @return {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
build(attributes?: $ObjMapi<T, <k>(k) => $ElementType<T, k>>, options?: any): T,
buildList(
size: number,
attributes?: $ObjMapi<T, <k>(k) => $ElementType<T, k>>,
options?: any): T[],

/**
 * Extends a given factory by copying over its attributes, options,
 * callbacks, and constructor. This can be useful when you want to make
 * different types which all share certain attributes.
 * @param {string | Factory} name The factory to extend.
 * @return {Factory}
 */
extend<K: T, T>(name: String | rosie$IFactory<T>): rosie$IFactory<K>
} 
	declare var rosie: {
Factory: rosie$rosie$IFactoryStatic
};
	declare module.exports: typeof rosie

    }
