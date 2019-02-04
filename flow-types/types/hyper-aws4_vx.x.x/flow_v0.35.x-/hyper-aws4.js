declare module 'hyper-aws4' {
        declare export interface Credentials {
accessKey: string,
secretKey: string
} 
	declare export interface Header {
[header: string]: string
} 
	declare export type HttpMethods = "GET"
| "POST"
| "PUT"
| "DELETE"
| "PATCH";
	declare export interface Request {
url: string,
method?: HttpMethods,
body?: string,
headers?: Header,
credential?: Credentials
} 
	declare export function sign(request: Request, credential?: Credentials): Header

    }
