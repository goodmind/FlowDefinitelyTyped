declare module 'msportalfx-test' {
        import typeof * as Q from 'q';

	declare module.exports: typeof MsPortalTestFx

	
      declare var npm$namespace$MsPortalTestFx: {
        
        portal: typeof MsPortalTestFx$portal,
      }
declare module 'Locators' {
        declare export class Locator  {
seleniumLocator: any;
findElements(context: any): any;
toString(): string
}
	declare export class ContentLocator mixins Locator {
locators: Array<Locator>;
constructor(innerLocators: Locator[]): this;
findElements(context: any): any;
toString(): string
}
	declare export class ChainedLocator mixins Locator {
locators: Array<Locator>;
constructor(innerLocators: Locator[]): this;
findElements(context: any): any;
toString(): string
}
	declare export class By  {
static className(value: string): Locator;
static css(value: string): Locator;
static id(value: string): Locator;
static js(script: any, ...var_args: any[]): Locator;
static linkText(value: string): Locator;
static name(value: string): Locator;
static partialLinkText(value: string): Locator;
static tagName(value: string): Locator;
static xpath(value: string): Locator;
static text(value: string): Locator;
static chained(...values: Locator[]): Locator;
static content(...values: Locator[]): Locator
}
    }


declare module 'ActionBars' {
        declare export class ActionBarButton mixins MsPortalTestFx$PortalElement {
constructor(parentLocator?: MsPortalTestFx$Locators.Locator, baseLocator?: MsPortalTestFx$Locators.Locator): this;
click(): Q.Promise<void>
}
	declare export class CreateActionBar mixins MsPortalTestFx$PortalElement {
createButton: ActionBarButton;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator): this
}
	declare export class DeleteActionBar mixins MsPortalTestFx$PortalElement {
deleteButton: ActionBarButton;
cancelButton: ActionBarButton;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator): this
}
	declare export class PickerActionBar mixins MsPortalTestFx$PortalElement {
selectButton: ActionBarButton;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator): this
}
    }


declare module 'Blades' {
        declare export class Blade mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
title: string;
constructor(title: string): this;
clickCommand(commandText: string): Q.Promise<Blade>;
getTiles(): Q.Promise<MsPortalTestFx$Parts.Tile[]>
}
	declare export class CreateBlade mixins Blade {
actionBar: MsPortalTestFx$ActionBars.CreateActionBar
}
	declare export class BrowseResourceBlade mixins Blade {
constructor(title: string): this;
selectResource(resourceName: string): Q.Promise<void>;
filterItems(filter: string): Q.Promise<BrowseResourceBlade>
}
	declare export class PickerBlade mixins Blade {
pickItem(item: string): Q.Promise<void>
}
	declare export class SpecPickerBlade mixins Blade {
pickSpec(specCode: string): Q.Promise<void>
}
	declare export class QuickStartBlade mixins Blade {
constructor(): this;
clickLink(linkText: string): Q.Promise<void>
}
	declare export class UsersBlade mixins Blade {
constructor(): this
}
    }


declare module 'Controls' {
        declare export class FormElement mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
label: string;
constructor(baseLocator: MsPortalTestFx$Locators.Locator, parentLocator?: MsPortalTestFx$Locators.Locator, label?: string): this
}
	declare export class CheckBoxField mixins FormElement {
constructor(parentLocator?: MsPortalTestFx$Locators.Locator, label?: string): this
}
	declare export class SelectorField mixins FormElement {
constructor(parentLocator?: MsPortalTestFx$Locators.Locator, label?: string): this;
openPicker(): Q.Promise<void>
}
	declare export class CreatorAndSelectorField mixins FormElement {
constructor(parentLocator?: MsPortalTestFx$Locators.Locator, selectModeLabel?: string, createModeLabel?: string): this;
openPicker(): Q.Promise<void>;
clickCreateNew(): Q.Promise<CreatorAndSelectorField>;
enterNewValue(...var_args: string[]): Q.Promise<CreatorAndSelectorField>
}
	declare export class GridCell mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
constructor(text: string, parentLocator?: MsPortalTestFx$Locators.Locator): this;
getLocator(): MsPortalTestFx$Locators.Locator
}
	declare export class TextField mixins FormElement {
constructor(parentLocator?: MsPortalTestFx$Locators.Locator, label?: string, baseLocator?: MsPortalTestFx$Locators.Locator): this;
sendKeys(...var_args: string[]): Q.Promise<void>
}
	declare export class ResourceFilterTextField mixins TextField {
constructor(parentLocator?: MsPortalTestFx$Locators.Locator): this
}
	declare export class HotSpot mixins MsPortalTestFx$PortalElement {
constructor(parentLocator?: MsPortalTestFx$Locators.Locator, baseLocator?: MsPortalTestFx$Locators.Locator): this;
isSelected(): Q.Promise<boolean>
}
    }


