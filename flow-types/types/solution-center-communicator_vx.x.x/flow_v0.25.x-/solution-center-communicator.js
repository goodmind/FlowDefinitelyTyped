declare interface ScCommunicator$Environment {
  /**
   * Name of the environment
   */
  NAME: string;

  /**
   * URL where to reach the frontend of the environment
   */
  URL: string;

  /**
   * Domain where to set a cookie in case it's needed for that environment
   */
  DOMAIN: string;

  /**
   * In case that the domain is localhost, a port can be also specified
   */
  PORT?: string;

  /**
   * URL where to reach the user management service API
   */
  USER_SERVICE?: string;

  /**
   * URL where to reach the token management service API
   */
  TOKEN_SERVICE?: string;

  /**
   * URL where to reach the merchant management service API
   */
  MERCHANT_SERVICE?: string;

  /**
   * URL where to reach the GoodData service API
   */
  GOODDATA_SERVICE?: string;

  /**
   * URL where to reach the module service API
   */
  MODULE_SERVICE?: string;

  /**
   * URL where to reach the new user service API
   */
  USER_SERVICE_NEW?: string;
}

declare interface ScCommunicator$Environments {
  /**
   * Production environment
   */
  PRODUCTION: ScCommunicator$Environment;

  /**
   * Stage environment
   */
  STAGE: ScCommunicator$Environment;

  /**
   * Integration environment
   */
  INTEGRATION: ScCommunicator$Environment;

  /**
   * Development environment
   */
  DEVELOPMENT: ScCommunicator$Environment;

  /**
   * Local environment
   */
  LOCAL: ScCommunicator$Environment;

  /**
   * Testing environment
   */
  TESTING: ScCommunicator$Environment;
}

declare interface ScCommunicator$ScEnvironmentsProvider {
  /**
   * Get current environment
   * If environment was not previously configured, use default environment
   * @public
   * @returns {Object} Current or default environment
   */
  getCurrentEnvironment(): ScCommunicator$Environment;

  /**
   * Get specific environment
   * @public
   * @param {string} name - Environment name
   * @returns {Object} Specific or default environment
   */
  getSpecificEnvironment(name: string): ScCommunicator$Environment;

  /**
   * Set current environment
   * @public
   * @param {string | Object} env - Environment name or custom environment object
   * @returns {Object} Named or custom environment
   */
  setCurrentEnvironment(env: any): ScCommunicator$Environment;

  /**
   * Access to the public methods of the service
   */
  $get(): any;
}
declare module "solution-center-communicator" {
  declare module.exports: typeof ScCommunicator;
}
