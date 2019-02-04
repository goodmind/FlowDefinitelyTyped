declare module 'calq' {
        declare interface Calq {
action: Calq$Calq$Action,
user: Calq$Calq$User,
init(writeKey: string, options?: {
[index: string]: any
}): void
} 
	declare interface Calq$Action {
track(action: string, params?: {
[index: string]: any
}): void,
trackSale(
action: string,
params: {
[index: string]: any
},
currency: string,
amount: number): void,
trackHTMLLink(action: string, params?: {
[index: string]: any
}): void,
trackPageView(action?: string): void,
setGlobalProperty(name: string, value: any): void,
setGlobalProperty(params: {
[index: string]: any
}): void
} 

declare interface Calq$User {
identify(userId: string): void,
clear(): void,
profile(params: {
[index: string]: any
}): void
} 
	declare var calq: Calq;
    }