declare module 'Parts' {
        declare export class Part mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
innerText: string;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator, innerText?: string, baseLocator?: MsPortalTestFx$Locators.Locator): this;
isSelected(): Q.Promise<boolean>;
isLoaded(): Q.Promise<boolean>;
waitUntilLoaded(timeout?: number): Q.Promise<boolean>;
isClickable(): Q.Promise<boolean>;
hasError(): Q.Promise<boolean>
}
	declare export class PartProperty mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
name: string;
constructor(name: string, parentLocator?: MsPortalTestFx$Locators.Locator): this;
getValue(): Q.Promise<string>
}
	declare export class ResourceSummaryPart mixins Part {
properties: Array<PartProperty>;
resourceGroupProperty: PartProperty;
quickStartHotSpot: MsPortalTestFx$Controls.HotSpot;
accessHotSpot: MsPortalTestFx$Controls.HotSpot;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator): this
}
	declare class PricingTierPart mixins Part {}
	declare export class Tile mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
progressLocator: MsPortalTestFx$Locators.Locator;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator): this;
tryPin(): Q.Promise<void>;
getPart(): Part;
waitUntilLoaded(timeout?: number): Q.Promise<void>
}
	declare export function canPinAllBladeParts(
targetBladeDeepLink: string,
targetBladeTitle: string,
timeout?: number): Q.Promise<boolean>

    }


declare module 'Commands' {
        declare export class ContextMenu mixins MsPortalTestFx$PortalElement {
constructor(): this;
hasItem(text: string): Q.Promise<boolean>;
clickItem(text: string): Q.Promise<void>
}
	declare export class ContextMenuItem mixins MsPortalTestFx$PortalElement {
constructor(parentLocator: MsPortalTestFx$Locators.Locator, text?: string): this
}
    }


declare module 'Notifications' {
        declare export class Notification mixins MsPortalTestFx$PortalElement {
constructor(): this;
getTitle(): Q.Promise<string>;
getDescription(): Q.Promise<string>
}
	declare export class NotificationsMenu mixins MsPortalTestFx$PortalElement {
constructor(): this;
waitForNewNotification(
title?: string,
description?: string,
timeout?: number): Q.Promise<Notification>
}
    }


declare module 'Tests' {
        declare module 'Parts' {
        declare export class Part mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
innerText: string;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator, innerText?: string, baseLocator?: MsPortalTestFx$Locators.Locator): this;
isSelected(): Q.Promise<boolean>;
isLoaded(): Q.Promise<boolean>;
waitUntilLoaded(timeout?: number): Q.Promise<boolean>;
isClickable(): Q.Promise<boolean>;
hasError(): Q.Promise<boolean>
}
	declare export class PartProperty mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
name: string;
constructor(name: string, parentLocator?: MsPortalTestFx$Locators.Locator): this;
getValue(): Q.Promise<string>
}
	declare export class ResourceSummaryPart mixins Part {
properties: Array<PartProperty>;
resourceGroupProperty: PartProperty;
quickStartHotSpot: MsPortalTestFx$Controls.HotSpot;
accessHotSpot: MsPortalTestFx$Controls.HotSpot;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator): this
}
	declare class PricingTierPart mixins Part {}
	declare export class Tile mixins MsPortalTestFx$MsPortalTestFx$PortalElement {
progressLocator: MsPortalTestFx$Locators.Locator;
constructor(parentLocator?: MsPortalTestFx$Locators.Locator): this;
tryPin(): Q.Promise<void>;
getPart(): Part;
waitUntilLoaded(timeout?: number): Q.Promise<void>
}
	declare export function canPinAllBladeParts(
targetBladeDeepLink: string,
targetBladeTitle: string,
timeout?: number): Q.Promise<boolean>

    }

    }


declare export class MsPortalTestFx$PortalElement  {
baseLocator: MsPortalTestFx$Locators.Locator;
parentLocator: MsPortalTestFx$Locators.Locator;
constructor(baseLocator: MsPortalTestFx$Locators.Locator, parentLocator?: MsPortalTestFx$Locators.Locator): this;
click(): Q.Promise<void>;
rightClick(): Q.Promise<void>;
getAttribute(attributeName: string): Q.Promise<string>;
sendKeys(...var_args: string[]): Q.Promise<void>;
getText(): Q.Promise<string>;
isPresent(): Q.Promise<boolean>;
isElementPresent(subLocator: MsPortalTestFx$Locators.Locator): Q.Promise<boolean>;
isDisplayed(): Q.Promise<boolean>;
getLocator(): MsPortalTestFx$Locators.Locator
}

