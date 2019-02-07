declare module "gapi.client.language" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    documents: typeof client$documents
  };

  /**
   * Load Google Cloud Natural Language API v1
   */
  declare function client$load(
    name: "language",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "language",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$documents: language$language$DocumentsResource;

  declare interface language$AnalyzeEntitiesRequest {
    /**
     * Input document.
     */
    document?: language$Document;

    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string;
  }

  declare interface language$AnalyzeEntitiesResponse {
    /**
     * The recognized entities in the input document.
     */
    entities?: language$Entity[];

    /**
     * The language of the text, which will be the same as the language specified
     * in the request or, if not specified, the automatically-detected language.
     * See Document.language field for more details.
     */
    language?: string;
  }

  declare interface language$AnalyzeEntitySentimentRequest {
    /**
     * Input document.
     */
    document?: language$Document;

    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string;
  }

  declare interface language$AnalyzeEntitySentimentResponse {
    /**
     * The recognized entities in the input document with associated sentiments.
     */
    entities?: language$Entity[];

    /**
     * The language of the text, which will be the same as the language specified
     * in the request or, if not specified, the automatically-detected language.
     * See Document.language field for more details.
     */
    language?: string;
  }

  declare interface language$AnalyzeSentimentRequest {
    /**
     * Input document.
     */
    document?: language$Document;

    /**
     * The encoding type used by the API to calculate sentence offsets.
     */
    encodingType?: string;
  }

  declare interface language$AnalyzeSentimentResponse {
    /**
     * The overall sentiment of the input document.
     */
    documentSentiment?: language$Sentiment;

    /**
     * The language of the text, which will be the same as the language specified
     * in the request or, if not specified, the automatically-detected language.
     * See Document.language field for more details.
     */
    language?: string;

    /**
     * The sentiment for all the sentences in the document.
     */
    sentences?: language$Sentence[];
  }

  declare interface language$AnalyzeSyntaxRequest {
    /**
     * Input document.
     */
    document?: language$Document;

    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string;
  }

  declare interface language$AnalyzeSyntaxResponse {
    /**
     * The language of the text, which will be the same as the language specified
     * in the request or, if not specified, the automatically-detected language.
     * See Document.language field for more details.
     */
    language?: string;

    /**
     * Sentences in the input document.
     */
    sentences?: language$Sentence[];

    /**
     * Tokens, along with their syntactic information, in the input document.
     */
    tokens?: language$Token[];
  }

  declare interface language$AnnotateTextRequest {
    /**
     * Input document.
     */
    document?: language$Document;

    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: string;

    /**
     * The enabled features.
     */
    features?: language$Features;
  }

  declare interface language$AnnotateTextResponse {
    /**
     * The overall sentiment for the document. Populated if the user enables
     * AnnotateTextRequest.Features.extract_document_sentiment.
     */
    documentSentiment?: language$Sentiment;

    /**
     * Entities, along with their semantic information, in the input document.
     * Populated if the user enables
     * AnnotateTextRequest.Features.extract_entities.
     */
    entities?: language$Entity[];

    /**
     * The language of the text, which will be the same as the language specified
     * in the request or, if not specified, the automatically-detected language.
     * See Document.language field for more details.
     */
    language?: string;

    /**
     * Sentences in the input document. Populated if the user enables
     * AnnotateTextRequest.Features.extract_syntax.
     */
    sentences?: language$Sentence[];

    /**
     * Tokens, along with their syntactic information, in the input document.
     * Populated if the user enables
     * AnnotateTextRequest.Features.extract_syntax.
     */
    tokens?: language$Token[];
  }

  declare interface language$DependencyEdge {
    /**
     * Represents the head of this token in the dependency tree.
     * This is the index of the token which has an arc going to this token.
     * The index is the position of the token in the array of tokens returned
     * by the API method. If this token is a root token, then the
     * `head_token_index` is its own index.
     */
    headTokenIndex?: number;

    /**
     * The parse label for the token.
     */
    label?: string;
  }

  declare interface language$Document {
    /**
     * The content of the input in string format.
     */
    content?: string;

    /**
     * The Google Cloud Storage URI where the file content is located.
     * This URI must be of the form: gs://bucket_name/object_name. For more
     * details, see https://cloud.google.com/storage/docs/reference-uris.
     * NOTE: Cloud Storage object versioning is not supported.
     */
    gcsContentUri?: string;

    /**
     * The language of the document (if not specified, the language is
     * automatically detected). Both ISO and BCP-47 language codes are
     * accepted.<br>
     * [Language Support](/natural-language/docs/languages)
     * lists currently supported languages for each API method.
     * If the language (either specified by the caller or automatically detected)
     * is not supported by the called API method, an `INVALID_ARGUMENT` error
     * is returned.
     */
    language?: string;

    /**
     * Required. If the type is not set or is `TYPE_UNSPECIFIED`,
     * returns an `INVALID_ARGUMENT` error.
     */
    type?: string;
  }

  declare interface language$Entity {
    /**
     * The mentions of this entity in the input document. The API currently
     * supports proper noun mentions.
     */
    mentions?: language$EntityMention[];

    /**
     * Metadata associated with the entity.
     *
     * Currently, Wikipedia URLs and Knowledge Graph MIDs are provided, if
     * available. The associated keys are "wikipedia_url" and "mid", respectively.
     */
    metadata?: Record<string, string>;

    /**
     * The representative name for the entity.
     */
    name?: string;

    /**
     * The salience score associated with the entity in the [0, 1.0] range.
     *
     * The salience score for an entity provides information about the
     * importance or centrality of that entity to the entire document text.
     * Scores closer to 0 are less salient, while scores closer to 1.0 are highly
     * salient.
     */
    salience?: number;

    /**
     * For calls to AnalyzeEntitySentiment or if
     * AnnotateTextRequest.Features.extract_entity_sentiment is set to
     * true, this field will contain the aggregate sentiment expressed for this
     * entity in the provided document.
     */
    sentiment?: language$Sentiment;

    /**
     * The entity type.
     */
    type?: string;
  }

  declare interface language$EntityMention {
    /**
     * For calls to AnalyzeEntitySentiment or if
     * AnnotateTextRequest.Features.extract_entity_sentiment is set to
     * true, this field will contain the sentiment expressed for this mention of
     * the entity in the provided document.
     */
    sentiment?: language$Sentiment;

    /**
     * The mention text.
     */
    text?: language$TextSpan;

    /**
     * The type of the entity mention.
     */
    type?: string;
  }

  declare interface language$Features {
    /**
     * Extract document-level sentiment.
     */
    extractDocumentSentiment?: boolean;

    /**
     * Extract entities.
     */
    extractEntities?: boolean;

    /**
     * Extract entities and their associated sentiment.
     */
    extractEntitySentiment?: boolean;

    /**
     * Extract syntax information.
     */
    extractSyntax?: boolean;
  }

  declare interface language$PartOfSpeech {
    /**
     * The grammatical aspect.
     */
    aspect?: string;

    /**
     * The grammatical case.
     */
    case?: string;

    /**
     * The grammatical form.
     */
    form?: string;

    /**
     * The grammatical gender.
     */
    gender?: string;

    /**
     * The grammatical mood.
     */
    mood?: string;

    /**
     * The grammatical number.
     */
    number?: string;

    /**
     * The grammatical person.
     */
    person?: string;

    /**
     * The grammatical properness.
     */
    proper?: string;

    /**
     * The grammatical reciprocity.
     */
    reciprocity?: string;

    /**
     * The part of speech tag.
     */
    tag?: string;

    /**
     * The grammatical tense.
     */
    tense?: string;

    /**
     * The grammatical voice.
     */
    voice?: string;
  }

  declare interface language$Sentence {
    /**
     * For calls to AnalyzeSentiment or if
     * AnnotateTextRequest.Features.extract_document_sentiment is set to
     * true, this field will contain the sentiment for the sentence.
     */
    sentiment?: language$Sentiment;

    /**
     * The sentence text.
     */
    text?: language$TextSpan;
  }

  declare interface language$Sentiment {
    /**
     * A non-negative number in the [0, +inf) range, which represents
     * the absolute magnitude of sentiment regardless of score (positive or
     * negative).
     */
    magnitude?: number;

    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0
     * (positive sentiment).
     */
    score?: number;
  }

  declare interface language$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;

    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: Array<Record<string, any>>;

    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  declare interface language$TextSpan {
    /**
     * The API calculates the beginning offset of the content in the original
     * document according to the EncodingType specified in the API request.
     */
    beginOffset?: number;

    /**
     * The content of the output text.
     */
    content?: string;
  }

  declare interface language$Token {
    /**
     * Dependency tree parse for this token.
     */
    dependencyEdge?: language$DependencyEdge;

    /**
     * [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
     */
    lemma?: string;

    /**
     * Parts of speech tag for this token.
     */
    partOfSpeech?: language$PartOfSpeech;

    /**
     * The token text.
     */
    text?: language$TextSpan;
  }

  declare interface language$DocumentsResource {
    /**
     * Finds named entities (currently proper names and common nouns) in the text
     * along with entity types, salience, mentions for each entity, and
     * other properties.
     */
    analyzeEntities(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<language$AnalyzeEntitiesResponse>;

    /**
     * Finds entities, similar to AnalyzeEntities in the text and analyzes
     * sentiment associated with each entity and its mentions.
     */
    analyzeEntitySentiment(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<language$AnalyzeEntitySentimentResponse>;

    /**
     * Analyzes the sentiment of the provided text.
     */
    analyzeSentiment(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<language$AnalyzeSentimentResponse>;

    /**
     * Analyzes the syntax of the text and provides sentence boundaries and
     * tokenization along with part of speech tags, dependency trees, and other
     * properties.
     */
    analyzeSyntax(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<language$AnalyzeSyntaxResponse>;

    /**
     * A convenience method that provides all the features that analyzeSentiment,
     * analyzeEntities, and analyzeSyntax provide in one call.
     */
    annotateText(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<language$AnnotateTextResponse>;
  }
}
