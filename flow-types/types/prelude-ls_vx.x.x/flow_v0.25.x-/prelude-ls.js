declare module "prelude-ls" {
  declare var npm$namespace$PreludeLS: {
    id: typeof PreludeLS$id,
    isType: typeof PreludeLS$isType,
    replicate: typeof PreludeLS$replicate,
    each: typeof PreludeLS$each,
    map: typeof PreludeLS$map,
    compact: typeof PreludeLS$compact,
    filter: typeof PreludeLS$filter,
    reject: typeof PreludeLS$reject,
    partition: typeof PreludeLS$partition,
    find: typeof PreludeLS$find,
    head: typeof PreludeLS$head,
    tail: typeof PreludeLS$tail,
    last: typeof PreludeLS$last,
    initial: typeof PreludeLS$initial,
    empty: typeof PreludeLS$empty,
    reverse: typeof PreludeLS$reverse,
    unique: typeof PreludeLS$unique,
    uniqueBy: typeof PreludeLS$uniqueBy,
    fold: typeof PreludeLS$fold,
    foldl: typeof PreludeLS$foldl,
    fold1: typeof PreludeLS$fold1,
    foldl1: typeof PreludeLS$foldl1,
    foldr: typeof PreludeLS$foldr,
    foldr1: typeof PreludeLS$foldr1,
    unfoldr: typeof PreludeLS$unfoldr,
    concat: typeof PreludeLS$concat,
    concatMap: typeof PreludeLS$concatMap,
    flatten: typeof PreludeLS$flatten,
    difference: typeof PreludeLS$difference,
    intersection: typeof PreludeLS$intersection,
    union: typeof PreludeLS$union,
    countBy: typeof PreludeLS$countBy,
    groupBy: typeof PreludeLS$groupBy,
    andList: typeof PreludeLS$andList,
    orList: typeof PreludeLS$orList,
    any: typeof PreludeLS$any,
    all: typeof PreludeLS$all,
    sort: typeof PreludeLS$sort,
    sortWith: typeof PreludeLS$sortWith,
    sortBy: typeof PreludeLS$sortBy,
    sum: typeof PreludeLS$sum,
    product: typeof PreludeLS$product,
    mean: typeof PreludeLS$mean,
    maximum: typeof PreludeLS$maximum,
    minimum: typeof PreludeLS$minimum,
    maximumBy: typeof PreludeLS$maximumBy,
    minimumBy: typeof PreludeLS$minimumBy,
    scan: typeof PreludeLS$scan,
    scanl: typeof PreludeLS$scanl,
    scan1: typeof PreludeLS$scan1,
    scanl1: typeof PreludeLS$scanl1,
    scanr: typeof PreludeLS$scanr,
    scanr1: typeof PreludeLS$scanr1,
    slice: typeof PreludeLS$slice,
    take: typeof PreludeLS$take,
    drop: typeof PreludeLS$drop,
    splitAt: typeof PreludeLS$splitAt,
    takeWhile: typeof PreludeLS$takeWhile,
    dropWhile: typeof PreludeLS$dropWhile,
    span: typeof PreludeLS$span,
    breakList: typeof PreludeLS$breakList,
    zip: typeof PreludeLS$zip,
    zipWith: typeof PreludeLS$zipWith,
    zipAll: typeof PreludeLS$zipAll,
    zipAllWith: typeof PreludeLS$zipAllWith,
    at: typeof PreludeLS$at,
    elemIndex: typeof PreludeLS$elemIndex,
    elemIndices: typeof PreludeLS$elemIndices,
    findIndex: typeof PreludeLS$findIndex,
    findIndices: typeof PreludeLS$findIndices,
    keys: typeof PreludeLS$keys,
    values: typeof PreludeLS$values,
    pairsToObj: typeof PreludeLS$pairsToObj,
    objToPairs: typeof PreludeLS$objToPairs,
    listsToObj: typeof PreludeLS$listsToObj,
    objToLists: typeof PreludeLS$objToLists,
    split: typeof PreludeLS$split,
    join: typeof PreludeLS$join,
    lines: typeof PreludeLS$lines,
    unlines: typeof PreludeLS$unlines,
    words: typeof PreludeLS$words,
    unwords: typeof PreludeLS$unwords,
    chars: typeof PreludeLS$chars,
    unchars: typeof PreludeLS$unchars,
    repeat: typeof PreludeLS$repeat,
    capitalize: typeof PreludeLS$capitalize,
    camelize: typeof PreludeLS$camelize,
    dasherize: typeof PreludeLS$dasherize,
    breakStr: typeof PreludeLS$breakStr,
    apply: typeof PreludeLS$apply,
    curry: typeof PreludeLS$curry,
    flip: typeof PreludeLS$flip,
    fix: typeof PreludeLS$fix,
    over: typeof PreludeLS$over,
    max: typeof PreludeLS$max,
    min: typeof PreludeLS$min,
    negate: typeof PreludeLS$negate,
    abs: typeof PreludeLS$abs,
    signum: typeof PreludeLS$signum,
    quot: typeof PreludeLS$quot,
    rem: typeof PreludeLS$rem,
    div: typeof PreludeLS$div,
    mod: typeof PreludeLS$mod,
    recip: typeof PreludeLS$recip,
    exp: typeof PreludeLS$exp,
    sqrt: typeof PreludeLS$sqrt,
    ln: typeof PreludeLS$ln,
    pow: typeof PreludeLS$pow,
    sin: typeof PreludeLS$sin,
    cos: typeof PreludeLS$cos,
    tan: typeof PreludeLS$tan,
    asin: typeof PreludeLS$asin,
    acos: typeof PreludeLS$acos,
    atan: typeof PreludeLS$atan,
    atan2: typeof PreludeLS$atan2,
    truncate: typeof PreludeLS$truncate,
    round: typeof PreludeLS$round,
    ceiling: typeof PreludeLS$ceiling,
    floor: typeof PreludeLS$floor,
    isItNaN: typeof PreludeLS$isItNaN,
    even: typeof PreludeLS$even,
    odd: typeof PreludeLS$odd,
    gcd: typeof PreludeLS$gcd,
    lcm: typeof PreludeLS$lcm,
    pi: typeof PreludeLS$pi,
    tau: typeof PreludeLS$tau,

    Obj: typeof npm$namespace$PreludeLS$Obj,
    Str: typeof npm$namespace$PreludeLS$Str
  };
  declare export function PreludeLS$id<A>(x: A): A;

  declare export function PreludeLS$isType<A>(type: string): (x: A) => boolean;

  declare export function PreludeLS$isType<A>(type: string, x: A): boolean;

  declare export function PreludeLS$replicate<A>(n: number): (x: A) => A[];

  declare export function PreludeLS$replicate<A>(n: number, x: A): A[];

  declare export function PreludeLS$each<A>(
    f: (x: A) => void
  ): (xs: A[]) => A[];

  declare export function PreludeLS$each<A>(f: (x: A) => void, xs: A[]): A[];

  declare export function PreludeLS$map<A, B>(f: (x: A) => B): (xs: A[]) => B[];

  declare export function PreludeLS$map<A, B>(f: (x: A) => B, xs: A[]): B[];

  declare export function PreludeLS$compact<A>(xs: A[]): A[];

  declare export function PreludeLS$filter<A>(
    f: (x: A) => boolean
  ): (xs: A[]) => A[];

  declare export function PreludeLS$filter<A>(
    f: (x: A) => boolean,
    xs: A[]
  ): A[];

  declare export function PreludeLS$reject<A>(
    f: (x: A) => boolean
  ): (xs: A[]) => A[];

  declare export function PreludeLS$reject<A>(
    f: (x: A) => boolean,
    xs: A[]
  ): A[];

  declare export function PreludeLS$partition<A>(
    f: (x: A) => Boolean
  ): (xs: A[]) => [A[], A[]];

  declare export function PreludeLS$partition<A>(
    f: (x: A) => Boolean,
    xs: A[]
  ): [A[], A[]];

  declare export function PreludeLS$find<A>(
    f: (x: A) => Boolean
  ): (xs: A[]) => A;

  declare export function PreludeLS$find<A>(f: (x: A) => Boolean, xs: A[]): A;

  declare export function PreludeLS$head<A>(xs: A[]): A;

  declare export function PreludeLS$tail<A>(xs: A[]): A[];

  declare export function PreludeLS$last<A>(xs: A[]): A;

  declare export function PreludeLS$initial<A>(xs: A[]): A[];

  declare export function PreludeLS$empty<A>(xs: A[]): boolean;

  declare export function PreludeLS$reverse<A>(xs: A[]): A[];

  declare export function PreludeLS$unique<A>(xs: A[]): A[];

  declare export function PreludeLS$uniqueBy<A, B>(
    f: (x: A) => B
  ): (xs: A[]) => A[];

  declare export function PreludeLS$uniqueBy<A, B>(
    f: (x: A) => B,
    xs: A[]
  ): A[];

  declare export function PreludeLS$fold<A, B>(
    f: (x: A) => (y: B) => A
  ): (memo: A) => (xs: B[]) => A;

  declare export function PreludeLS$fold<A, B>(
    f: (x: A) => (y: B) => A,
    memo: A
  ): (xs: B[]) => A;

  declare export function PreludeLS$fold<A, B>(
    f: (x: A) => (y: B) => A,
    memo: A,
    xs: B[]
  ): A;

  declare export function PreludeLS$foldl<A, B>(
    f: (x: A) => (y: B) => A
  ): (memo: A) => (xs: B[]) => A;

  declare export function PreludeLS$foldl<A, B>(
    f: (x: A) => (y: B) => A,
    memo: A
  ): (xs: B[]) => A;

  declare export function PreludeLS$foldl<A, B>(
    f: (x: A) => (y: B) => A,
    memo: A,
    xs: B[]
  ): A;

  declare export function PreludeLS$fold1<A>(
    f: (x: A) => (y: A) => A
  ): (xs: A[]) => A;

  declare export function PreludeLS$fold1<A>(
    f: (x: A) => (y: A) => A,
    xs: A[]
  ): A;

  declare export function PreludeLS$foldl1<A>(
    f: (x: A) => (y: A) => A
  ): (xs: A[]) => A;

  declare export function PreludeLS$foldl1<A>(
    f: (x: A) => (y: A) => A,
    xs: A[]
  ): A;

  declare export function PreludeLS$foldr<A, B>(
    f: (x: A) => (y: B) => B
  ): (memo: B) => (xs: A[]) => B;

  declare export function PreludeLS$foldr<A, B>(
    f: (x: A) => (y: B) => B,
    memo: B
  ): (xs: A[]) => B;

  declare export function PreludeLS$foldr<A, B>(
    f: (x: A) => (y: B) => B,
    memo: B,
    xs: A[]
  ): B;

  declare export function PreludeLS$foldr1<A>(
    f: (x: A) => (y: A) => A
  ): (xs: A[]) => A;

  declare export function PreludeLS$foldr1<A>(
    f: (x: A) => (y: A) => A,
    xs: A[]
  ): A;

  declare export function PreludeLS$unfoldr<A, B>(
    f: (x: B) => [A, B] | void
  ): (x: B) => A[];

  declare export function PreludeLS$unfoldr<A, B>(
    f: (x: B) => [A, B] | void,
    x: B
  ): A[];

  declare export function PreludeLS$concat<A>(xss: A[][]): A[];

  declare export function PreludeLS$concatMap<A, B>(
    f: (x: A) => B[]
  ): (xs: A[]) => B[];

  declare export function PreludeLS$concatMap<A, B>(
    f: (x: A) => B[],
    xs: A[]
  ): B[];

  declare export function PreludeLS$flatten(xs: any[]): any[];

  declare export function PreludeLS$difference<A>(...xss: A[][]): A[];

  declare export function PreludeLS$intersection<A>(...xss: A[][]): A[];

  declare export function PreludeLS$union<A>(...xss: A[][]): A[];

  declare export function PreludeLS$countBy<A, B>(
    f: (x: A) => B
  ): (xs: A[]) => any;

  declare export function PreludeLS$countBy<A, B>(f: (x: A) => B, xs: A[]): any;

  declare export function PreludeLS$groupBy<A, B>(
    f: (x: A) => B
  ): (xs: A[]) => any;

  declare export function PreludeLS$groupBy<A, B>(f: (x: A) => B, xs: A[]): any;

  declare export function PreludeLS$andList<A>(xs: A[]): boolean;

  declare export function PreludeLS$orList<A>(xs: A[]): boolean;

  declare export function PreludeLS$any<A>(
    f: (x: A) => boolean
  ): (xs: A[]) => boolean;

  declare export function PreludeLS$any<A>(
    f: (x: A) => boolean,
    xs: A[]
  ): boolean;

  declare export function PreludeLS$all<A>(
    f: (x: A) => boolean
  ): (xs: A[]) => boolean;

  declare export function PreludeLS$all<A>(
    f: (x: A) => boolean,
    xs: A[]
  ): boolean;

  declare export function PreludeLS$sort<A>(xs: A[]): A[];

  declare export function PreludeLS$sortWith<A>(
    f: (x: A) => (y: A) => number
  ): (xs: A[]) => A[];

  declare export function PreludeLS$sortWith<A>(
    f: (x: A) => (y: A) => number,
    xs: A[]
  ): A[];

  declare export function PreludeLS$sortBy<A, B>(
    f: (x: A) => B
  ): (xs: A[]) => A[];

  declare export function PreludeLS$sortBy<A, B>(f: (x: A) => B, xs: A[]): A[];

  declare export function PreludeLS$sum(xs: number[]): number;

  declare export function PreludeLS$product(xs: number[]): number;

  declare export function PreludeLS$mean(xs: number[]): number;

  declare export function PreludeLS$maximum<A>(xs: A[]): A;

  declare export function PreludeLS$minimum<A>(xs: A[]): A;

  declare export function PreludeLS$maximumBy<A, B>(
    f: (x: A) => B
  ): (xs: A[]) => A;

  declare export function PreludeLS$maximumBy<A, B>(f: (x: A) => B, xs: A[]): A;

  declare export function PreludeLS$minimumBy<A, B>(
    f: (x: A) => B
  ): (xs: A[]) => A;

  declare export function PreludeLS$minimumBy<A, B>(f: (x: A) => B, xs: A[]): A;

  declare export function PreludeLS$scan<A, B>(
    f: (x: A) => (y: B) => A
  ): (memo: A) => (xs: B[]) => A[];

  declare export function PreludeLS$scan<A, B>(
    f: (x: A) => (y: B) => A,
    memo: A
  ): (xs: B[]) => A[];

  declare export function PreludeLS$scan<A, B>(
    f: (x: A) => (y: B) => A,
    memo: A,
    xs: B[]
  ): A[];

  declare export function PreludeLS$scanl<A, B>(
    f: (x: A) => (y: B) => A
  ): (memo: A) => (xs: B[]) => A[];

  declare export function PreludeLS$scanl<A, B>(
    f: (x: A) => (y: B) => A,
    memo: A
  ): (xs: B[]) => A[];

  declare export function PreludeLS$scanl<A, B>(
    f: (x: A) => (y: B) => A,
    memo: A,
    xs: B[]
  ): A[];

  declare export function PreludeLS$scan1<A>(
    f: (x: A) => (y: A) => A
  ): (xs: A[]) => A[];

  declare export function PreludeLS$scan1<A>(
    f: (x: A) => (y: A) => A,
    xs: A[]
  ): A[];

  declare export function PreludeLS$scanl1<A>(
    f: (x: A) => (y: A) => A
  ): (xs: A[]) => A[];

  declare export function PreludeLS$scanl1<A>(
    f: (x: A) => (y: A) => A,
    xs: A[]
  ): A[];

  declare export function PreludeLS$scanr<A, B>(
    f: (x: A) => (y: B) => B
  ): (memo: B) => (xs: A[]) => B[];

  declare export function PreludeLS$scanr<A, B>(
    f: (x: A) => (y: B) => B,
    memo: B
  ): (xs: A[]) => B[];

  declare export function PreludeLS$scanr<A, B>(
    f: (x: A) => (y: B) => B,
    memo: B,
    xs: A[]
  ): B[];

  declare export function PreludeLS$scanr1<A>(
    f: (x: A) => (y: A) => A
  ): (xs: A[]) => A[];

  declare export function PreludeLS$scanr1<A>(
    f: (x: A) => (y: A) => A,
    xs: A[]
  ): A[];

  declare export function PreludeLS$slice<A>(
    x: number
  ): (y: number) => (xs: A[]) => A[];

  declare export function PreludeLS$slice<A>(
    x: number,
    y: number
  ): (xs: A[]) => A[];

  declare export function PreludeLS$slice<A>(
    x: number,
    y: number,
    xs: A[]
  ): A[];

  declare export function PreludeLS$take<A>(n: number): (xs: A[]) => A[];

  declare export function PreludeLS$take<A>(n: number, xs: A[]): A[];

  declare export function PreludeLS$drop<A>(n: number): (xs: A[]) => A[];

  declare export function PreludeLS$drop<A>(n: number, xs: A[]): A[];

  declare export function PreludeLS$splitAt<A>(
    n: number
  ): (xs: A[]) => [A[], A[]];

  declare export function PreludeLS$splitAt<A>(n: number, xs: A[]): [A[], A[]];

  declare export function PreludeLS$takeWhile<A>(
    p: (x: A) => boolean
  ): (xs: A[]) => A[];

  declare export function PreludeLS$takeWhile<A>(
    p: (x: A) => boolean,
    xs: A[]
  ): A[];

  declare export function PreludeLS$dropWhile<A>(
    p: (x: A) => boolean
  ): (xs: A[]) => A[];

  declare export function PreludeLS$dropWhile<A>(
    p: (x: A) => boolean,
    xs: A[]
  ): A[];

  declare export function PreludeLS$span<A>(
    p: (x: A) => boolean
  ): (xs: A[]) => [A[], A[]];

  declare export function PreludeLS$span<A>(
    p: (x: A) => boolean,
    xs: A[]
  ): [A[], A[]];

  declare export function PreludeLS$breakList<A>(
    p: (x: A) => boolean
  ): (xs: A[]) => [A[], A[]];

  declare export function PreludeLS$breakList<A>(
    p: (x: A) => boolean,
    xs: A[]
  ): [A[], A[]];

  declare export function PreludeLS$zip<A, B>(xs: A[]): (ys: B[]) => [A, B][];

  declare export function PreludeLS$zip<A, B>(xs: A[], ys: B[]): [A, B][];

  declare export function PreludeLS$zipWith<A, B, C>(
    f: (x: A) => (y: B) => C
  ): (xs: A[]) => (ys: B[]) => C[];

  declare export function PreludeLS$zipWith<A, B, C>(
    f: (x: A) => (y: B) => C,
    xs: A[]
  ): (ys: B[]) => C[];

  declare export function PreludeLS$zipWith<A, B, C>(
    f: (x: A) => (y: B) => C,
    xs: A[],
    ys: B[]
  ): C[];

  declare export function PreludeLS$zipAll<A>(...xss: A[][]): A[][];

  declare export function PreludeLS$zipAllWith<A, B>(
    f: (...xs: A[]) => B,
    ...xss: A[][]
  ): B[];

  declare export function PreludeLS$at<A>(n: number): (xs: A[]) => A;

  declare export function PreludeLS$at<A>(n: number, xs: A[]): A;

  declare export function PreludeLS$elemIndex<A>(x: A): (xs: A[]) => number;

  declare export function PreludeLS$elemIndex<A>(x: A, xs: A[]): number;

  declare export function PreludeLS$elemIndices<A>(x: A): (xs: A[]) => number[];

  declare export function PreludeLS$elemIndices<A>(x: A, xs: A[]): number[];

  declare export function PreludeLS$findIndex<A>(
    f: (x: A) => boolean
  ): (xs: A[]) => number;

  declare export function PreludeLS$findIndex<A>(
    f: (x: A) => boolean,
    xs: A[]
  ): number;

  declare export function PreludeLS$findIndices<A>(
    f: (x: A) => boolean
  ): (xs: A[]) => number[];

  declare export function PreludeLS$findIndices<A>(
    f: (x: A) => boolean,
    xs: A[]
  ): number[];

  declare export function PreludeLS$keys<A>(object: {
    [key: string]: A
  }): string[];

  declare export function PreludeLS$keys<A>(object: {
    [key: number]: A
  }): number[];

  declare export function PreludeLS$values<A>(object: {
    [key: string]: A
  }): A[];

  declare export function PreludeLS$values<A>(object: {
    [key: number]: A
  }): A[];

  declare export function PreludeLS$pairsToObj<A>(
    object: [string, A][]
  ): {
    [key: string]: A
  };

  declare export function PreludeLS$pairsToObj<A>(
    object: [number, A][]
  ): {
    [key: number]: A
  };

  declare export function PreludeLS$objToPairs<A>(object: {
    [key: string]: A
  }): [string, A][];

  declare export function PreludeLS$objToPairs<A>(object: {
    [key: number]: A
  }): [number, A][];

  declare export function PreludeLS$listsToObj<A>(
    keys: string[]
  ): (
    values: A[]
  ) => {
    [key: string]: A
  };

  declare export function PreludeLS$listsToObj<A>(
    keys: string[],
    values: A[]
  ): {
    [key: string]: A
  };

  declare export function PreludeLS$listsToObj<A>(
    keys: number[]
  ): (
    values: A[]
  ) => {
    [key: number]: A
  };

  declare export function PreludeLS$listsToObj<A>(
    keys: number[],
    values: A[]
  ): {
    [key: number]: A
  };

  declare export function PreludeLS$objToLists<A>(object: {
    [key: string]: A
  }): [string[], A[]];

  declare export function PreludeLS$objToLists<A>(object: {
    [key: number]: A
  }): [number[], A[]];

  declare export function PreludeLS$empty<A>(object: any): boolean;

  declare export function PreludeLS$each<A>(
    f: (x: A) => void
  ): (object: {
    [key: string]: A
  }) => {
    [key: string]: A
  };

  declare export function PreludeLS$each<A>(
    f: (x: A) => void,
    object: {
      [key: string]: A
    }
  ): {
    [key: string]: A
  };

  declare export function PreludeLS$each<A>(
    f: (x: A) => void
  ): (object: {
    [key: number]: A
  }) => {
    [key: number]: A
  };

  declare export function PreludeLS$each<A>(
    f: (x: A) => void,
    object: {
      [key: number]: A
    }
  ): {
    [key: number]: A
  };

  declare export function PreludeLS$map<A, B>(
    f: (x: A) => B
  ): (object: {
    [key: string]: A
  }) => {
    [key: string]: B
  };

  declare export function PreludeLS$map<A, B>(
    f: (x: A) => B,
    object: {
      [key: string]: A
    }
  ): {
    [key: string]: B
  };

  declare export function PreludeLS$map<A, B>(
    f: (x: A) => B
  ): (object: {
    [key: number]: A
  }) => {
    [key: number]: B
  };

  declare export function PreludeLS$map<A, B>(
    f: (x: A) => B,
    object: {
      [key: number]: A
    }
  ): {
    [key: number]: B
  };

  declare export function PreludeLS$compact<A>(object: {
    [key: string]: A
  }): {
    [key: string]: A
  };

  declare export function PreludeLS$compact<A>(object: {
    [key: number]: A
  }): {
    [key: number]: A
  };

  declare export function PreludeLS$filter<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: string]: A
  }) => {
    [key: string]: A
  };

  declare export function PreludeLS$filter<A>(
    f: (x: A) => boolean,
    object: {
      [key: string]: A
    }
  ): {
    [key: string]: A
  };

  declare export function PreludeLS$filter<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: number]: A
  }) => {
    [key: number]: A
  };

  declare export function PreludeLS$filter<A>(
    f: (x: A) => boolean,
    object: {
      [key: number]: A
    }
  ): {
    [key: number]: A
  };

  declare export function PreludeLS$reject<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: string]: A
  }) => {
    [key: string]: A
  };

  declare export function PreludeLS$reject<A>(
    f: (x: A) => boolean,
    object: {
      [key: string]: A
    }
  ): {
    [key: string]: A
  };

  declare export function PreludeLS$reject<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: number]: A
  }) => {
    [key: number]: A
  };

  declare export function PreludeLS$reject<A>(
    f: (x: A) => boolean,
    object: {
      [key: number]: A
    }
  ): {
    [key: number]: A
  };

  declare export function PreludeLS$partition<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: string]: A
  }) => [
    {
      [key: string]: A
    },
    {
      [key: string]: A
    }
  ];

  declare export function PreludeLS$partition<A>(
    f: (x: A) => boolean,
    object: {
      [key: string]: A
    }
  ): [
    {
      [key: string]: A
    },
    {
      [key: string]: A
    }
  ];

  declare export function PreludeLS$partition<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: number]: A
  }) => [
    {
      [key: number]: A
    },
    {
      [key: number]: A
    }
  ];

  declare export function PreludeLS$partition<A>(
    f: (x: A) => boolean,
    object: {
      [key: number]: A
    }
  ): [
    {
      [key: number]: A
    },
    {
      [key: number]: A
    }
  ];

  declare export function PreludeLS$find<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: string]: A
  }) => A;

  declare export function PreludeLS$find<A>(
    f: (x: A) => boolean,
    object: {
      [key: string]: A
    }
  ): A;

  declare export function PreludeLS$find<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: number]: A
  }) => A;

  declare export function PreludeLS$find<A>(
    f: (x: A) => boolean,
    object: {
      [key: number]: A
    }
  ): A;

  declare var npm$namespace$PreludeLS$Obj: {
    empty: typeof PreludeLS$Obj$empty,
    each: typeof PreludeLS$Obj$each,
    map: typeof PreludeLS$Obj$map,
    compact: typeof PreludeLS$Obj$compact,
    filter: typeof PreludeLS$Obj$filter,
    reject: typeof PreludeLS$Obj$reject,
    partition: typeof PreludeLS$Obj$partition,
    find: typeof PreludeLS$Obj$find
  };
  declare export function PreludeLS$Obj$empty<A>(object: any): boolean;

  declare export function PreludeLS$Obj$each<A>(
    f: (x: A) => void
  ): (object: {
    [key: string]: A
  }) => {
    [key: string]: A
  };

  declare export function PreludeLS$Obj$each<A>(
    f: (x: A) => void,
    object: {
      [key: string]: A
    }
  ): {
    [key: string]: A
  };

  declare export function PreludeLS$Obj$each<A>(
    f: (x: A) => void
  ): (object: {
    [key: number]: A
  }) => {
    [key: number]: A
  };

  declare export function PreludeLS$Obj$each<A>(
    f: (x: A) => void,
    object: {
      [key: number]: A
    }
  ): {
    [key: number]: A
  };

  declare export function PreludeLS$Obj$map<A, B>(
    f: (x: A) => B
  ): (object: {
    [key: string]: A
  }) => {
    [key: string]: B
  };

  declare export function PreludeLS$Obj$map<A, B>(
    f: (x: A) => B,
    object: {
      [key: string]: A
    }
  ): {
    [key: string]: B
  };

  declare export function PreludeLS$Obj$map<A, B>(
    f: (x: A) => B
  ): (object: {
    [key: number]: A
  }) => {
    [key: number]: B
  };

  declare export function PreludeLS$Obj$map<A, B>(
    f: (x: A) => B,
    object: {
      [key: number]: A
    }
  ): {
    [key: number]: B
  };

  declare export function PreludeLS$Obj$compact<A>(object: {
    [key: string]: A
  }): {
    [key: string]: A
  };

  declare export function PreludeLS$Obj$compact<A>(object: {
    [key: number]: A
  }): {
    [key: number]: A
  };

  declare export function PreludeLS$Obj$filter<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: string]: A
  }) => {
    [key: string]: A
  };

  declare export function PreludeLS$Obj$filter<A>(
    f: (x: A) => boolean,
    object: {
      [key: string]: A
    }
  ): {
    [key: string]: A
  };

  declare export function PreludeLS$Obj$filter<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: number]: A
  }) => {
    [key: number]: A
  };

  declare export function PreludeLS$Obj$filter<A>(
    f: (x: A) => boolean,
    object: {
      [key: number]: A
    }
  ): {
    [key: number]: A
  };

  declare export function PreludeLS$Obj$reject<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: string]: A
  }) => {
    [key: string]: A
  };

  declare export function PreludeLS$Obj$reject<A>(
    f: (x: A) => boolean,
    object: {
      [key: string]: A
    }
  ): {
    [key: string]: A
  };

  declare export function PreludeLS$Obj$reject<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: number]: A
  }) => {
    [key: number]: A
  };

  declare export function PreludeLS$Obj$reject<A>(
    f: (x: A) => boolean,
    object: {
      [key: number]: A
    }
  ): {
    [key: number]: A
  };

  declare export function PreludeLS$Obj$partition<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: string]: A
  }) => [
    {
      [key: string]: A
    },
    {
      [key: string]: A
    }
  ];

  declare export function PreludeLS$Obj$partition<A>(
    f: (x: A) => boolean,
    object: {
      [key: string]: A
    }
  ): [
    {
      [key: string]: A
    },
    {
      [key: string]: A
    }
  ];

  declare export function PreludeLS$Obj$partition<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: number]: A
  }) => [
    {
      [key: number]: A
    },
    {
      [key: number]: A
    }
  ];

  declare export function PreludeLS$Obj$partition<A>(
    f: (x: A) => boolean,
    object: {
      [key: number]: A
    }
  ): [
    {
      [key: number]: A
    },
    {
      [key: number]: A
    }
  ];

  declare export function PreludeLS$Obj$find<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: string]: A
  }) => A;

  declare export function PreludeLS$Obj$find<A>(
    f: (x: A) => boolean,
    object: {
      [key: string]: A
    }
  ): A;

  declare export function PreludeLS$Obj$find<A>(
    f: (x: A) => boolean
  ): (object: {
    [key: number]: A
  }) => A;

  declare export function PreludeLS$Obj$find<A>(
    f: (x: A) => boolean,
    object: {
      [key: number]: A
    }
  ): A;

  declare export function PreludeLS$split(
    separator: string
  ): (str: string) => string[];

  declare export function PreludeLS$split(
    separator: string,
    str: string
  ): string[];

  declare export function PreludeLS$join(
    separator: string
  ): (xs: string[]) => string;

  declare export function PreludeLS$join(
    separator: string,
    xs: string[]
  ): string;

  declare export function PreludeLS$lines(str: string): string[];

  declare export function PreludeLS$unlines(xs: string[]): string;

  declare export function PreludeLS$words(str: string): string[];

  declare export function PreludeLS$unwords(xs: string[]): string;

  declare export function PreludeLS$chars(str: string): string[];

  declare export function PreludeLS$unchars(xs: string[]): string;

  declare export function PreludeLS$repeat(n: number): (str: string) => string;

  declare export function PreludeLS$repeat(n: number, str: string): string;

  declare export function PreludeLS$capitalize(str: string): string;

  declare export function PreludeLS$camelize(str: string): string;

  declare export function PreludeLS$dasherize(str: string): string;

  declare export function PreludeLS$empty(str: string): boolean;

  declare export function PreludeLS$reverse(str: string): string;

  declare export function PreludeLS$slice(
    x: number
  ): (y: number) => (str: string) => string;

  declare export function PreludeLS$slice(
    x: number,
    y: number
  ): (str: string) => string;

  declare export function PreludeLS$slice(
    x: number,
    y: number,
    str: string
  ): string;

  declare export function PreludeLS$take(n: number): (str: string) => string;

  declare export function PreludeLS$take(n: number, str: string): string;

  declare export function PreludeLS$drop(n: number): (str: string) => string;

  declare export function PreludeLS$drop(n: number, str: string): string;

  declare export function PreludeLS$splitAt(
    n: number
  ): (str: string) => [string, string];

  declare export function PreludeLS$splitAt(
    n: number,
    str: string
  ): [string, string];

  declare export function PreludeLS$takeWhile(
    f: (str: string) => boolean
  ): (str: string) => string;

  declare export function PreludeLS$takeWhile(
    f: (str: string) => boolean,
    str: string
  ): string;

  declare export function PreludeLS$dropWhile(
    f: (str: string) => boolean
  ): (str: string) => string;

  declare export function PreludeLS$dropWhile(
    f: (str: string) => boolean,
    str: string
  ): string;

  declare export function PreludeLS$span(
    f: (str: string) => boolean
  ): (str: string) => [string, string];

  declare export function PreludeLS$span(
    f: (str: string) => boolean,
    str: string
  ): [string, string];

  declare export function PreludeLS$breakStr(
    f: (str: string) => boolean
  ): (str: string) => [string, string];

  declare export function PreludeLS$breakStr(
    f: (str: string) => boolean,
    str: string
  ): [string, string];

  declare var npm$namespace$PreludeLS$Str: {
    empty: typeof PreludeLS$Str$empty,
    reverse: typeof PreludeLS$Str$reverse,
    slice: typeof PreludeLS$Str$slice,
    take: typeof PreludeLS$Str$take,
    drop: typeof PreludeLS$Str$drop,
    splitAt: typeof PreludeLS$Str$splitAt,
    takeWhile: typeof PreludeLS$Str$takeWhile,
    dropWhile: typeof PreludeLS$Str$dropWhile,
    span: typeof PreludeLS$Str$span,
    breakStr: typeof PreludeLS$Str$breakStr
  };
  declare export function PreludeLS$Str$empty(str: string): boolean;

  declare export function PreludeLS$Str$reverse(str: string): string;

  declare export function PreludeLS$Str$slice(
    x: number
  ): (y: number) => (str: string) => string;

  declare export function PreludeLS$Str$slice(
    x: number,
    y: number
  ): (str: string) => string;

  declare export function PreludeLS$Str$slice(
    x: number,
    y: number,
    str: string
  ): string;

  declare export function PreludeLS$Str$take(
    n: number
  ): (str: string) => string;

  declare export function PreludeLS$Str$take(n: number, str: string): string;

  declare export function PreludeLS$Str$drop(
    n: number
  ): (str: string) => string;

  declare export function PreludeLS$Str$drop(n: number, str: string): string;

  declare export function PreludeLS$Str$splitAt(
    n: number
  ): (str: string) => [string, string];

  declare export function PreludeLS$Str$splitAt(
    n: number,
    str: string
  ): [string, string];

  declare export function PreludeLS$Str$takeWhile(
    f: (str: string) => boolean
  ): (str: string) => string;

  declare export function PreludeLS$Str$takeWhile(
    f: (str: string) => boolean,
    str: string
  ): string;

  declare export function PreludeLS$Str$dropWhile(
    f: (str: string) => boolean
  ): (str: string) => string;

  declare export function PreludeLS$Str$dropWhile(
    f: (str: string) => boolean,
    str: string
  ): string;

  declare export function PreludeLS$Str$span(
    f: (str: string) => boolean
  ): (str: string) => [string, string];

  declare export function PreludeLS$Str$span(
    f: (str: string) => boolean,
    str: string
  ): [string, string];

  declare export function PreludeLS$Str$breakStr(
    f: (str: string) => boolean
  ): (str: string) => [string, string];

  declare export function PreludeLS$Str$breakStr(
    f: (str: string) => boolean,
    str: string
  ): [string, string];

  declare export function PreludeLS$apply<A, B>(
    f: (...args: A[]) => B
  ): (args: A[]) => B;

  declare export function PreludeLS$apply<A, B>(
    f: (...args: A[]) => B,
    args: A[]
  ): B;

  declare export function PreludeLS$curry(f: Function): Function;

  declare export function PreludeLS$flip<A, B, C>(
    f: (x: A) => (y: B) => C
  ): (y: B) => (x: A) => C;

  declare export function PreludeLS$flip<A, B, C>(
    f: (x: A) => (y: B) => C,
    y: B
  ): (x: A) => C;

  declare export function PreludeLS$flip<A, B, C>(
    f: (x: A) => (y: B) => C,
    y: B,
    x: A
  ): C;

  declare export function PreludeLS$fix(f: Function): Function;

  declare export function PreludeLS$over<A, B, C>(
    f: (x: B) => (y: B) => C | ((x: B, y: B) => C),
    g: (x: A) => B,
    x: A,
    y: A
  ): C;

  declare export function PreludeLS$over<A, B, C>(
    f: (x: B, y: B) => C | ((x: B) => (y: B) => C),
    g: (x: A) => B,
    x: A
  ): (y: A) => C;

  declare export function PreludeLS$over<A, B, C>(
    f: (x: B, y: B) => C,
    g: (x: A) => B
  ): (x: A, y: A) => C;

  declare export function PreludeLS$over<A, B, C>(
    f: (x: B) => (y: B) => C,
    g: (x: A) => B
  ): (x: A) => (y: A) => C;

  declare export function PreludeLS$over<A, B, C>(
    f: (x: B, y: B) => C
  ): (g: (x: A) => B) => (x: A, y: A) => C;

  declare export function PreludeLS$over<A, B, C>(
    f: (x: B) => (y: B) => C
  ): (g: (x: A) => B) => (x: A) => (y: A) => C;

  declare export function PreludeLS$max<Comparable>(
    x: Comparable
  ): (y: Comparable) => Comparable;

  declare export function PreludeLS$max<Comparable>(
    x: Comparable,
    y: Comparable
  ): Comparable;

  declare export function PreludeLS$min<Comparable>(
    x: Comparable
  ): (y: Comparable) => Comparable;

  declare export function PreludeLS$min<Comparable>(
    x: Comparable,
    y: Comparable
  ): Comparable;

  declare export function PreludeLS$negate(x: number): number;

  declare export function PreludeLS$abs(x: number): number;

  declare export function PreludeLS$signum(x: number): number;

  declare export function PreludeLS$quot(x: number): (y: number) => number;

  declare export function PreludeLS$quot(x: number, y: number): number;

  declare export function PreludeLS$rem(x: number): (y: number) => number;

  declare export function PreludeLS$rem(x: number, y: number): number;

  declare export function PreludeLS$div(x: number): (y: number) => number;

  declare export function PreludeLS$div(x: number, y: number): number;

  declare export function PreludeLS$mod(x: number): (y: number) => number;

  declare export function PreludeLS$mod(x: number, y: number): number;

  declare export function PreludeLS$recip(x: number): number;

  declare export var PreludeLS$pi: number;

  declare export var PreludeLS$tau: number;

  declare export function PreludeLS$exp(x: number): number;

  declare export function PreludeLS$sqrt(x: number): number;

  declare export function PreludeLS$ln(x: number): number;

  declare export function PreludeLS$pow(x: number): (y: number) => number;

  declare export function PreludeLS$pow(x: number, y: number): number;

  declare export function PreludeLS$sin(x: number): number;

  declare export function PreludeLS$cos(x: number): number;

  declare export function PreludeLS$tan(x: number): number;

  declare export function PreludeLS$asin(x: number): number;

  declare export function PreludeLS$acos(x: number): number;

  declare export function PreludeLS$atan(x: number): number;

  declare export function PreludeLS$atan2(x: number, y: number): number;

  declare export function PreludeLS$truncate(x: number): number;

  declare export function PreludeLS$round(x: number): number;

  declare export function PreludeLS$ceiling(x: number): number;

  declare export function PreludeLS$floor(x: number): number;

  declare export function PreludeLS$isItNaN(x: number): boolean;

  declare export function PreludeLS$even(x: number): boolean;

  declare export function PreludeLS$odd(x: number): boolean;

  declare export function PreludeLS$gcd(x: number): (y: number) => number;

  declare export function PreludeLS$gcd(x: number, y: number): number;

  declare export function PreludeLS$lcm(x: number): (y: number) => number;

  declare export function PreludeLS$lcm(x: number, y: number): number;

  declare export default typeof PreludeLS;
}
