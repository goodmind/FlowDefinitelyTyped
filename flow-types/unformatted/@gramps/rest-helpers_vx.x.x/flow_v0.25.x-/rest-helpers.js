declare module '@gramps/rest-helpers' {
        declare export class GraphQLConnector  {
constructor(): this;
apiBaseUri: string;
headers: {[key: string]: any};
request: any;
cacheExpiry: number;
enableCache: boolean;
redis: boolean;
get(endpoint: string): Promise<any>;
post(
endpoint: string,
body: {[key: string]: any},
options: {[key: string]: any}): Promise<any>;
put(
endpoint: string,
body: {[key: string]: any},
options: {[key: string]: any}): Promise<any>;
delete(endpoint: string, options: {[key: string]: any}): Promise<any>
}
	declare export class GraphQLModel  {
connector: GraphQLConnector;
constructor({}: <<UNKNOWN PARAM FORMAT>>): this
}
    }
