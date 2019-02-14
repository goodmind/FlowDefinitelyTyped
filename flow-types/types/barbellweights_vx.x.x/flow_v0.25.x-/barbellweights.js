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
    BarbellWeight: typeof npm$namespace$BarbellWeight$BarbellWeight
  };

  declare var npm$namespace$BarbellWeight$BarbellWeight: {
    getResults: typeof BarbellWeight$BarbellWeight$getResults
  };
  declare function BarbellWeight$BarbellWeight$getResults(): void;
}
