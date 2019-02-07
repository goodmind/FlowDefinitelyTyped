declare module "barbellweights" {
  declare export interface options {
    program?: string;
    bar?: number;
    plates?: number[];
    warmup_round_to?: number;
  }
  declare export class BarbellWeight {
    constructor(workingWeight: number, lift: string, options?: options): this;
    getResults(): any;
  }

  declare var npm$namespace$BarbellWeight: {
    getResults: typeof BarbellWeight$getResults
  };
  declare function BarbellWeight$getResults(): void;
}
