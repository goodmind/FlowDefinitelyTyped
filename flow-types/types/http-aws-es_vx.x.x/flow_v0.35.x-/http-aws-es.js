declare module 'http-aws-es' {
        import typeof * as e from 'elasticsearch';

	import type {
          Credentials
        } from 'aws-sdk/lib/core';

	declare module 'elasticsearch' {
        declare interface AmazonESOptions {
accessKey?: string,
credentials?: Credentials,
region: string,
secretKey?: string
} 
	declare interface ConfigOptions {
amazonES?: AmazonESOptions
} 
    }

	declare var HttpAmazonESConnector: any;
	declare module.exports: typeof HttpAmazonESConnector

    }
