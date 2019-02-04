declare type I18next$I18nextOptions = {
backend?: i18nextNodeFsBackEnd$i18nextNodeFsBackEndOptions
} & i18nextNodeFsBackEnd$I18next$I18nextOptions

/**
 * @summary Options for "i18next-node-fs-backend".
 * @interface
 */
declare interface i18nextNodeFsBackEnd$i18nextNodeFsBackEndOptions {

/**
 * @summary Path where resources get loaded from.
 * @type {string}
 */
loadPath: string,

/**
 * @summary Path to post missing resources
 * @type {string}
 */
addPath: string,

/**
 * @summary jsonIndent to use when storing json files
 * @type {number}
 */
jsonIndent: number,

/**
 * @summary custom parser
 * @type {function}
 */
parse?: (data: any) => any
} 

declare type i18nextNodeFsBackEnd$I18nextOptions = {
backend?: i18nextNodeFsBackEnd$i18nextNodeFsBackEndOptions
} & i18nextNodeFsBackEnd$i18nextNodeFsBackEnd$I18nextOptions
declare module 'i18next-node-fs-backend' {
        import typeof * as i18next from 'i18next';

	declare class BackEnd  {
constructor(services?: any, options?: i18nextNodeFsBackEnd$i18nextNodeFsBackEnd$i18nextNodeFsBackEndOptions): this;
init(
options?: i18nextNodeFsBackEnd$i18nextNodeFsBackEnd$i18nextNodeFsBackEndOptions): void
}
	declare var module: typeof BackEnd;
	declare module.exports: typeof module

    }