declare export interface MsPortalTestFx$TestExtension {
name: string,
uri: string
} 

declare export interface MsPortalTestFx$Feature {
name: string,
value: string
} 

declare export interface MsPortalTestFx$PortalContext {
capabilities: {
browserName: string,
chromeOptions: {
args: string[]
}
},
chromeDriverPath?: string,
portalUrl: string,
signInUrl?: string,
signInEmail?: string,
signInPassword?: string,
features?: MsPortalTestFx$Feature[],
testExtensions?: MsPortalTestFx$TestExtension[]
} 

declare export  class MsPortalTestFx$LogLevel {
  constructor(...args: empty): mixed;
static +All: Class<MsPortalTestFx$LogLevel__All> & MsPortalTestFx$LogLevel__All & 0;// 0
static +Debug: Class<MsPortalTestFx$LogLevel__Debug> & MsPortalTestFx$LogLevel__Debug & 1;// 1
static +Info: Class<MsPortalTestFx$LogLevel__Info> & MsPortalTestFx$LogLevel__Info & 2;// 2
static +Warning: Class<MsPortalTestFx$LogLevel__Warning> & MsPortalTestFx$LogLevel__Warning & 3;// 3
static +Severe: Class<MsPortalTestFx$LogLevel__Severe> & MsPortalTestFx$LogLevel__Severe & 4;// 4
static +Off: Class<MsPortalTestFx$LogLevel__Off> & MsPortalTestFx$LogLevel__Off & 5;// 5

}

declare class MsPortalTestFx$LogLevel__All mixins MsPortalTestFx$LogLevel {}
declare class MsPortalTestFx$LogLevel__Debug mixins MsPortalTestFx$LogLevel {}
declare class MsPortalTestFx$LogLevel__Info mixins MsPortalTestFx$LogLevel {}
declare class MsPortalTestFx$LogLevel__Warning mixins MsPortalTestFx$LogLevel {}
declare class MsPortalTestFx$LogLevel__Severe mixins MsPortalTestFx$LogLevel {}
declare class MsPortalTestFx$LogLevel__Off mixins MsPortalTestFx$LogLevel {}


declare export class MsPortalTestFx$Portal  {
portalContext: MsPortalTestFx$PortalContext;
goHome(timeout?: number): Q.Promise<void>;
openGalleryCreateBlade(
galleryPackageName: string,
bladeTitle: string,
timeout?: number): Q.Promise<MsPortalTestFx$Blades.CreateBlade>;
openBrowseBlade(
resourceProvider: string,
resourceType: string,
bladeTitle: string,
timeout?: number): Q.Promise<MsPortalTestFx$Blades.BrowseResourceBlade>;
openResourceBlade(
resourceId: string,
bladeTitle: string,
timeout?: number): Q.Promise<MsPortalTestFx$Blades.Blade>;
navigateToDeepLink(deepLink: string, timeout?: number): Q.Promise<any>;
waitForElementVisible(locator: MsPortalTestFx$Locators.Locator, timeout?: number): Q.Promise<boolean>;
waitForElementNotVisible(locator: MsPortalTestFx$Locators.Locator, timeout?: number): Q.Promise<boolean>;
waitUntilElementContainsAttribute(
locator: MsPortalTestFx$Locators.Locator,
attributeName: string,
attributeValue: string,
timeout?: number): Q.Promise<any>;
waitUntilElementDoesNotContainAttribute(
locator: MsPortalTestFx$Locators.Locator,
attributeName: string,
attributeValue: string,
timeout?: number): Q.Promise<any>;
waitForElementLocated(locator: MsPortalTestFx$Locators.Locator, timeout?: number): Q.Promise<any>;
waitForElementsLocated(locator: MsPortalTestFx$Locators.Locator, timeout?: number): Q.Promise<any[]>;
takeScreenshot(filePrefix?: string): Q.Promise<string>;
getBrowserLogs(level: MsPortalTestFx$LogLevel): Q.Promise<string[]>;
executeScript<T>(script: string): Q.Promise<T>;
applyFeature(name: string, value: string): void;
getCurrentUrl(): Q.Promise<string>;
quit(): Q.Promise<any>
}

declare export class MsPortalTestFx$SplashScreen mixins MsPortalTestFx$PortalElement {
clickUntrustedExtensionsOkButton(): Q.Promise<void>
}

declare export class MsPortalTestFx$StartBoard mixins MsPortalTestFx$PortalElement {
constructor(): this;
getTiles(): Q.Promise<MsPortalTestFx$Parts.Tile[]>
}

declare export var MsPortalTestFx$portal: MsPortalTestFx$Portal;
    }
