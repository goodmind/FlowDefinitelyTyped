declare module "d3-random" {
  declare export interface RandomNumberGenerationSource {
    /**
 * Returns the same type of function for generating random numbers but where the given random number
 * generator source is used as the source of randomness instead of Math.random.
 * This is useful when a seeded random number generator is preferable to Math.random.
 * @param source Source (pseudo-)random number generator implementing the Math.random interface.
The given random number generator must implement the same interface as Math.random and
only return values in the range [0, 1).
 */
    source(source: () => number): this;
  }

  /**
   * A configurable random number generator for the uniform distribution.
   */
  declare export type RandomUniform = {
    /**
     * Returns a function for generating random numbers with a uniform distribution).
     * The minimum allowed value of a returned number is min, and the maximum is max.
     * If min is not specified, it defaults to 0; if max is not specified, it defaults to 1.
     * @param min The minimum allowed value of a returned number, defaults to 0.
     * @param max The maximum allowed value of a returned number, defaults to 1.
     */
    (min?: number, max?: number): () => number
  } & RandomNumberGenerationSource;

  declare export var randomUniform: RandomUniform;

  /**
   * A configurable random number generator for the normal (Gaussian) distribution.
   */
  declare export type RandomNormal = {
    /**
     * Returns a function for generating random numbers with a normal (Gaussian) distribution.
     * The expected value of the generated numbers is mu, with the given standard deviation sigma.
     * If mu is not specified, it defaults to 0; if sigma is not specified, it defaults to 1.
     * @param mu Expected value, defaults to 0.
     * @param sigma Standard deviation, defaults to 1.
     */
    (mu?: number, sigma?: number): () => number
  } & RandomNumberGenerationSource;

  declare export var randomNormal: RandomNormal;

  /**
   * A configurable random number generator for the log-normal distribution.
   */
  declare export type RandomLogNormal = {
    /**
     * Returns a function for generating random numbers with a log-normal distribution. The expected value of the random variable’s natural logarithm is mu,
     * with the given standard deviation sigma. If mu is not specified, it defaults to 0; if sigma is not specified, it defaults to 1.
     * @param mu Expected value, defaults to 0.
     * @param sigma Standard deviation, defaults to 1.
     */
    (mu?: number, sigma?: number): () => number
  } & RandomNumberGenerationSource;

  declare export var randomLogNormal: RandomLogNormal;

  /**
   * A configurable random number generator for the Bates distribution.
   */
  declare export type RandomBates = {
    /**
     * Returns a function for generating random numbers with a Bates distribution with n independent variables.
     * @param n Number of independent random variables to use.
     */
    (n: number): () => number
  } & RandomNumberGenerationSource;

  declare export var randomBates: RandomBates;

  /**
   * A configurable random number generator for the Irwin–Hall distribution.
   */
  declare export type RandomIrwinHall = {
    /**
     * Returns a function for generating random numbers with an Irwin–Hall distribution with n independent variables.
     * @param n Number of independent random variables to use.
     */
    (n: number): () => number
  } & RandomNumberGenerationSource;

  declare export var randomIrwinHall: RandomIrwinHall;

  /**
   * A configurable random number generator for the exponential distribution.
   */
  declare export type RandomExponential = {
    /**
     * Returns a function for generating random numbers with an exponential distribution with the rate lambda;
     * equivalent to time between events in a Poisson process with a mean of 1 / lambda.
     * @param lambda Expected time between events.
     */
    (lambda: number): () => number
  } & RandomNumberGenerationSource;

  declare export var randomExponential: RandomExponential;
}
