declare module 'hapi-auth-basic' {
        import type {
          Plugin,Request,ResponseToolkit
        } from 'hapi';

	declare interface Basic$ValidateCustomResponse {
response: any
} 

declare interface Basic$ValidateResponse {
isValid: boolean,
credentials?: any
} 

declare interface Basic$Validate {
(request: Request, username: string, password: string, h: ResponseToolkit): Promise<Basic$ValidateResponse | Basic$ValidateCustomResponse>
} 
	declare var Basic: Plugin<{}>;
	declare module.exports: typeof Basic

    }
