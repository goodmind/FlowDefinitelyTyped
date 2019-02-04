declare module 'gapi.translate' {
        declare export interface language$detections {

/**
 * Detect the language of text.
 */
list(
object: {

/**
 * The text to detect
 */
q: string[],

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string
}): HttpRequest<GoogleApiTranslateDetectionListResponse>
} 

declare export interface language$languages {

/**
 * List the source/target languages supported by the API
 */
list(
object: {

/**
 * the language and collation in which the localized results should be returned
 */
target?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string
}): HttpRequest<GoogleApiTranslateLanguageListResponse>
} 

declare export interface language$translations {

/**
 * Returns text translations from one language to another.
 */
list(
object: {

/**
 * The text to translate
 */
q: string[],

/**
 * The target language into which the text should be translated
 */
target: string,

/**
 * The customization id for translate
 */
cid?: string[],

/**
 * This optional parameter allows you to indicate that the text to be translated is either plain-text or HTML. A value of html indicates HTML and a value of text indicates plain-text
 */
format?: string,

/**
 * The source language of the text
 */
source?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If prettyprint=true, the results returned by the server will be human readable (pretty printed).
 */
prettyprint?: string
}): HttpRequest<GoogleApiTranslateTranslationListResponse>
} 
	declare interface GoogleApiTranslateTranslationListResponse {
data: {
language$translations: {
translatedText: string,
detectedSourceLanguage: string
}[]
}
} 
	declare interface GoogleApiTranslateLanguageListResponse {
data: {
language$languages: {
language: string,
name: string
}[]
}
} 
	declare interface GoogleApiTranslateDetectionListResponse {
data: {
language$detections: {
language: string,
confidence: number
}[][]
}
} 
    }
