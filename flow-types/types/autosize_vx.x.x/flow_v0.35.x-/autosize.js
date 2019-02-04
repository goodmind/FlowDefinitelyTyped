declare module 'autosize' {
        
/**
 * Attach autosize to NodeList
 */
declare function autosize(elements: NodeList): NodeList

	
/**
 * Attach autosize to Element
 */
declare function autosize(element: Element): Element

	
/**
 * Attach autosize to JQuery collection
 */
declare function autosize(collection: JQuery): JQuery

	
      declare var npm$namespace$autosize: {
        update: typeof autosize$update,
destroy: typeof autosize$destroy,
        
      }

/**
 * Triggers the height adjustment for an assigned textarea element.
 * Autosize will automatically adjust the textarea height on keyboard and window resize events.
 * There is no efficient way for Autosize to monitor for when another script has changed the textarea value or for changes in layout that impact the textarea element.
 */
declare function autosize$update(elements: NodeList): NodeList



/**
 * Triggers the height adjustment for an assigned textarea element.
 * Autosize will automatically adjust the textarea height on keyboard and window resize events.
 * There is no efficient way for Autosize to monitor for when another script has changed the textarea value or for changes in layout that impact the textarea element.
 */
declare function autosize$update(element: Element): Element



/**
 * Triggers the height adjustment for an assigned textarea element.
 * Autosize will automatically adjust the textarea height on keyboard and window resize events.
 * There is no efficient way for Autosize to monitor for when another script has changed the textarea value or for changes in layout that impact the textarea element.
 */
declare function autosize$update(collection: JQuery): JQuery



/**
 * Removes Autosize and reverts any changes it made to the textarea element.
 */
declare function autosize$destroy(elements: NodeList): NodeList



/**
 * Removes Autosize and reverts any changes it made to the textarea element.
 */
declare function autosize$destroy(element: Element): Element



/**
 * Removes Autosize and reverts any changes it made to the textarea element.
 */
declare function autosize$destroy(collection: JQuery): JQuery

	declare module.exports: typeof autosize

    }
