declare module 'clipboard-js' {
        declare interface clipboard$IClipboardJsStatic {
copy(val: string | Element): Promise<void>,
paste(): Promise<string>
} 
	declare var clipboard: clipboard$clipboard$IClipboardJsStatic;
	declare module.exports: typeof clipboard

    }
