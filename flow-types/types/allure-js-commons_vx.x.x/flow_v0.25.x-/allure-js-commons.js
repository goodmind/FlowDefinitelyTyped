declare module "allure-js-commons" {
  declare class Allure {
    constructor(): this;
    setOptions(options: Allure$Allure$Options): void;
    getCurrentSuite(): Allure$Allure$Suite;
    getCurrentTest(): Allure$Allure$Test;
    startSuite(suiteName: string, timestamp?: number): void;
    endSuite(timestamp?: number): void;
    startCase(testName: string, timestamp?: number): void;
    endCase(status: Allure$Allure$Status, err?: {}, timestamp?: number): void;
    startStep(stepName: string, timestamp?: number): void;
    endStep(status: Allure$Allure$Status, timestamp?: number): void;
    setDescription(description: string, timestamp?: number): void;
    addAttachment(attachmentName: string, buffer: any, type: string): void;
    pendingCase(testName: string, timestamp?: number): void;
  }
  declare module.exports: typeof Allure;

  declare interface Allure$Options {
    targetDir: string;
  }

  declare type Allure$Status =
    | "passed"
    | "pending"
    | "skipped"
    | "failed"
    | "broken";

  declare class Allure$TYPE {
    constructor(...args: empty): mixed;
    static +TEXT: Class<Allure$TYPE__TEXT> & Allure$TYPE__TEXT & "text"; // "text"
    static +HTML: Class<Allure$TYPE__HTML> & Allure$TYPE__HTML & "html"; // "html"
    static +MARKDOWN: Class<Allure$TYPE__MARKDOWN> &
      Allure$TYPE__MARKDOWN &
      "markdown"; // "markdown"
  }

  declare class Allure$TYPE__TEXT mixins Allure$TYPE {}
  declare class Allure$TYPE__HTML mixins Allure$TYPE {}
  declare class Allure$TYPE__MARKDOWN mixins Allure$TYPE {}

  declare class Allure$Suite {
    constructor(name: string, timestamp?: number): this;
    name: string;
    end(timestamp?: number): void;
    hasTests(): boolean;
    addTest(test: Allure$Test): boolean;
    toXML(): string;
  }

  declare class Allure$Test {
    constructor(name: string, timestamp?: number): this;
    setDescription(description: string, type: Allure$TYPE): void;
    addLabel(name: string, value: string): void;
    addParameter(kind: any, name: string, value: string): void;
    addStep(step: Allure$Step): void;
    addAttachment(attachment: Allure$Attachment): void;
    end(status: Allure$Status, error: Error, timestamp?: number): void;
    toXML(): string;
  }

  declare class Allure$Description {
    constructor(value: string, type: Allure$TYPE): this;
    toXML(): string;
  }

  declare class Allure$Step {
    constructor(name: string, timestamp?: number): this;
    addStep(step: Allure$Step): void;
    addAttachment(attachment: Allure$Attachment): void;
    end(status: Allure$Status, error: Error, timestamp?: number): void;
    toXML(): string;
  }

  declare class Allure$Attachment {
    constructor(title: string, source: any, size: number, mime: string): this;
    addStep(step: Allure$Step): void;
    addAttachment(attachment: Allure$Attachment): void;
    end(status: Allure$Status, error: Error, timestamp?: number): void;
    toXML(): string;
  }
}
