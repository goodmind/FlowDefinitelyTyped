declare module 'aws4' {
        declare export class RequestSigner  {
constructor(request?: any, credentials?: any): this;
request: any;
credentials: any;
service: any;
region: any;
isCodeCommitGit: any;
matchHost(host?: string): string;
isSingleRegion(): boolean;
createHost(): string;
prepareRequest(): void;
sign(): any;
getDateTime(): string;
getDate(): string;
authHeader(): string;
signature(): string;
stringToSign(): string;
canonicalString(): string;
canonicalHeaders(): string;
signedHeaders(): string;
credentialString(): string;
defaultCredentials(): any;
parsePath(): any;
formatPath(): string
}
	declare export function sign(options?: any, credentials?: any): any

    }
