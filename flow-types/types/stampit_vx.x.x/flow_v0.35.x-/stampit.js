declare module 'stampit' {
        
/**
 * Function used as .init() argument.
 */
declare type Init = (factoryArg: any, ctx?: Context) => any;
	
/**
 * Composer function
 */
declare type Composer = (
{stamp, composables}: {
stamp: stampit$stampit$Stamp,
composables: Composable[]
}) => any;
	
/**
 * The stamp Descriptor
 */
declare interface Descriptor {

/**
 * Create a new stamp based on this descriptor
 */
(...composables: Composable[]): stampit$stampit$Stamp,

/**
 * A hash containing methods (functions) of any future created instance.
 */
stampit$methods?: {},

/**
 * Initialization function(s) which will be called per each newly created
 * instance.
 */
stampit$initializers?: Init[],

/**
 * Properties which will shallowly copied into any future created instance.
 */
stampit$properties?: {},

/**
 * Properties which will be mixed to the new and any other stamp which this stamp will be composed with.
 */
stampit$staticProperties?: {},

/**
 * Deeply merged properties of object instances
 */
stampit$deepProperties?: {},

/**
 * ES5 Property Descriptors applied to object instances
 */
stampit$propertyDescriptors?: {},

/**
 * Deeply merged properties of Stamps
 */
stampit$staticDeepProperties?: {},

/**
 * ES5 Property Descriptors applied to Stamps
 */
stampit$staticPropertyDescriptors?: {},

/**
 * A configuration object to be shallowly assigned to Stamps
 */
stampit$configuration?: {},

/**
 * A configuration object to be deeply merged to Stamps
 */
stampit$deepConfiguration?: {}
} 
	
/**
 * Any composable object (stamp or descriptor)
 */
declare type Composable = stampit$stampit$Stamp | Descriptor;
	
/**
 * The .init() function argument.
 */
declare interface Context {

/**
 * The object which has been just instantiated.
 */
instance: any,

/**
 * The stamp the object has been instantiated with.
 */
stamp: stampit$stampit$Stamp,

/**
 * The arguments list passed to the stamp.
 */
args: any[]
} 
	declare interface Options {

/**
 * A hash containing methods (functions) of any future created instance.
 */
stampit$methods?: {},

/**
 * Initialization function(s) which will be called per each newly created
 * instance.
 */
stampit$init?: Init | Init[],

/**
 * Initialization function(s) which will be called per each newly created
 * instance.
 */
stampit$initializers?: Init | Init[],

/**
 * Properties which will shallowly copied into any future created instance.
 */
stampit$props?: {},

/**
 * Properties which will shallowly copied into any future created instance.
 */
stampit$properties?: {},

/**
 * A hash containing references to the object. This hash will be shallow mixed into any future created instance.
 */
stampit$refs?: {},

/**
 * Properties which will be mixed to the new and any other stamp which this
 * stamp will be composed with.
 */
stampit$staticProperties?: {},

/**
 * Properties which will be mixed to the new and any other stamp which this
 * stamp will be composed with.
 */
stampit$statics?: {},

/**
 * Deeply merged properties of object instances
 */
stampit$deepProperties?: {},

/**
 * Deeply merged properties of object instances
 */
stampit$deepProps?: {},

/**
 * ES5 Property Descriptors applied to object instances
 */
stampit$propertyDescriptors?: {},

/**
 * Deeply merged properties of Stamps
 */
stampit$staticDeepProperties?: {},

/**
 * Deeply merged properties of Stamps
 */
stampit$deepStatics?: {},

/**
 * ES5 Property Descriptors applied to Stamps
 */
stampit$staticPropertyDescriptors?: {},

/**
 * A configuration object to be shallowly assigned to Stamps
 */
stampit$configuration?: {},

/**
 * A configuration object to be shallowly assigned to Stamps
 */
stampit$conf?: {},

/**
 * A configuration object to be deeply merged to Stamps
 */
stampit$deepConfiguration?: {},

/**
 * A configuration object to be deeply merged to Stamps
 */
stampit$deepConf?: {},

/**
 * Callback functions to execute each time a composition occurs
 */
composers?: Composer[]
} 
	
/**
 * Stampit Composable for main stampit() function
 */
declare type StampitComposable = stampit$stampit$Stamp | Descriptor | Options;
	
/**
 * Return a factory (aka Stamp) function that will produce new objects using the
 * prototypes that are passed in or composed.
 * @param options Stampit options object containing refs, methods,
init, props, statics, configurations, and property descriptors.
 */
declare function stampit(...composables: StampitComposable[]): stampit$stampit$Stamp

	
      declare var npm$namespace$stampit: {
        methods: typeof stampit$methods,
refs: typeof stampit$refs,
props: typeof stampit$props,
properties: typeof stampit$properties,
deepProps: typeof stampit$deepProps,
deepProperties: typeof stampit$deepProperties,
init: typeof stampit$init,
initializers: typeof stampit$initializers,
statics: typeof stampit$statics,
staticProperties: typeof stampit$staticProperties,
deepStatics: typeof stampit$deepStatics,
staticDeepProperties: typeof stampit$staticDeepProperties,
conf: typeof stampit$conf,
configuration: typeof stampit$configuration,
deepConf: typeof stampit$deepConf,
deepConfiguration: typeof stampit$deepConfiguration,
propertyDescriptors: typeof stampit$propertyDescriptors,
staticPropertyDescriptors: typeof stampit$staticPropertyDescriptors,
compose: typeof stampit$compose,
        
      }

/**
 * A factory function that will produce new objects using the
 * prototypes that are passed in or composed.
 */
declare interface stampit$Stamp {

/**
 * Invokes the stamp and returns a new object instance.
 * @param state Properties you wish to set on the new objects.
 * @param encloseArgs The remaining arguments are passed to all .enclose() functions.
WARNING Avoid using two different .enclose() functions that expect different arguments.
.enclose() functions that take arguments should not be considered safe to compose
with other .enclose() functions that also take arguments. Taking arguments with
an .enclose() function is an anti-pattern that should be avoided, when possible.
 * @return A new object composed of the Stamps and prototypes provided.
 */
(state?: {}, ...encloseArgs: any[]): any,

/**
 * Just like calling stamp(), stamp.create() invokes the stamp and returns a new instance.
 * @param state Properties you wish to set on the new objects.
 * @param encloseArgs The remaining arguments are passed to all .enclose() functions.
WARNING Avoid using two different .enclose() functions that expect different arguments.
.enclose() functions that take arguments should not be considered safe to compose
with other .enclose() functions that also take arguments. Taking arguments with
an .enclose() function is an anti-pattern that should be avoided, when possible.
 * @return A new object composed of the Stamps and prototypes provided.
 */
create(state?: {}, ...encloseArgs: any[]): any,

/**
 * Stamp metadata/composer function
 */
stampit$compose: Descriptor,

/**
 * Add methods to the methods prototype.  Creates and returns new Stamp. Chainable.
 * @param methods Object(s) containing map of method names and bodies for delegation.
 * @return A new Stamp.
 */
methods(...stampit$methods: Array<{}>): stampit$Stamp,

/**
 * Take n objects and add them to the state prototype. Creates and returns new Stamp. Chainable.
 * @param states Object(s) containing map of property names and values to clone for each new object.
 * @return A new Stamp.
 */
refs(...states: Array<{}>): stampit$Stamp,

/**
 * Take a variable number of objects and shallow assign them to any future
 * created instance of the Stamp. Creates and returns new Stamp. Chainable.
 * @param objects Object(s) to shallow assign for each new object.
 * @return A new Stamp.
 */
props(...objects: Array<{}>): stampit$Stamp,

/**
 * Take a variable number of objects and shallow assign them to any future
 * created instance of the Stamp. Creates and returns new Stamp. Chainable.
 * @param objects Object(s) to shallow assign for each new object.
 * @return A new Stamp.
 */
properties(...objects: Array<{}>): stampit$Stamp,

/**
 * Take a variable number of objects and deeply merge them to any future
 * created instance of the Stamp. Creates and returns a new Stamp.
 * Chainable.
 * @param deepObjects The object(s) to deeply merge for each new object
 * @returns A new Stamp
 */
deepProps(...deepObjects: Array<{}>): stampit$Stamp,

/**
 * Take a variable number of objects and deeply merge them to any future
 * created instance of the Stamp. Creates and returns a new Stamp.
 * Chainable.
 * @param deepObjects The object(s) to deeply merge for each new object
 * @returns A new Stamp
 */
deepProperties(...deepObjects: Array<{}>): stampit$Stamp,

/**
 * @deprecated Use .init() instead.
 */
enclose(...functions: Init[]): stampit$Stamp,

/**
 * @deprecated Use .init() instead.
 */
enclose(...functions: Array<{}>): stampit$Stamp,

/**
 * Take in a variable number of functions and add them to the enclose
 * prototype as initializers.
 * @param functions Initializer functions used to create private data and
privileged methods
 * @returns A new stamp
 */
init(...functions: Init[]): stampit$Stamp,

/**
 * Take in a variable number of functions and add them to the enclose
 * prototype as initializers.
 * @param functions Initializer functions used to create private data and
privileged methods
 * @returns A new stamp
 */
init(functions: Init[]): stampit$Stamp,

/**
 * Take in a variable number of functions and add them to the enclose
 * prototype as initializers.
 * @param functions Initializer functions used to create private data and
privileged methods
 * @returns A new stamp
 */
initializers(...functions: Init[]): stampit$Stamp,

/**
 * Take in a variable number of functions and add them to the enclose
 * prototype as initializers.
 * @param functions Initializer functions used to create private data and
privileged methods
 * @returns A new stamp
 */
initializers(functions: Init[]): stampit$Stamp,

/**
 * Take n objects and add them to a new stamp and any future stamp it composes with.
 * Creates and returns new Stamp. Chainable.
 * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
 * @return A new Stamp.
 */
statics(...stampit$statics: Array<{}>): stampit$Stamp,

/**
 * Take n objects and add them to a new stamp and any future stamp it composes with.
 * Creates and returns new Stamp. Chainable.
 * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
 * @return A new Stamp.
 */
staticProperties(...stampit$statics: Array<{}>): stampit$Stamp,

/**
 * Deeply merge a variable number of objects and add them to a new stamp and
 * any future stamp it composes. Creates and returns a new Stamp. Chainable.
 * @param deepStatics The object(s) containing static properties to be
merged
 * @returns A new stamp
 */
deepStatics(...stampit$deepStatics: Array<{}>): stampit$Stamp,

/**
 * Deeply merge a variable number of objects and add them to a new stamp and
 * any future stamp it composes. Creates and returns a new Stamp. Chainable.
 * @param deepStatics The object(s) containing static properties to be
merged
 * @returns A new stamp
 */
staticDeepProperties(...stampit$deepStatics: Array<{}>): stampit$Stamp,

/**
 * Shallowly assign properties of Stamp arbitrary metadata and add them to
 * a new stamp and any future Stamp it composes. Creates and returns a new
 * Stamp. Chainable.
 * @param confs The object(s) containing metadata properties
 * @returns A new Stamp
 */
conf(...confs: Array<{}>): stampit$Stamp,

/**
 * Shallowly assign properties of Stamp arbitrary metadata and add them to
 * a new stamp and any future Stamp it composes. Creates and returns a new
 * Stamp. Chainable.
 * @param confs The object(s) containing metadata properties
 * @returns A new Stamp
 */
configuration(...confs: Array<{}>): stampit$Stamp,

/**
 * Deeply merge properties of Stamp arbitrary metadata and add them to a new
 * Stamp and any future Stamp it composes. Creates and returns a new Stamp.
 * Chainable.
 * @param deepConfs The object(s) containing metadata properties
 * @returns A new Stamp
 */
deepConf(...deepConfs: Array<{}>): stampit$Stamp,

/**
 * Deeply merge properties of Stamp arbitrary metadata and add them to a new
 * Stamp and any future Stamp it composes. Creates and returns a new Stamp.
 * Chainable.
 * @param deepConfs The object(s) containing metadata properties
 * @returns A new Stamp
 */
deepConfiguration(...deepConfs: Array<{}>): stampit$Stamp,

/**
 * Apply ES5 property descriptors to object instances created by the new
 * Stamp returned by the function and any future Stamp it composes. Creates
 * and returns a new stamp. Chainable.
 * @param descriptors
 * @returns A new Stamp
 */
propertyDescriptors(...descriptors: Array<{}>): stampit$Stamp,

/**
 * Apply ES5 property descriptors to a Stamp and any future Stamp it
 * composes. Creates and returns a new stamp. Chainable.
 * @param descriptors
 * @returns A new Stamp
 */
staticPropertyDescriptors(...descriptors: Array<{}>): stampit$Stamp
} 


/**
 * A shortcut methods for stampit().methods()
 * @param methods Object(s) containing map of method names and bodies for delegation.
 * @return A new Stamp.
 */
declare function stampit$methods(...stampit$methods: Array<{}>): stampit$Stamp



/**
 * A shortcut methods for stampit().refs()
 * @param states Object(s) containing map of property names and values to clone for each new object.
 * @return A new Stamp.
 */
declare function stampit$refs(...states: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().props()
 * @param objects Object(s) to shallow assign for each new object.
 * @return A new Stamp.
 */
declare function stampit$props(...objects: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().properties()
 * @param objects Object(s) to shallow assign for each new object.
 * @return A new Stamp.
 */
declare function stampit$properties(...objects: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().deepProps()
 * @param deepObjects The object(s) to deeply merge for each new object
 * @returns A new Stamp
 */
declare function stampit$deepProps(...deepObjects: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().deepProperties()
 * @param deepObjects The object(s) to deeply merge for each new object
 * @returns A new Stamp
 */
declare function stampit$deepProperties(...deepObjects: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().init()
 * @param functions Initializer functions used to create private data and
privileged methods
 * @returns A new stamp
 */
declare function stampit$init(...functions: Init[]): stampit$Stamp



/**
 * A shortcut method for stampit().init()
 * @param functions Initializer functions used to create private data and
privileged methods
 * @returns A new stamp
 */
declare function stampit$init(functions: Init[]): stampit$Stamp



/**
 * A shortcut method for stampit().initializers()
 * @param functions Initializer functions used to create private data and
privileged methods
 * @returns A new stamp
 */
declare function stampit$initializers(...functions: Init[]): stampit$Stamp



/**
 * A shortcut method for stampit().initializers()
 * @param functions Initializer functions used to create private data and
privileged methods
 * @returns A new stamp
 */
declare function stampit$initializers(functions: Init[]): stampit$Stamp



/**
 * A shortcut method for stampit().statics()
 * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
 * @return A new Stamp.
 */
declare function stampit$statics(...stampit$statics: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().staticProperties()
 * @param statics Object(s) containing map of property names and values to mixin into each new stamp.
 * @return A new Stamp.
 */
declare function stampit$staticProperties(...stampit$statics: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().deepStatics()
 * @param deepStatics The object(s) containing static properties to be
merged
 * @returns A new stamp
 */
declare function stampit$deepStatics(...stampit$deepStatics: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().staticDeepProperties()
 * @param deepStatics The object(s) containing static properties to be
merged
 * @returns A new stamp
 */
declare function stampit$staticDeepProperties(...stampit$deepStatics: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().conf()
 * @param confs The object(s) containing metadata properties
 * @returns A new Stamp
 */
declare function stampit$conf(...confs: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().configuration()
 * @param confs The object(s) containing metadata properties
 * @returns A new Stamp
 */
declare function stampit$configuration(...confs: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().deepConf()
 * @param deepConfs The object(s) containing metadata properties
 * @returns A new Stamp
 */
declare function stampit$deepConf(...deepConfs: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().deepConfiguration()
 * @param deepConfs The object(s) containing metadata properties
 * @returns A new Stamp
 */
declare function stampit$deepConfiguration(...deepConfs: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().propertyDescriptors()
 * @param descriptors
 * @returns A new Stamp
 */
declare function stampit$propertyDescriptors(...descriptors: Array<{}>): stampit$Stamp



/**
 * A shortcut method for stampit().staticPropertyDescriptors()
 * @param descriptors
 * @returns A new Stamp
 */
declare function stampit$staticPropertyDescriptors(...descriptors: Array<{}>): stampit$Stamp



/**
 * Take two or more Composables and combine them to produce a new Stamp.
 * Combining overrides properties with last-in priority.
 * @param composables Composable objects used to create the stamp.
 * @return A new Stamp made of all the given composables.
 */
declare function stampit$compose(...composables: Composable[]): stampit$Stamp

	declare module.exports: typeof stampit

    }
