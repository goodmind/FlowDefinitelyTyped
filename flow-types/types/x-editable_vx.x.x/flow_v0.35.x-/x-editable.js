declare module 'x-editable' {
        declare interface XEditableOptions {
ajaxOptions?: any,
anim?: string,
autotext?: string,
defaultValue?: any,
disabled?: boolean,
display?: any,
emptyclass?: string,
emptytext?: string,
error?: any,
highlight?: any,
mode?: string,
name?: string,
onblur?: string,
params?: any,
pk?: any,
placement?: string,
savenochange?: boolean,
selector?: string,
send?: string,
showbuttons?: any,
success?: any,
toggle?: string,
type?: string,
unsavedclass?: string,
url?: any,
validate?: any,
value?: any
} 
	declare interface XEditableSubmitOptions {
url?: any,
data?: any,
ajaxOptions?: any,
error(obj: any): void,
success(obj: any, config: any): void
} 
	declare interface XEditable {
options: XEditableOptions,
activate(): void,
destroy(): void,
disable(): void,
enable(): void,
getValue(isSingle: boolean): any,
hide(): void,
option(key: any, value: any): void,
setValue(value: any, convertStr: boolean): void,
show(closeAll: boolean): void,
submit(options: XEditableSubmitOptions): void,
toggle(closeAll: boolean): void,
toggleDisabled(): void,
validate(): void
} 
	declare interface JQuery {

/**
 * Initializes editable with the specified options
 * @param options an object with options specific to the editable instance
 */
editable(options?: any): XEditable,

/**
 * Initializes editable calling the specific method with is parameters
 * @param method the method to call
 * @param params the parameters expected by the method
 */
editable(method: string, params?: any): XEditable
} 
    }
