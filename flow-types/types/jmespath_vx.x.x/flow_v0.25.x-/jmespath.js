declare module "jmespath" {
  /**
   * Take a JSON document and transform it into another JSON document
   * through a JMESPath expression.  See: http://jmespath.org/
   * @param jsonDoc the document to transform
   * @param query a JMESPath expression
   * @return the transformed document
   */
  declare export function search(jsonDoc: any, query: string): any;
}
