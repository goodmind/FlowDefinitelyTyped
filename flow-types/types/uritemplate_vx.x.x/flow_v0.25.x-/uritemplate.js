declare module "uritemplate" {
  declare export class UriTemplate {
    /**
     * Expands template into a string using parameter
     * supplied
     */
    expand(data: {}): string;
  }
  declare export interface UriTemplateErrorOptions {
    expressionText: string;
    message: string;
    position: number;
  }
  declare export class UriTemplateError {
    constructor(options: UriTemplateErrorOptions): this;
  }

  /**
 * parse template text returning instance of UriTemplate
 * @param template text
 * @return instance of UriTemplate
 * @example import UriTemplate = require('uritemplate');
let template = UriTemplate.parse('http://localhost/query{?name,city}');
let result   = template.expand({name: 'Jayden', city: 'Wodonga'});
// returns http://localhost/query?name=Jayden&city=Wodonga
 */
  declare export function parse(templateText: string): UriTemplate;
}
