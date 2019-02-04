declare module 'native-toast' {
        declare var toast: {
(options: ToastOptions): Toast,
success: (options: ToastOptions) => Toast,
warning: (options: ToastOptions) => Toast,
info: (options: ToastOptions) => Toast,
error: (options: ToastOptions) => Toast
};
	declare export default typeof toast

	declare export interface ToastOptions {
message?: string,
position?: "center"
| "west"
| "east"
| "south"
| "south-west"
| "south-east"
| "north"
| "north-west"
| "north-east",
timeout?: number,
el?: HTMLElement,
rounded?: boolean,
type?: "success" | "warning" | "info" | "error",
debug?: boolean,
edge?: boolean,
icon?: boolean,
closeOnClick?: boolean,
elements?: HTMLElement[]
} 
	declare export interface Toast {
show(): void,
hide(): void,
destroy(): void
} 
    }
