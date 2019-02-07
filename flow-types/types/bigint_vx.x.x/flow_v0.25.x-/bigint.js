declare module "bigint" {
  declare var npm$namespace$BigInt: {
    setRandom: typeof BigInt$setRandom,
    add: typeof BigInt$add,
    addInt: typeof BigInt$addInt,
    bigInt2str: typeof BigInt$bigInt2str,
    bitSize: typeof BigInt$bitSize,
    dup: typeof BigInt$dup,
    equals: typeof BigInt$equals,
    equalsInt: typeof BigInt$equalsInt,
    expand: typeof BigInt$expand,
    findPrimes: typeof BigInt$findPrimes,
    GCD: typeof BigInt$GCD,
    greater: typeof BigInt$greater,
    greaterShift: typeof BigInt$greaterShift,
    int2bigInt: typeof BigInt$int2bigInt,
    inverseMod: typeof BigInt$inverseMod,
    inverseModInt: typeof BigInt$inverseModInt,
    isZero: typeof BigInt$isZero,
    millerRabin: typeof BigInt$millerRabin,
    millerRabinInt: typeof BigInt$millerRabinInt,
    mod: typeof BigInt$mod,
    modInt: typeof BigInt$modInt,
    mult: typeof BigInt$mult,
    multMod: typeof BigInt$multMod,
    negative: typeof BigInt$negative,
    powMod: typeof BigInt$powMod,
    randBigInt: typeof BigInt$randBigInt,
    randTruePrime: typeof BigInt$randTruePrime,
    randProbPrime: typeof BigInt$randProbPrime,
    str2bigInt: typeof BigInt$str2bigInt,
    sub: typeof BigInt$sub,
    trim: typeof BigInt$trim,
    addInt_: typeof BigInt$addInt_,
    add_: typeof BigInt$add_,
    copy_: typeof BigInt$copy_,
    copyInt_: typeof BigInt$copyInt_,
    GCD_: typeof BigInt$GCD_,
    inverseMod_: typeof BigInt$inverseMod_,
    mod_: typeof BigInt$mod_,
    mult_: typeof BigInt$mult_,
    multMod_: typeof BigInt$multMod_,
    powMod_: typeof BigInt$powMod_,
    randBigInt_: typeof BigInt$randBigInt_,
    randTruePrime_: typeof BigInt$randTruePrime_,
    sub_: typeof BigInt$sub_,
    addShift_: typeof BigInt$addShift_,
    carry_: typeof BigInt$carry_,
    divide_: typeof BigInt$divide_,
    divInt_: typeof BigInt$divInt_,
    eGCD_: typeof BigInt$eGCD_,
    halve_: typeof BigInt$halve_,
    leftShift_: typeof BigInt$leftShift_,
    linComb_: typeof BigInt$linComb_,
    linCombShift_: typeof BigInt$linCombShift_,
    mont_: typeof BigInt$mont_,
    multInt_: typeof BigInt$multInt_,
    rightShift_: typeof BigInt$rightShift_,
    squareMod_: typeof BigInt$squareMod_,
    subShift_: typeof BigInt$subShift_
  };
  declare export type BigInt$BigInt = {} & Array<number>;

  declare export interface BigInt$IRandom {
    (): number;
  }

  /**
   * Sets a random number generator.
   * @param {BigInt$IRandom} random function that returns random number.
   */
  declare export function BigInt$setRandom(random: BigInt$IRandom): void;

  /**
   * return (x+y) for bigInts x and y.
   * @param {BigInt$BigInt} x The BigInt augend.
   * @param {BigInt$BigInt} y The BigInt addend.
   * @return {BigInt$BigInt} A sum as BigInt.
   */
  declare export function BigInt$add(
    x: BigInt$BigInt,
    y: BigInt$BigInt
  ): BigInt$BigInt;

  /**
   * return (x+n) where x is a bigInt and n is an integer.
   * @param {BigInt$BigInt} x The BigInt augend.
   * @param {number} n The number addend.
   * @return {BigInt$BigInt} A sum as BigInt.
   */
  declare export function BigInt$addInt(
    x: BigInt$BigInt,
    n: number
  ): BigInt$BigInt;

  /**
   * return a string form of bigInt x in a given base, with 2 <= base <= 95.
   * @param {BigInt$BigInt} x The BigInt to stringify.
   * @param {number} base The base as radix number.
   * @return {string} A string representation of given BigInt.
   */
  declare export function BigInt$bigInt2str(
    x: BigInt$BigInt,
    base: number
  ): string;

  /**
   * return a string form of bigInt x in a given base, with 2 <= base <= 95.
   * @param {BigInt$BigInt} x The BigInt to stringify.
   * @param {string} base The base as vocabulary of characters.
   * @return {string} A string representation of given BigInt.
   */
  declare export function BigInt$bigInt2str(
    x: BigInt$BigInt,
    base: string
  ): string;

  /**
   * return how many bits long the bigInt x is, not counting leading zeros.
   * @param {BigInt$BigInt} x The BigInt to process.
   * @return {number} A size in BigInt as number.
   */
  declare export function BigInt$bitSize(x: BigInt$BigInt): number;

  /**
   * return a copy of bigInt x.
   * @param {BigInt$BigInt} x Source BigInt to be copied.
   * @return {BigInt$BigInt} A copy of this object.
   */
  declare export function BigInt$dup(x: BigInt$BigInt): BigInt$BigInt;

  /**
   * is the bigInt x equal to the bigint y?
   * @param {BigInt$BigInt} x BigInt to be compared.
   * @param {BigInt$BigInt} y BigInt to be compared.
   * @return {boolean} true if the objects are considered equal, false if they are not.
   */
  declare export function BigInt$equals(
    x: BigInt$BigInt,
    y: BigInt$BigInt
  ): boolean;

  /**
   * is bigint x equal to integer y?
   * @param {BigInt$BigInt} x BigInt to be compared.
   * @param {BigInt$BigInt} y BigInt to be compared.
   * @return {boolean} true if the objects are considered equal, false if not.
   */
  declare export function BigInt$equalsInt(
    x: BigInt$BigInt,
    y: number
  ): boolean;

  /**
   * return a copy of x with at least n elements, adding leading zeros if needed.
   * @param {BigInt$BigInt} value The source object to copy.
   * @param {number} n The minimal number of elements.
   * @return {BigInt$BigInt} A copy of given BigInt.
   */
  declare export function BigInt$expand(
    value: BigInt$BigInt,
    n: number
  ): BigInt$BigInt;

  /**
   * return array of all primes less than integer n.
   * @param {number} n Upper limit of search.
   * @return {Array} The found primes as Array.
   */
  declare export function BigInt$findPrimes(n: number): number[];

  /**
   * return greatest common divisor of bigInts x and y (each with same number of elements).
   * @param {BigInt$BigInt} x The BigInt to process.
   * @param {BigInt$BigInt} y The BigInt to process.
   * @return {BigInt$BigInt} A greatest common divisor as BigInt.
   */
  declare export function BigInt$GCD(
    x: BigInt$BigInt,
    y: BigInt$BigInt
  ): BigInt$BigInt;

  /**
   * is x>y?  (x and y are nonnegative bigInts)
   * @param {BigInt$BigInt} x BigInt to be compared.
   * @param {BigInt$BigInt} y BigInt to be compared.
   * @return {boolean} true if x is greater, false if it's not.
   */
  declare export function BigInt$greater(
    x: BigInt$BigInt,
    y: BigInt$BigInt
  ): boolean;

  /**
   * is (x <<(shift*bpe)) > y?
   * @param {BigInt$BigInt} x BigInt to be compared.
   * @param {BigInt$BigInt} y BigInt to be compared.
   * @param {number} shift The shift amount in bits.
   * @return {boolean} true if x is greater, false if it's not.
   */
  declare export function BigInt$greaterShift(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    shift: number
  ): boolean;

  /**
   * return a bigInt equal to integer t, with at least n bits and m array elements.
   * @param {number} t The number to process.
   * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} n (Optional) the number to process.
   * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} m (Optional) the number to process.
   * @return {BigInt$BigInt} A BigInt equivalent of given number.
   */
  declare export function BigInt$int2bigInt(
    t: number,
    n?: number,
    m?: number
  ): BigInt$BigInt;

  /**
   * return (x**(-1) mod n) for bigInts x and n. If no inverse exists, it returns null.
   * @param {BigInt$BigInt} x The BigInt base.
   * @param {BigInt$BigInt} n The BigInt divisor.
   * @return {BigInt$BigInt} A BigInt remainder.
   */
  declare export function BigInt$inverseMod(
    x: BigInt$BigInt,
    n: BigInt$BigInt
  ): BigInt$BigInt;

  /**
   * return x**(-1) mod n, for integers x and n.
   * Return 0 if there is no inverse.
   * @param {number} x The BigInt base.
   * @param {number} n The BigInt divisor.
   * @return {BigInt$BigInt} A BigInt remainder.
   */
  declare export function BigInt$inverseModInt(
    x: number,
    n: number
  ): BigInt$BigInt;

  /**
   * is the bigInt x equal to zero?
   * @param {BigInt$BigInt} x BigInt to be compared.
   * @return {boolean} true if zero, false if not.
   */
  declare export function BigInt$isZero(x: BigInt$BigInt): boolean;

  /**
   * does one round of Miller-Rabin base integer b say that bigInt x is possibly prime?
   * @param {BigInt$BigInt} x The BigInt to process.
   * @param {BigInt$BigInt} b The BigInt to process. (b is bigInt, 1<b<x)
   * @return {boolean} true if it is prime, false if it is not.
   */
  declare export function BigInt$millerRabin(
    x: BigInt$BigInt,
    b: BigInt$BigInt
  ): boolean;

  /**
   * does one round of Miller-Rabin base integer b say that bigInt x is possibly prime?
   * @param {number} x The number to process.
   * @param {number} b The number to process. (b is int, 1<b<x)
   * @return {boolean} true if it is prime, false if it is not.
   */
  declare export function BigInt$millerRabinInt(x: number, b: number): boolean;

  /**
   * return a new bigInt equal to (x mod n) for bigInts x and n.
   * @param {BigInt$BigInt} x The dividend.
   * @param {BigInt$BigInt} n The divisor.
   * @return {BigInt$BigInt} A remainder as BigInt.
   */
  declare export function BigInt$mod(
    x: BigInt$BigInt,
    n: BigInt$BigInt
  ): BigInt$BigInt;

  /**
   * return x mod n for bigInt x and integer n.
   * @param {BigInt$BigInt} x The dividend.
   * @param {number} n The divisor.
   * @return {number} A remainder as number.
   */
  declare export function BigInt$modInt(x: BigInt$BigInt, n: number): number;

  /**
   * return x*y for bigInts x and y. This is faster when y<x.
   * @param {BigInt$BigInt} x The multiplicand.
   * @param {BigInt$BigInt} y The multiplier.
   * @return {BigInt$BigInt} A product as BigInt.
   */
  declare export function BigInt$mult(
    x: BigInt$BigInt,
    y: BigInt$BigInt
  ): BigInt$BigInt;

  /**
   * return (x*y mod n) for bigInts x,y,n. For greater speed, let y<x.
   * @param {BigInt$BigInt} x The multiplicand.
   * @param {BigInt$BigInt} y The multiplier.
   * @param {BigInt$BigInt} n The divisor.
   * @return {BigInt$BigInt} A remainder as BigInt.
   */
  declare export function BigInt$multMod(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    n: BigInt$BigInt
  ): BigInt$BigInt;

  /**
   * is bigInt x negative?
   * @param {BigInt$BigInt} x BigInt to be compared.
   * @return {boolean} true if x is negative, false if x is positive.
   */
  declare export function BigInt$negative(x: BigInt$BigInt): boolean;

  /**
   * return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.
   *   0**0=1. Faster for odd n.
   * @param {BigInt$BigInt} x The BigInt base.
   * @param {BigInt$BigInt} y The BigInt exponent.
   * @param {BigInt$BigInt} n The BigInt divisor.
   * @return {BigInt$BigInt} A remainder as BigInt.
   */
  declare export function BigInt$powMod(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    n: BigInt$BigInt
  ): BigInt$BigInt;

  /**
   * return an n-bit random BigInt (n>=1).
   *   If s=1, then the most significant of those n bits is set to 1.
   * @param {number} n The number of bits (n>=1).
   * @param {number} s The sign bit.
   * @return {BigInt$BigInt} A new random BigInt.
   */
  declare export function BigInt$randBigInt(
    n: number,
    s: number
  ): BigInt$BigInt;

  /**
   * return a new, random, k-bit, true prime bigInt using Maurer's algorithm.
   * @param {number} k The number of bits.
   * @return {BigInt$BigInt} A new random BigInt.
   */
  declare export function BigInt$randTruePrime(k: number): BigInt$BigInt;

  /**
   * return a new, random, k-bit, probable prime bigInt.
   *   Probability it's composite less than 2^- 80.
   * @param {number} k The number of bits.
   * @return {BigInt$BigInt} A new probably random BigInt.
   */
  declare export function BigInt$randProbPrime(k: number): BigInt$BigInt;

  /**
   * return a bigInt for number represented in string s in base b with at least n bits and m array
   * elements.
   * @param {string} s The string representation of number.
   * @param {number} b The base as radix number.
   * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} n (Optional) minimal bit length as number.
   * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} m (Optional) the number of array elements as number.
   * @return {BigInt$BigInt} A parsed BigInt.
   */
  declare export function BigInt$str2bigInt(
    s: string,
    b: number,
    n?: number,
    m?: number
  ): BigInt$BigInt;

  /**
   * return a bigInt for number represented in string s in base b with at least n bits and m array
   * elements.
   * @param {string} s The string representation of number.
   * @param {string} b The base as string vocabulary of characters.
   * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} n (Optional) minimal bit length as number.
   * @param {"NO PRINT IMPLEMENTED: JSDocOptionalType"} m (Optional) the number of array elements as number.
   * @return {BigInt$BigInt} A parsed BigInt.
   */
  declare export function BigInt$str2bigInt(
    s: string,
    b: string,
    n?: number,
    m?: number
  ): BigInt$BigInt;

  /**
   * return (x-y) for bigInts x and y.
   *   Negative answers will be 2s complement.
   * @param {BigInt$BigInt} x The minuend as BigInt.
   * @param {BigInt$BigInt} y The subtrahend as BigInt.
   * @return {BigInt$BigInt} A difference BigInt.
   */
  declare export function BigInt$sub(
    x: BigInt$BigInt,
    y: BigInt$BigInt
  ): BigInt$BigInt;

  /**
   * return a copy of x with exactly k leading zero elements.
   * @param {BigInt$BigInt} x The BigInt to be copied.
   * @param {number} k The number of zeroes.
   * @return {BigInt$BigInt} A copy BigInt.
   */
  declare export function BigInt$trim(
    x: BigInt$BigInt,
    k: number
  ): BigInt$BigInt;

  /**
   * do x=x+n where x is a bigInt and n is an integer.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt accumulator.
   * @param {number} n The number addend.
   */
  declare export function BigInt$addInt_(x: BigInt$BigInt, n: number): void;

  /**
   * do x=x+y for bigInts x and y.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt accumulator.
   * @param {BigInt$BigInt} y The BigInt addend.
   */
  declare export function BigInt$add_(x: BigInt$BigInt, y: BigInt$BigInt): void;

  /**
   * do x=y on bigInts x and y.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt destination.
   * @param {BigInt$BigInt} y The BigInt source.
   */
  declare export function BigInt$copy_(
    x: BigInt$BigInt,
    y: BigInt$BigInt
  ): void;

  /**
   * do x=n on bigInt x and integer n.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt destination.
   * @param {number} n The number source.
   */
  declare export function BigInt$copyInt_(x: BigInt$BigInt, n: number): void;

  /**
   * set x to the greatest common divisor of bigInts x and y, (y is destroyed).
   *   This never overflows its array.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt first dividend.
   * @param {BigInt$BigInt} y The BigInt second dividend.
   */
  declare export function BigInt$GCD_(x: BigInt$BigInt, y: BigInt$BigInt): void;

  /**
   * do x=x**(-1) mod n, for bigInts x and n. Returns 1 (0) if inverse does (doesn't) exist.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt base and the remainder result.
   * @param {BigInt$BigInt} n The BigInt divisor.
   * @return {boolean} true if inverse does exist, false if doesn't.
   */
  declare export function BigInt$inverseMod_(
    x: BigInt$BigInt,
    n: BigInt$BigInt
  ): boolean;

  /**
   * do x=x mod n for bigInts x and n. (This never overflows its array).
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt dividend and the remainder result.
   * @param {BigInt$BigInt} n The BigInt divisor.
   */
  declare export function BigInt$mod_(x: BigInt$BigInt, n: BigInt$BigInt): void;

  /**
   * do x=x*y for bigInts x and y.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt multiplicand and the product result.
   * @param {BigInt$BigInt} y The BigInt multiplier.
   */
  declare export function BigInt$mult_(
    x: BigInt$BigInt,
    y: BigInt$BigInt
  ): void;

  /**
   * do x=x*y mod n for bigInts x,y,n.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt multiplicand and the remainder result.
   * @param {BigInt$BigInt} y The BigInt multiplier.
   * @param {BigInt$BigInt} n The BigInt divisor.
   */
  declare export function BigInt$multMod_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    n: BigInt$BigInt
  ): void;

  /**
   * do x=x**y mod n, where x,y,n are bigInts (n is odd) and ** is exponentiation.
   *   0**0=1.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt base and the remainder result.
   * @param {BigInt$BigInt} y The BigInt exponent.
   * @param {BigInt$BigInt} n The BigInt divisor.
   */
  declare export function BigInt$powMod_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    n: BigInt$BigInt
  ): void;

  /**
   * do b = an n-bit random BigInt.
   *   if s=1, then nth bit (most significant bit) is set to 1. n>=1.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} b The BigInt destination.
   * @param {number} n The number of bits.
   * @param {number} s The sign bit number.
   */
  declare export function BigInt$randBigInt_(
    b: BigInt$BigInt,
    n: number,
    s: number
  ): void;

  /**
   * do ans = a random k-bit true random prime (not just probable prime) with 1 in the msb.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} ans The destination.
   * @param {number} k The number of bits.
   */
  declare export function BigInt$randTruePrime_(
    ans: BigInt$BigInt,
    k: number
  ): void;

  /**
   * do x=x-y for bigInts x and y. Negative answers will be 2s complement.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt minuend and the result difference.
   * @param {BigInt$BigInt} y The BigInt subtrahend .
   */
  declare export function BigInt$sub_(x: BigInt$BigInt, y: BigInt$BigInt): void;

  /**
   * do x=x+(y<<(ys*bpe))
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt accumulator.
   * @param {BigInt$BigInt} y The BigInt addend to be shifted.
   * @param {number} ys The number of shift amount.
   */
  declare export function BigInt$addShift_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    ys: number
  ): void;

  /**
   * do carries and borrows so each element of the bigInt x fits in bpe bits.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt to process.
   */
  declare export function BigInt$carry_(x: BigInt$BigInt): void;

  /**
   * divide x by y giving quotient q and remainder r.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt dividend.
   * @param {BigInt$BigInt} y The BigInt divisor.
   * @param {BigInt$BigInt} q The BigInt quotient.
   * @param {BigInt$BigInt} r The BigInt remainder.
   */
  declare export function BigInt$divide_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    q: BigInt$BigInt,
    r: BigInt$BigInt
  ): void;

  /**
   * do x=floor(x/n) for bigInt x and integer n, and return the remainder.
   *   This never overflows its array.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt dividend and the quotient result.
   * @param {number} n The number divisor.
   * @return {number} A number remainder.
   */
  declare export function BigInt$divInt_(x: BigInt$BigInt, n: number): number;

  /**
   * sets a,b,d to positive bigInts such that d = GCD_(x,y) = a*x-b*y.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt to process.
   * @param {BigInt$BigInt} y The BigInt to process.
   * @param {BigInt$BigInt} d The BigInt to process.
   * @param {BigInt$BigInt} a The BigInt to process.
   * @param {BigInt$BigInt} b The BigInt to process.
   */
  declare export function BigInt$eGCD_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    d: BigInt$BigInt,
    a: BigInt$BigInt,
    b: BigInt$BigInt
  ): void;

  /**
   * do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement.
   *   This never overflows its array.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt to process.
   */
  declare export function BigInt$halve_(x: BigInt$BigInt): void;

  /**
   * left shift bigInt x by n bits.  n<bpe.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt to process.
   * @param {number} n The number of bits.
   */
  declare export function BigInt$leftShift_(x: BigInt$BigInt, n: number): void;

  /**
   * do x=a*x+b*y for bigInts x and y and integers a and b.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt first multiplicand.
   * @param {BigInt$BigInt} y The BigInt second multiplicand.
   * @param {number} a The number first multiplier.
   * @param {number} b The number second multiplier.
   */
  declare export function BigInt$linComb_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    a: number,
    b: number
  ): void;

  /**
   * do x=x+b*(y<<(ys*bpe)) for bigInts x and y, and integers b and ys.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt to process.
   * @param {BigInt$BigInt} y The BigInt to process.
   * @param {number} b The number to process.
   * @param {number} ys The number shift.
   */
  declare export function BigInt$linCombShift_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    b: number,
    ys: number
  ): void;

  /**
   * Montgomery multiplication (see comments where the function is defined)
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt to process.
   * @param {BigInt$BigInt} y The BigInt to process.
   * @param {BigInt$BigInt} n The BigInt to process.
   * @param {number} np The np.
   */
  declare export function BigInt$mont_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    n: BigInt$BigInt,
    np: number
  ): void;

  /**
   * do x=x*n where x is a bigInt and n is an integer.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt multiplicand and the result product.
   * @param {number} n The number multiplier.
   */
  declare export function BigInt$multInt_(x: BigInt$BigInt, n: number): void;

  /**
   * right shift bigInt x by n bits.  0 <= n < bpe.
   *   This never overflows its array.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt to process.
   * @param {number} n The number to process.
   */
  declare export function BigInt$rightShift_(x: BigInt$BigInt, n: number): void;

  /**
   * do x=x*x mod n for bigInts x,n.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt base and the result remainder.
   * @param {BigInt$BigInt} n The BigInt divisor.
   */
  declare export function BigInt$squareMod_(
    x: BigInt$BigInt,
    n: BigInt$BigInt
  ): void;

  /**
   * do x=x-(y<<(ys*bpe)). Negative answers will be 2s complement.
   * @private Intend to be internal function.
   * @param {BigInt$BigInt} x The BigInt minuend and the result difference.
   * @param {BigInt$BigInt} y The BigInt shifted subtrahend .
   * @param {number} ys The number shift amount.
   */
  declare export function BigInt$subShift_(
    x: BigInt$BigInt,
    y: BigInt$BigInt,
    ys: number
  ): void;
}
