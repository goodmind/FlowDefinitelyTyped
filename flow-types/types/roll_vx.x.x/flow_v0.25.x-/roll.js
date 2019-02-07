declare module "roll" {
  declare type RollTransformation =
    | RollTransformationKey
    | [RollTransformationKey, number]
    | ((results: number[]) => number[]);
  declare type RollTransformationKey =
    | "sum"
    | "add"
    | "subtract"
    | "multiply"
    | "divide"
    | "best-of"
    | "worst-of";
  declare interface RollObject {
    quantity: number;
    sides: number;
    transformations: RollTransformation[];
    toString: () => string;
  }
  declare interface RollOutput {
    input: RollObject;
    calculations: number[];
    rolled: number[];
    result: number;
  }
  declare class InvalidInputError mixins Error {
    name: "InvalidInputError";
  }
  declare class Roll {
    static InvalidInputError: InvalidInputError;
    constructor(seed?: () => number): this;

    /**
     * Validate user input
     */
    validate(input: string): boolean;

    /**
     * Parse a string into a roll object
     * @throws InvalidInputError
     */
    parse(
      input: string
    ): {
      quantity: number,
      sides: number,
      transformations: RollTransformation[],
      toString: () => string
    };

    /**
     * Roll based on a string or roll object
     */
    roll(input: string | RollObject): RollOutput;
  }
  declare module.exports: typeof Roll;
}
