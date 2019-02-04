declare module 'object.getownpropertydescriptors' {
        
/**
 * Returns an object containing all own property descriptors of an object
 * @param o - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
declare function getOwnPropertyDescriptors<T: {[key: string]: any}>(
o: T): $ObjMapi<T, <K>(K) => TypedPropertyDescriptor<$ElementType<T, K>>> & PropertyDescriptorMap

	
      declare var npm$namespace$getOwnPropertyDescriptors: {
        shim: typeof getOwnPropertyDescriptors$shim,
getPolyfill: typeof getOwnPropertyDescriptors$getPolyfill,
implementation: typeof getOwnPropertyDescriptors$implementation,
        
      }
declare function getOwnPropertyDescriptors$shim(): typeof getOwnPropertyDescriptors


declare function getOwnPropertyDescriptors$getPolyfill(): typeof getOwnPropertyDescriptors


declare function getOwnPropertyDescriptors$implementation(): typeof getOwnPropertyDescriptors

	declare module.exports: typeof getOwnPropertyDescriptors

    }
