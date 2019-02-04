declare module 'angular-environment' {
        declare interface environment$ServiceProvider {

/**
 * Sets the configuration object
 */
config: (config: angular$environment.environment$Config) => void,

/**
 * Evaluates the current domain and
 * loads the correct environment variables.
 */
check: () => void,

/**
 * Retrieves the correct version of a
 * variable for the current environment.
 */
read: (key: string) => any
} 

declare interface environment$Service {

/**
 * Retrieve the current environment
 */
get: () => string,

/**
 * Force sets the current environment
 */
set: (environment: string) => void,

/**
 * Evaluates current environment against
 * environment parameter.
 */
is: (environment: string) => boolean,

/**
 * Retrieves the correct version of a
 * variable for the current environment.
 */
read: (key: string) => any
} 

declare interface environment$Config {

/**
 * Map of domains to their environments
 */
domains: {
[environment: string]: Array<string>
},

/**
 * List of variables split by environment
 */
vars: {
[environment: string]: {
[variable: string]: any
}
}
} 
    }
