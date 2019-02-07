declare module "legal-eagle" {
  declare function legalEagle(
    options: legalEagle$legalEagle$Options,
    cb: (
      err: Error | null,
      licenseSummary: legalEagle$legalEagle$LicenseLookup
    ) => void
  ): void;

  declare interface legalEagle$Options {
    path: string;
    overrides?: legalEagle$LicenseLookup;
    omitPermissive?: boolean;
  }

  declare interface legalEagle$LicenseLookup {
    [id: string]: legalEagle$Entry;
  }

  declare interface legalEagle$Entry {
    license: string;
    source: string;
    repository: string;
    sourceText: string;
  }
  declare module.exports: typeof legalEagle;
}
