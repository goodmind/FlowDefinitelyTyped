declare module 'tus-js-client' {
        declare export interface UploadOptions {
endpoint: string,
fingerprint?: (file: File, options?: UploadOptions) => string,
resume?: boolean,
metadata?: {
[key: string]: string
},
onProgress?: ((bytesSent: number, bytesTotal: number) => void) | null,
onChunkComplete?: ((chunkSize: number, bytesAccepted: number, bytesTotal: number) => void) | null,
onSuccess?: (() => void) | null,
onError?: ((error: Error) => void) | null,
headers?: {
[key: string]: string
},
chunkSize?: number,
withCredentials?: boolean,
uploadUrl?: string | null,
uploadSize?: number | null,
overridePatchMethod?: boolean,
retryDelays?: number[],
removeFingerprintOnSuccess?: boolean
} 
	declare export class Upload  {
constructor(file: File | Blob, options: UploadOptions): this;
file: File | Blob;
options: UploadOptions;
url: string | null;
start(): void;
abort(): void
}
	declare export var isSupported: boolean;
	declare export var canStoreURLs: boolean;
	declare export var defaultOptions: UploadOptions;
    }
