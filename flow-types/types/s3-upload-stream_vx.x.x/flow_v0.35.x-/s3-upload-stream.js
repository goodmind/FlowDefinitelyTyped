declare module 's3-upload-stream' {
        import typeof * as stream from 'stream';

	import typeof * as AWS from 'aws-sdk';

	declare interface s3Stream$S3StreamUploader {
upload(
destinationDetails: AWS.S3.PutObjectRequest,
sessionDetails?: any): s3Stream$S3WriteStream
} 

declare type s3Stream$S3WriteStream = {
maxPartSize(sizeInBytes: number): void,
concurrentParts(numberOfParts: number): void
} & stream.Writable

	declare function s3Stream(client: AWS.S3): s3Stream$s3Stream$S3StreamUploader

	declare module.exports: typeof s3Stream

    }
