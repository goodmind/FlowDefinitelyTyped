declare module "amplify" {
  declare interface Request {
    /**
     * *
     * Request a resource.
     * resourceId: Identifier string for the resource.
     * data: A set of key/value pairs of data to be sent to the resource.
     * callback: A function to invoke if the resource is retrieved successfully.
     */
    (resourceId: string, hash?: any, callback?: Function): JQueryPromise<any>;

    /**
     * *
     * Request a resource.
     * settings: A set of key/value pairs of settings for the request.
     * resourceId: Identifier string for the resource.
     * data (optional): Data associated with the request.
     * success (optional): Function to invoke on success.
     * error (optional): Function to invoke on error.
     */
    (settings: RequestSettings): JQueryPromise<any>;
  }
}
declare module "amplify-deferred" {
  import typeof * as amplify from "amplify";
}
