declare module 'angular' {
        declare interface sanitize$ISanitizeService {
(html: string): string
} 


/**
 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and plain email address links.
 * @param text
 * Input text.
 * @param target
 * ILinkyTargetType Window (_blank|_self|_parent|_top) or named frame to open links in.
 * @param attributes
 * Add custom attributes to the link element.
 * @return
 * Html-linkified and sanitized text.
 * see https://docs.angularjs.org/api/ngSanitize/filter/linky
 */
declare interface filter$ILinky {
(text: string, target?: string, attributes?: {
[attribute: string]: string
} | ((url: string) => {
[attribute: string]: string
})): string
} 

declare interface sanitize$IFilterService {
(name: "linky"): angular.sanitize.filter.filter$ILinky
} 
    }
declare module 'angular-sanitize' {
        declare var _: string;
	declare export default typeof _

	import typeof * as angular from 'angular';

    }
