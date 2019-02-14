declare module "msportalfx-test" {
  import typeof * as Q from "q";

  declare export default typeof MsPortalTestFx;

  declare var npm$namespace$MsPortalTestFx: {
    portal: typeof MsPortalTestFx$portal,
    LogLevel: typeof MsPortalTestFx$LogLevel,
    PortalElement: typeof MsPortalTestFx$PortalElement,
    Portal: typeof MsPortalTestFx$Portal,
    SplashScreen: typeof MsPortalTestFx$SplashScreen,
    StartBoard: typeof MsPortalTestFx$StartBoard,
    Locators: typeof npm$namespace$MsPortalTestFx$Locators,
    ActionBars: typeof npm$namespace$MsPortalTestFx$ActionBars,
    Blades: typeof npm$namespace$MsPortalTestFx$Blades,
    Controls: typeof npm$namespace$MsPortalTestFx$Controls,
    Parts: typeof npm$namespace$MsPortalTestFx$Parts,
    Commands: typeof npm$namespace$MsPortalTestFx$Commands,
    Notifications: typeof npm$namespace$MsPortalTestFx$Notifications,
    Tests: typeof npm$namespace$MsPortalTestFx$Tests
  };

  declare var npm$namespace$MsPortalTestFx$Locators: {
    Locator: typeof MsPortalTestFx$Locators$Locator,
    ContentLocator: typeof MsPortalTestFx$Locators$ContentLocator,
    ChainedLocator: typeof MsPortalTestFx$Locators$ChainedLocator,
    By: typeof MsPortalTestFx$Locators$By
  };
  declare export class MsPortalTestFx$Locators$Locator {
    seleniumLocator: any;
    findElements(context: any): any;
    toString(): string;
  }

  declare export class MsPortalTestFx$Locators$ContentLocator
    mixins MsPortalTestFx$Locators$Locator {
    locators: Array<MsPortalTestFx$Locators$Locator>;
    constructor(innerLocators: MsPortalTestFx$Locators$Locator[]): this;
    findElements(context: any): any;
    toString(): string;
  }

  declare export class MsPortalTestFx$Locators$ChainedLocator
    mixins MsPortalTestFx$Locators$Locator {
    locators: Array<MsPortalTestFx$Locators$Locator>;
    constructor(innerLocators: MsPortalTestFx$Locators$Locator[]): this;
    findElements(context: any): any;
    toString(): string;
  }

  declare export class MsPortalTestFx$Locators$By {
    static className(value: string): MsPortalTestFx$Locators$Locator;
    static css(value: string): MsPortalTestFx$Locators$Locator;
    static id(value: string): MsPortalTestFx$Locators$Locator;
    static js(script: any, ...var_args: any[]): MsPortalTestFx$Locators$Locator;
    static linkText(value: string): MsPortalTestFx$Locators$Locator;
    static name(value: string): MsPortalTestFx$Locators$Locator;
    static partialLinkText(value: string): MsPortalTestFx$Locators$Locator;
    static tagName(value: string): MsPortalTestFx$Locators$Locator;
    static xpath(value: string): MsPortalTestFx$Locators$Locator;
    static text(value: string): MsPortalTestFx$Locators$Locator;
    static chained(
      ...values: MsPortalTestFx$Locators$Locator[]
    ): MsPortalTestFx$Locators$Locator;
    static content(
      ...values: MsPortalTestFx$Locators$Locator[]
    ): MsPortalTestFx$Locators$Locator;
  }

  declare var npm$namespace$MsPortalTestFx$ActionBars: {
    ActionBarButton: typeof MsPortalTestFx$ActionBars$ActionBarButton,
    CreateActionBar: typeof MsPortalTestFx$ActionBars$CreateActionBar,
    DeleteActionBar: typeof MsPortalTestFx$ActionBars$DeleteActionBar,
    PickerActionBar: typeof MsPortalTestFx$ActionBars$PickerActionBar
  };
  declare export class MsPortalTestFx$ActionBars$ActionBarButton
    mixins MsPortalTestFx$PortalElement {
    constructor(
      parentLocator?: MsPortalTestFx$Locators$Locator,
      baseLocator?: MsPortalTestFx$Locators$Locator
    ): this;
    click(): Q.Promise<void>;
  }

  declare export class MsPortalTestFx$ActionBars$CreateActionBar
    mixins MsPortalTestFx$PortalElement {
    createButton: MsPortalTestFx$ActionBars$ActionBarButton;
    constructor(parentLocator?: MsPortalTestFx$Locators$Locator): this;
  }

  declare export class MsPortalTestFx$ActionBars$DeleteActionBar
    mixins MsPortalTestFx$PortalElement {
    deleteButton: MsPortalTestFx$ActionBars$ActionBarButton;
    cancelButton: MsPortalTestFx$ActionBars$ActionBarButton;
    constructor(parentLocator?: MsPortalTestFx$Locators$Locator): this;
  }

  declare export class MsPortalTestFx$ActionBars$PickerActionBar
    mixins MsPortalTestFx$PortalElement {
    selectButton: MsPortalTestFx$ActionBars$ActionBarButton;
    constructor(parentLocator?: MsPortalTestFx$Locators$Locator): this;
  }

  declare var npm$namespace$MsPortalTestFx$Blades: {
    Blade: typeof MsPortalTestFx$Blades$Blade,
    CreateBlade: typeof MsPortalTestFx$Blades$CreateBlade,
    BrowseResourceBlade: typeof MsPortalTestFx$Blades$BrowseResourceBlade,
    PickerBlade: typeof MsPortalTestFx$Blades$PickerBlade,
    SpecPickerBlade: typeof MsPortalTestFx$Blades$SpecPickerBlade,
    QuickStartBlade: typeof MsPortalTestFx$Blades$QuickStartBlade,
    UsersBlade: typeof MsPortalTestFx$Blades$UsersBlade
  };
  declare export class MsPortalTestFx$Blades$Blade
    mixins MsPortalTestFx$PortalElement {
    title: string;
    constructor(title: string): this;
    clickCommand(commandText: string): Q.Promise<MsPortalTestFx$Blades$Blade>;
    getTiles(): Q.Promise<MsPortalTestFx$Parts$Tile[]>;
  }

  declare export class MsPortalTestFx$Blades$CreateBlade
    mixins MsPortalTestFx$Blades$Blade {
    actionBar: MsPortalTestFx$ActionBars$CreateActionBar;
  }

  declare export class MsPortalTestFx$Blades$BrowseResourceBlade
    mixins MsPortalTestFx$Blades$Blade {
    constructor(title: string): this;
    selectResource(resourceName: string): Q.Promise<void>;
    filterItems(
      filter: string
    ): Q.Promise<MsPortalTestFx$Blades$BrowseResourceBlade>;
  }

  declare export class MsPortalTestFx$Blades$PickerBlade
    mixins MsPortalTestFx$Blades$Blade {
    pickItem(item: string): Q.Promise<void>;
  }

  declare export class MsPortalTestFx$Blades$SpecPickerBlade
    mixins MsPortalTestFx$Blades$Blade {
    pickSpec(specCode: string): Q.Promise<void>;
  }

  declare export class MsPortalTestFx$Blades$QuickStartBlade
    mixins MsPortalTestFx$Blades$Blade {
    constructor(): this;
    clickLink(linkText: string): Q.Promise<void>;
  }

  declare export class MsPortalTestFx$Blades$UsersBlade
    mixins MsPortalTestFx$Blades$Blade {
    constructor(): this;
  }

  declare var npm$namespace$MsPortalTestFx$Controls: {
    FormElement: typeof MsPortalTestFx$Controls$FormElement,
    CheckBoxField: typeof MsPortalTestFx$Controls$CheckBoxField,
    SelectorField: typeof MsPortalTestFx$Controls$SelectorField,
    CreatorAndSelectorField: typeof MsPortalTestFx$Controls$CreatorAndSelectorField,
    GridCell: typeof MsPortalTestFx$Controls$GridCell,
    TextField: typeof MsPortalTestFx$Controls$TextField,
    ResourceFilterTextField: typeof MsPortalTestFx$Controls$ResourceFilterTextField,
    HotSpot: typeof MsPortalTestFx$Controls$HotSpot
  };
  declare export class MsPortalTestFx$Controls$FormElement
    mixins MsPortalTestFx$PortalElement {
    label: string;
    constructor(
      baseLocator: MsPortalTestFx$Locators$Locator,
      parentLocator?: MsPortalTestFx$Locators$Locator,
      label?: string
    ): this;
  }

  declare export class MsPortalTestFx$Controls$CheckBoxField
    mixins MsPortalTestFx$Controls$FormElement {
    constructor(
      parentLocator?: MsPortalTestFx$Locators$Locator,
      label?: string
    ): this;
  }

  declare export class MsPortalTestFx$Controls$SelectorField
    mixins MsPortalTestFx$Controls$FormElement {
    constructor(
      parentLocator?: MsPortalTestFx$Locators$Locator,
      label?: string
    ): this;
    openPicker(): Q.Promise<void>;
  }

  declare export class MsPortalTestFx$Controls$CreatorAndSelectorField
    mixins MsPortalTestFx$Controls$FormElement {
    constructor(
      parentLocator?: MsPortalTestFx$Locators$Locator,
      selectModeLabel?: string,
      createModeLabel?: string
    ): this;
    openPicker(): Q.Promise<void>;
    clickCreateNew(): Q.Promise<MsPortalTestFx$Controls$CreatorAndSelectorField>;
    enterNewValue(
      ...var_args: string[]
    ): Q.Promise<MsPortalTestFx$Controls$CreatorAndSelectorField>;
  }

  declare export class MsPortalTestFx$Controls$GridCell
    mixins MsPortalTestFx$PortalElement {
    constructor(
      text: string,
      parentLocator?: MsPortalTestFx$Locators$Locator
    ): this;
    getLocator(): MsPortalTestFx$Locators$Locator;
  }

  declare export class MsPortalTestFx$Controls$TextField
    mixins MsPortalTestFx$Controls$FormElement {
    constructor(
      parentLocator?: MsPortalTestFx$Locators$Locator,
      label?: string,
      baseLocator?: MsPortalTestFx$Locators$Locator
    ): this;
    sendKeys(...var_args: string[]): Q.Promise<void>;
  }

  declare export class MsPortalTestFx$Controls$ResourceFilterTextField
    mixins MsPortalTestFx$Controls$TextField {
    constructor(parentLocator?: MsPortalTestFx$Locators$Locator): this;
  }

  declare export class MsPortalTestFx$Controls$HotSpot
    mixins MsPortalTestFx$PortalElement {
    constructor(
      parentLocator?: MsPortalTestFx$Locators$Locator,
      baseLocator?: MsPortalTestFx$Locators$Locator
    ): this;
    isSelected(): Q.Promise<boolean>;
  }

  declare var npm$namespace$MsPortalTestFx$Parts: {
    Part: typeof MsPortalTestFx$Parts$Part,
    PartProperty: typeof MsPortalTestFx$Parts$PartProperty,
    ResourceSummaryPart: typeof MsPortalTestFx$Parts$ResourceSummaryPart,
    PricingTierPart: typeof MsPortalTestFx$Parts$PricingTierPart,
    Tile: typeof MsPortalTestFx$Parts$Tile
  };
  declare export class MsPortalTestFx$Parts$Part
    mixins MsPortalTestFx$PortalElement {
    innerText: string;
    constructor(
      parentLocator?: MsPortalTestFx$Locators$Locator,
      innerText?: string,
      baseLocator?: MsPortalTestFx$Locators$Locator
    ): this;
    isSelected(): Q.Promise<boolean>;
    isLoaded(): Q.Promise<boolean>;
    waitUntilLoaded(timeout?: number): Q.Promise<boolean>;
    isClickable(): Q.Promise<boolean>;
    hasError(): Q.Promise<boolean>;
  }

  declare export class MsPortalTestFx$Parts$PartProperty
    mixins MsPortalTestFx$PortalElement {
    name: string;
    constructor(
      name: string,
      parentLocator?: MsPortalTestFx$Locators$Locator
    ): this;
    getValue(): Q.Promise<string>;
  }

  declare export class MsPortalTestFx$Parts$ResourceSummaryPart
    mixins MsPortalTestFx$Parts$Part {
    properties: Array<MsPortalTestFx$Parts$PartProperty>;
    resourceGroupProperty: MsPortalTestFx$Parts$PartProperty;
    quickStartHotSpot: MsPortalTestFx$Controls$HotSpot;
    accessHotSpot: MsPortalTestFx$Controls$HotSpot;
    constructor(parentLocator?: MsPortalTestFx$Locators$Locator): this;
  }

  declare class MsPortalTestFx$Parts$PricingTierPart
    mixins MsPortalTestFx$Parts$Part {}

  declare export class MsPortalTestFx$Parts$Tile
    mixins MsPortalTestFx$PortalElement {
    progressLocator: MsPortalTestFx$Locators$Locator;
    constructor(parentLocator?: MsPortalTestFx$Locators$Locator): this;
    tryPin(): Q.Promise<void>;
    getPart(): MsPortalTestFx$Parts$Part;
    waitUntilLoaded(timeout?: number): Q.Promise<void>;
  }

  declare var npm$namespace$MsPortalTestFx$Commands: {
    ContextMenu: typeof MsPortalTestFx$Commands$ContextMenu,
    ContextMenuItem: typeof MsPortalTestFx$Commands$ContextMenuItem
  };
  declare export class MsPortalTestFx$Commands$ContextMenu
    mixins MsPortalTestFx$PortalElement {
    constructor(): this;
    hasItem(text: string): Q.Promise<boolean>;
    clickItem(text: string): Q.Promise<void>;
  }

  declare export class MsPortalTestFx$Commands$ContextMenuItem
    mixins MsPortalTestFx$PortalElement {
    constructor(
      parentLocator: MsPortalTestFx$Locators$Locator,
      text?: string
    ): this;
  }

  declare var npm$namespace$MsPortalTestFx$Notifications: {
    Notification: typeof MsPortalTestFx$Notifications$Notification,
    NotificationsMenu: typeof MsPortalTestFx$Notifications$NotificationsMenu
  };
  declare export class MsPortalTestFx$Notifications$Notification
    mixins MsPortalTestFx$PortalElement {
    constructor(): this;
    getTitle(): Q.Promise<string>;
    getDescription(): Q.Promise<string>;
  }

  declare export class MsPortalTestFx$Notifications$NotificationsMenu
    mixins MsPortalTestFx$PortalElement {
    constructor(): this;
    waitForNewNotification(
      title?: string,
      description?: string,
      timeout?: number
    ): Q.Promise<MsPortalTestFx$Notifications$Notification>;
  }

  declare var npm$namespace$MsPortalTestFx$Tests: {
    Parts: typeof npm$namespace$MsPortalTestFx$Tests$Parts
  };

  declare var npm$namespace$MsPortalTestFx$Tests$Parts: {
    canPinAllBladeParts: typeof MsPortalTestFx$Tests$Parts$canPinAllBladeParts
  };
  declare export function MsPortalTestFx$Tests$Parts$canPinAllBladeParts(
    targetBladeDeepLink: string,
    targetBladeTitle: string,
    timeout?: number
  ): Q.Promise<boolean>;

  declare export class MsPortalTestFx$PortalElement {
    baseLocator: MsPortalTestFx$Locators$Locator;
    parentLocator: MsPortalTestFx$Locators$Locator;
    constructor(
      baseLocator: MsPortalTestFx$Locators$Locator,
      parentLocator?: MsPortalTestFx$Locators$Locator
    ): this;
    click(): Q.Promise<void>;
    rightClick(): Q.Promise<void>;
    getAttribute(attributeName: string): Q.Promise<string>;
    sendKeys(...var_args: string[]): Q.Promise<void>;
    getText(): Q.Promise<string>;
    isPresent(): Q.Promise<boolean>;
    isElementPresent(
      subLocator: MsPortalTestFx$Locators$Locator
    ): Q.Promise<boolean>;
    isDisplayed(): Q.Promise<boolean>;
    getLocator(): MsPortalTestFx$Locators$Locator;
  }

  declare export interface MsPortalTestFx$TestExtension {
    name: string;
    uri: string;
  }

  declare export interface MsPortalTestFx$Feature {
    name: string;
    value: string;
  }

  declare export interface MsPortalTestFx$PortalContext {
    capabilities: {
      browserName: string,
      chromeOptions: {
        args: string[]
      }
    };
    chromeDriverPath?: string;
    portalUrl: string;
    signInUrl?: string;
    signInEmail?: string;
    signInPassword?: string;
    features?: MsPortalTestFx$Feature[];
    testExtensions?: MsPortalTestFx$TestExtension[];
  }

  declare export var MsPortalTestFx$LogLevel: {|
    +All: 0, // 0
    +Debug: 1, // 1
    +Info: 2, // 2
    +Warning: 3, // 3
    +Severe: 4, // 4
    +Off: 5 // 5
  |};

  declare export class MsPortalTestFx$Portal {
    portalContext: MsPortalTestFx$PortalContext;
    goHome(timeout?: number): Q.Promise<void>;
    openGalleryCreateBlade(
      galleryPackageName: string,
      bladeTitle: string,
      timeout?: number
    ): Q.Promise<MsPortalTestFx$Blades$CreateBlade>;
    openBrowseBlade(
      resourceProvider: string,
      resourceType: string,
      bladeTitle: string,
      timeout?: number
    ): Q.Promise<MsPortalTestFx$Blades$BrowseResourceBlade>;
    openResourceBlade(
      resourceId: string,
      bladeTitle: string,
      timeout?: number
    ): Q.Promise<MsPortalTestFx$Blades$Blade>;
    navigateToDeepLink(deepLink: string, timeout?: number): Q.Promise<any>;
    waitForElementVisible(
      locator: MsPortalTestFx$Locators$Locator,
      timeout?: number
    ): Q.Promise<boolean>;
    waitForElementNotVisible(
      locator: MsPortalTestFx$Locators$Locator,
      timeout?: number
    ): Q.Promise<boolean>;
    waitUntilElementContainsAttribute(
      locator: MsPortalTestFx$Locators$Locator,
      attributeName: string,
      attributeValue: string,
      timeout?: number
    ): Q.Promise<any>;
    waitUntilElementDoesNotContainAttribute(
      locator: MsPortalTestFx$Locators$Locator,
      attributeName: string,
      attributeValue: string,
      timeout?: number
    ): Q.Promise<any>;
    waitForElementLocated(
      locator: MsPortalTestFx$Locators$Locator,
      timeout?: number
    ): Q.Promise<any>;
    waitForElementsLocated(
      locator: MsPortalTestFx$Locators$Locator,
      timeout?: number
    ): Q.Promise<any[]>;
    takeScreenshot(filePrefix?: string): Q.Promise<string>;
    getBrowserLogs(
      level: $Values<typeof MsPortalTestFx$LogLevel>
    ): Q.Promise<string[]>;
    executeScript<T>(script: string): Q.Promise<T>;
    applyFeature(name: string, value: string): void;
    getCurrentUrl(): Q.Promise<string>;
    quit(): Q.Promise<any>;
  }

  declare export class MsPortalTestFx$SplashScreen
    mixins MsPortalTestFx$PortalElement {
    clickUntrustedExtensionsOkButton(): Q.Promise<void>;
  }

  declare export class MsPortalTestFx$StartBoard
    mixins MsPortalTestFx$PortalElement {
    constructor(): this;
    getTiles(): Q.Promise<MsPortalTestFx$Parts$Tile[]>;
  }

  declare export var MsPortalTestFx$portal: MsPortalTestFx$Portal;
}
