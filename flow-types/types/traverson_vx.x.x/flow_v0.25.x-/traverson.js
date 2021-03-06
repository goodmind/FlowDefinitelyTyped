declare module "traverson" {
  declare var traverson: Traverson$Traverson$TraversonMethods;
  declare module.exports: typeof traverson;

  declare interface Traverson$TraversonMethods {
    from(uri: string): Traverson$Builder;
    registerMediaType(name: string, handler: any): Traverson$TraversonMethods;
  }

  declare interface Traverson$Builder {
    withRequestOptions(options: any): Traverson$Builder;
    withTemplateParameters(parameters: any): Traverson$Builder;
    json(): Traverson$Builder;
    jsonHal(): Traverson$Builder;
    setMediaType(type_name: string): Traverson$Builder;
    follow(
      first_pattern: string,
      ...rest_patterns: string[]
    ): Traverson$Builder;
    get(
      callback: (
        err: any,
        document: any,
        traversal?: Traverson$Traversal
      ) => void
    ): Traverson$InAction;
    getResource(
      callback: (
        err: any,
        document: any,
        traversal?: Traverson$Traversal
      ) => void
    ): Traverson$InAction;
    getUrl(
      callback: (
        err: any,
        document: any,
        traversal?: Traverson$Traversal
      ) => void
    ): Traverson$InAction;
    post(
      data: any,
      callback: (
        err: any,
        document: any,
        traversal?: Traverson$Traversal
      ) => void
    ): Traverson$InAction;
    put(
      data: any,
      callback: (
        err: any,
        document: any,
        traversal?: Traverson$Traversal
      ) => void
    ): Traverson$InAction;
    patch(
      data: any,
      callback: (
        err: any,
        document: any,
        traversal?: Traverson$Traversal
      ) => void
    ): Traverson$InAction;
    delete(
      callback: (
        err: any,
        document: any,
        traversal?: Traverson$Traversal
      ) => void
    ): Traverson$InAction;
    newRequest(): Traverson$Builder;
  }

  declare interface Traverson$Json {
    parseJson(): any;
  }

  declare interface Traverson$Traversal {
    continue(): Traverson$Builder;
  }

  declare interface Traverson$InAction {
    abort(): void;
  }
}
