declare module 'hypertext-application-language' {
        
/**
 * Describe a HAL Link object
 * 
 * https://tools.ietf.org/html/draft-kelly-json-hal-06#section-5
 */
declare interface Hal$Link {
deprecation?: string,
href: string,
hreflang?: string,
name?: string,
profile?: string,
templated?: boolean,
title?: string,
type?: string
} 
    }
