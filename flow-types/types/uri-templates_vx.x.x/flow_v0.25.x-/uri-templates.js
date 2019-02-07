declare module "uri-templates" {
  declare function utpl(template: string): utpl$utpl$URITemplate;

  declare export interface utpl$URITemplate {
    fillFromObject(vars: {
      [key: string]:
        | string
        | {
            [key: string]: string
          }
    }): string;
    fill(callback: (varName: string) => string): string;
    fill(vars: {
      [key: string]:
        | string
        | {
            [key: string]: string
          }
    }): string;
    fromUri(
      uri: string
    ): {
      [key: string]: string
    };
    varNames: string[];
    template: string;
  }
  declare module.exports: typeof utpl;
}
