declare module "react-native-dialogflow" {
  declare var npm$namespace$Dialogflow: {
    setConfiguration: typeof Dialogflow$setConfiguration,
    setEntities: typeof Dialogflow$setEntities,
    startListening: typeof Dialogflow$startListening,
    finishListening: typeof Dialogflow$finishListening,
    requestEvent: typeof Dialogflow$requestEvent,
    requestQuery: typeof Dialogflow$requestQuery,
    onListeningStarted: typeof Dialogflow$onListeningStarted,
    onListeningFinished: typeof Dialogflow$onListeningFinished,
    onAudioLevel: typeof Dialogflow$onAudioLevel,
    setContexts: typeof Dialogflow$setContexts,
    resetContexts: typeof Dialogflow$resetContexts,
    setPermanentContexts: typeof Dialogflow$setPermanentContexts,
    LANG_CHINESE_CHINA: typeof Dialogflow$LANG_CHINESE_CHINA,
    LANG_CHINESE_HONGKONG: typeof Dialogflow$LANG_CHINESE_HONGKONG,
    LANG_CHINESE_TAIWAN: typeof Dialogflow$LANG_CHINESE_TAIWAN,
    LANG_DUTCH: typeof Dialogflow$LANG_DUTCH,
    LANG_ENGLISH: typeof Dialogflow$LANG_ENGLISH,
    LANG_ENGLISH_GB: typeof Dialogflow$LANG_ENGLISH_GB,
    LANG_ENGLISH_US: typeof Dialogflow$LANG_ENGLISH_US,
    LANG_FRENCH: typeof Dialogflow$LANG_FRENCH,
    LANG_GERMAN: typeof Dialogflow$LANG_GERMAN,
    LANG_ITALIAN: typeof Dialogflow$LANG_ITALIAN,
    LANG_JAPANESE: typeof Dialogflow$LANG_JAPANESE,
    LANG_KOREAN: typeof Dialogflow$LANG_KOREAN,
    LANG_PORTUGUESE: typeof Dialogflow$LANG_PORTUGUESE,
    LANG_PORTUGUESE_BRAZIL: typeof Dialogflow$LANG_PORTUGUESE_BRAZIL,
    LANG_RUSSIAN: typeof Dialogflow$LANG_RUSSIAN,
    LANG_SPANISH: typeof Dialogflow$LANG_SPANISH,
    LANG_UKRAINIAN: typeof Dialogflow$LANG_UKRAINIAN
  };
  declare var Dialogflow$LANG_CHINESE_CHINA: any; // "zh-CN";

  declare var Dialogflow$LANG_CHINESE_HONGKONG: "zh-HK";

  declare var Dialogflow$LANG_CHINESE_TAIWAN: "zh-TW";

  declare var Dialogflow$LANG_DUTCH: "nl";

  declare var Dialogflow$LANG_ENGLISH: "en";

  declare var Dialogflow$LANG_ENGLISH_GB: "en-GB";

  declare var Dialogflow$LANG_ENGLISH_US: "en-US";

  declare var Dialogflow$LANG_FRENCH: "fr";

  declare var Dialogflow$LANG_GERMAN: "de";

  declare var Dialogflow$LANG_ITALIAN: "it";

  declare var Dialogflow$LANG_JAPANESE: "ja";

  declare var Dialogflow$LANG_KOREAN: "ko";

  declare var Dialogflow$LANG_PORTUGUESE: "pt";

  declare var Dialogflow$LANG_PORTUGUESE_BRAZIL: "pt-BR";

  declare var Dialogflow$LANG_RUSSIAN: "ru";

  declare var Dialogflow$LANG_SPANISH: "es";

  declare var Dialogflow$LANG_UKRAINIAN: "uk";

  declare function Dialogflow$setConfiguration(
    accessToken: string,
    languageTag: string
  ): void;

  declare function Dialogflow$setEntities(entities: any[]): void;

  declare function Dialogflow$startListening(
    resultCallback: (result: { [key: string]: any }) => void,
    errorCallback: (error: Error) => void
  ): void;

  declare function Dialogflow$finishListening(): void;

  declare function Dialogflow$requestEvent(
    eventName: string,
    eventData: { [key: string]: any },
    resultCallback: (result: { [key: string]: any }) => void,
    errorCallback: (error: Error) => void
  ): Promise<any>;

  declare function Dialogflow$requestQuery(
    query: string,
    resultCallback: (result: { [key: string]: any }) => void,
    errorCallback: (error: Error) => void
  ): Promise<any>;

  declare function Dialogflow$onListeningStarted(callback: () => void): void;

  declare function Dialogflow$onListeningFinished(callback: () => void): void;

  declare function Dialogflow$onAudioLevel(
    callback: (level: number) => void
  ): void;

  declare function Dialogflow$setContexts(contexts: any[]): void;

  declare function Dialogflow$resetContexts(
    resultCallback: (result: { [key: string]: any }) => void,
    errorCallback: (error: Error) => void
  ): void;

  declare function Dialogflow$setPermanentContexts(contexts: any[]): void;

