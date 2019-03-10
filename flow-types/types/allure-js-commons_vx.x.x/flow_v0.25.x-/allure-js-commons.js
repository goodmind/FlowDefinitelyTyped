declare module "allure-js-commons" {
  declare class Allure {
    constructor(): this;
    setOptions(options: Allure$Options): void;
    getCurrentSuite(): Allure$Suite;
    getCurrentTest(): Allure$Test;
    startSuite(suiteName: string, timestamp?: number): void;
    endSuite(timestamp?: number): void;
    startCase(testName: string, timestamp?: number): void;
    endCase(status: Allure$Status, err?: {}, timestamp?: number): void;
    startStep(stepName: string, timestamp?: number): void;
    endStep(status: Allure$Status, timestamp?: number): void;
    setDescription(description: string, timestamp?: number): void;
    addAttachment(attachmentName: string, buffer: any, type: string): void;
    pendingCase(testName: string, timestamp?: number): void;
  }
  declare export default typeof Allure;

  declare var npm$namespace$Allure: {
    TYPE: typeof Allure$TYPE,
    Suite: typeof Allure$Suite,
    Test: typeof Allure$Test,
    Description: typeof Allure$Description,
    Step: typeof Allure$Step,
    Attachment: typeof Allure$Attachment
  };
  declare interface Allure$Options {
    targetDir: string;
  }

  declare type Allure$Status =
    | "passed"
    | "pending"
    | "skipped"
    | "failed"
    | "broken";

  declare var Allure$TYPE: {|
    +TEXT: "text", // "text"
    +HTML: "html", // "html"
    +MARKDOWN: "markdown" // "markdown"
  |};

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
    setDescription(
      description: string,
      type: $Values<typeof Allure$TYPE>
    ): void;
    addLabel(name: string, value: string): void;
    addParameter(kind: any, name: string, value: string): void;
    addStep(step: Allure$Step): void;
    addAttachment(attachment: Allure$Attachment): void;
    end(status: Allure$Status, error: Error, timestamp?: number): void;
    toXML(): string;
  }

  declare class Allure$Description {
    constructor(value: string, type: $Values<typeof Allure$TYPE>): this;
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
