declare module "word-extractor" {
  declare class WordExtractor {
    extract(documentPath: string): Promise<WordExtractor$Document>;
  }
  declare export default typeof WordExtractor;

  declare var WordExtractor: typeof npm$namespace$WordExtractor;

  declare var npm$namespace$WordExtractor: {
    Document: typeof WordExtractor$Document
  };
  declare class WordExtractor$Document {
    getBody(): string;
    getFootnotes(): string;
    getHeaders(): string;
    getAnnotations(): string;
    getEndNotes(): string;
  }
}
