declare module 'java-applet' {
        
/**
 * @summary Java applet Status. More details: {@link http://docs.oracle.com/javase/8/docs/technotes/guides/deploy/applet_dev_guide.html#JSDPG719|Applet Status And Event Handlers}
 * @enum {number}
 * @readonly
 */
declare  class JavaAppletStatus {
  constructor(...args: empty): mixed;
static +Loading: Class<JavaAppletStatus__Loading> & JavaAppletStatus__Loading & 1;// 1
static +Ready: Class<JavaAppletStatus__Ready> & JavaAppletStatus__Ready & 2;// 2
static +Error: Class<JavaAppletStatus__Error> & JavaAppletStatus__Error & 3;// 3

}

declare class JavaAppletStatus__Loading mixins JavaAppletStatus {}
declare class JavaAppletStatus__Ready mixins JavaAppletStatus {}
declare class JavaAppletStatus__Error mixins JavaAppletStatus {}

	
/**
 * @summary Interface for Java applet object.
 * @author Cyril Schumacher
 * @version 1.0
 */
declare type JavaApplet = {

/**
 * @summary Handler if the applet status is {@link JavaAppletStatus#Error}. An error has occurred while loading the applet.
 * @type {Function}
 */
onError?: Function,

/**
 * @summary Handler if the applet status is {@link JavaAppletStatus#Ready}. Applet has finished loading and is ready to receive JavaScript calls.
 * @type {Function}
 */
onLoad?: Function,

/**
 * @summary Handler if the applet has stopped.
 * @type {Function}
 */
onStop?: Function,

/**
 * @summary Java applet Status.
 * @type {JavaAppletStatus}
 */
status?: JavaAppletStatus
} & HTMLAppletElement

    }
