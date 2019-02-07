declare module 'multer-s3' {
        import typeof * as AWS from 'aws-sdk';

	import type {
          StorageEngine
        } from 'multer';

	declare interface Options {
s3: AWS.S3,
bucket: ((
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, bucket?: string) => void) => void) | string,
key?: (
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, key?: string) => void) => void,
acl?: ((
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, acl?: string) => void) => void) | string,
contentType?: (
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, mime?: string, stream?: NodeJS.ReadableStream) => void) => void,
metadata?: (
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, metadata?: any) => void) => void,
cacheControl?: ((
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, cacheControl?: string) => void) => void) | string,
serverSideEncryption?: ((
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, serverSideEncryption?: string) => void) => void) | string
} 
	declare module 'global' {
        declare type MulterS3$File = {
bucket: string,
key: string,
acl: string,
contentType: string,
contentDisposition: null,
storageClass: string,
serverSideEncryption: null,
metadata: any,
location: string,
etag: string
} & Multer.MulterS3$File

    }

	declare interface S3Storage {
(options?: Options): StorageEngine,
AUTO_CONTENT_TYPE(
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, mime?: string, stream?: NodeJS.ReadableStream) => void): void,
DEFAULT_CONTENT_TYPE(
req: Express$Request,
file: Express$Multer.MulterS3$File,
callback: (error: any, mime?: string) => void): void
} 
	declare var s3Storage: S3Storage;
	declare module.exports: typeof s3Storage

    }