  declare var npm$namespace$Dialogflow_V2: {
    setConfiguration: typeof Dialogflow_V2$setConfiguration,
    startListening: typeof Dialogflow_V2$startListening,
    finishListening: typeof Dialogflow_V2$finishListening,
    requestEvent: typeof Dialogflow_V2$requestEvent,
    requestQuery: typeof Dialogflow_V2$requestQuery,
    onListeningStarted: typeof Dialogflow_V2$onListeningStarted,
    onListeningFinished: typeof Dialogflow_V2$onListeningFinished,
    onAudioLevel: typeof Dialogflow_V2$onAudioLevel,
    setContexts: typeof Dialogflow_V2$setContexts,
    resetContexts: typeof Dialogflow_V2$resetContexts,
    setPermanentContexts: typeof Dialogflow_V2$setPermanentContexts,
    LANG_CHINESE_CHINA: typeof Dialogflow_V2$LANG_CHINESE_CHINA,
    LANG_CHINESE_HONGKONG: typeof Dialogflow_V2$LANG_CHINESE_HONGKONG,
    LANG_CHINESE_TAIWAN: typeof Dialogflow_V2$LANG_CHINESE_TAIWAN,
    LANG_DUTCH: typeof Dialogflow_V2$LANG_DUTCH,
    LANG_ENGLISH: typeof Dialogflow_V2$LANG_ENGLISH,
    LANG_ENGLISH_GB: typeof Dialogflow_V2$LANG_ENGLISH_GB,
    LANG_ENGLISH_US: typeof Dialogflow_V2$LANG_ENGLISH_US,
    LANG_FRENCH: typeof Dialogflow_V2$LANG_FRENCH,
    LANG_GERMAN: typeof Dialogflow_V2$LANG_GERMAN,
    LANG_ITALIAN: typeof Dialogflow_V2$LANG_ITALIAN,
    LANG_JAPANESE: typeof Dialogflow_V2$LANG_JAPANESE,
    LANG_KOREAN: typeof Dialogflow_V2$LANG_KOREAN,
    LANG_PORTUGUESE: typeof Dialogflow_V2$LANG_PORTUGUESE,
    LANG_PORTUGUESE_BRAZIL: typeof Dialogflow_V2$LANG_PORTUGUESE_BRAZIL,
    LANG_RUSSIAN: typeof Dialogflow_V2$LANG_RUSSIAN,
    LANG_SPANISH: typeof Dialogflow_V2$LANG_SPANISH,
    LANG_UKRAINIAN: typeof Dialogflow_V2$LANG_UKRAINIAN
  };
  declare var Dialogflow_V2$LANG_CHINESE_CHINA: any; // "zh-CN";

  declare var Dialogflow_V2$LANG_CHINESE_HONGKONG: "zh-HK";

  declare var Dialogflow_V2$LANG_CHINESE_TAIWAN: "zh-TW";

  declare var Dialogflow_V2$LANG_DUTCH: "nl";

  declare var Dialogflow_V2$LANG_ENGLISH: "en";

  declare var Dialogflow_V2$LANG_ENGLISH_GB: "en-GB";

  declare var Dialogflow_V2$LANG_ENGLISH_US: "en-US";

  declare var Dialogflow_V2$LANG_FRENCH: "fr";

  declare var Dialogflow_V2$LANG_GERMAN: "de";

  declare var Dialogflow_V2$LANG_ITALIAN: "it";

  declare var Dialogflow_V2$LANG_JAPANESE: "ja";

  declare var Dialogflow_V2$LANG_KOREAN: "ko";

  declare var Dialogflow_V2$LANG_PORTUGUESE: "pt";

  declare var Dialogflow_V2$LANG_PORTUGUESE_BRAZIL: "pt-BR";

  declare var Dialogflow_V2$LANG_RUSSIAN: "ru";

  declare var Dialogflow_V2$LANG_SPANISH: "es";

  declare var Dialogflow_V2$LANG_UKRAINIAN: "uk";

  declare function Dialogflow_V2$setConfiguration(
    serviceAccount: string,
    privateKey: string,
    language: string,
    projectId: string
  ): void;

  declare function Dialogflow_V2$startListening(
    resultCallback: (result: { [key: string]: any }) => void,
    errorCallback: (error: Error) => void
  ): void;

  declare function Dialogflow_V2$finishListening(): void;

  declare function Dialogflow_V2$requestEvent(
    eventName: string,
    eventData: { [key: string]: any },
    resultCallback: (result: { [key: string]: any }) => void,
    errorCallback: (error: Error) => void
  ): Promise<any>;

  declare function Dialogflow_V2$requestQuery(
    query: string,
    resultCallback: (result: { [key: string]: any }) => void,
    errorCallback: (error: Error) => void
  ): Promise<any>;

  declare function Dialogflow_V2$onListeningStarted(callback: () => void): void;

  declare function Dialogflow_V2$onListeningFinished(
    callback: () => void
  ): void;

  declare function Dialogflow_V2$onAudioLevel(
    callback: (level: number) => void
  ): void;

  declare function Dialogflow_V2$setContexts(contexts: any[]): void;

  declare function Dialogflow_V2$resetContexts(
    resultCallback: (result: { [key: string]: any }) => void,
    errorCallback: (error: Error) => void
  ): void;

  declare function Dialogflow_V2$setPermanentContexts(contexts: any[]): void;
}
