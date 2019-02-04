declare module 'inboxsdk' {
        declare module.exports: typeof InboxSDK

	
      declare var npm$namespace$InboxSDK: {
        load: typeof InboxSDK$load,
loadScript: typeof InboxSDK$loadScript,
        
      }
declare function InboxSDK$load(
version: number,
appId?: string,
opts?: InboxSDK$LoadOptions): Promise<InboxSDK$InboxSDKInstance>


declare function InboxSDK$loadScript(url: string, options?: InboxSDK$LoadScriptOptions): Promise<void>


declare interface InboxSDK$LoadOptions {
appName?: string,
appIconUrl?: string,
suppressAddonTitle?: string
} 

declare interface InboxSDK$LoadScriptOptions {
nowrap?: boolean
} 

declare interface InboxSDK$InboxSDKInstance {
Compose: Compose$Compose$ComposeInstance,
Lists: Lists$Lists$ListsInstance,
Conversations: Conversations$Conversations$ConversationsInstance,
Toolbars: Toolbars$Toolbars$ToolbarsInstance,
Router: Router$Router$RouterInstance,
NavMenu: NavMenu$NavMenu$NavMenuInstance,
Widgets: Widgets$Widgets$WidgetsInstance,
ButterBar: ButterBar$ButterBar$ButterBarInstance,
Search: Search$Search$SearchInstance,
User: User$User$UserInstance,
Keyboard: Keyboard$Keyboard$KeyboardInstance,
Global: Global$Global$GlobalInstance
} 

declare interface Common$Contact {
name: string,
emailAddress: string
} 

declare interface Common$DropdownView {
setPlacementOptions(options: Common$PositionOptions): void,
close(): void,
reposition(): void,
el: HTMLElement,
destroyed: boolean,
on(name: "destroy", cb: () => void): void,
on(name: "preautoclose", cb: (event: Common$PreAutoCloseEvent) => void): void
} 

declare interface Common$PreAutoCloseEvent {
type: "outsideInteraction" | "escape",
cause: Event,
cancel(): void
} 

declare interface Common$PositionOptions {
position?: string,
forcePosition?: boolean,
hAlign?: string,
forceHAlign?: boolean,
vAlign?: string,
forceVAlign?: boolean,
buffer?: number,
topBuffer?: number,
bottomBuffer?: number,
leftBuffer?: number,
rightBuffer?: number
} 

declare interface Common$SimpleElementView {
destroy(): void,
el: HTMLElement,
destroyed: boolean,
on(name: "destroy", cb: () => void): void
} 

declare interface Compose$ComposeInstance {
registerComposeViewHandler(handler: (composeView: Compose$ComposeView) => void): () => void,
openNewComposeView(): Promise<Compose$ComposeView>
} 

declare interface Compose$ComposeView {
addButton(buttonDescriptor: Compose$ComposeButtonDescriptor): void,
addStatusBar(statusBarDescriptor: Compose$StatusBarDescriptor): Compose$StatusBarView,
close(): void,
send(options?: Compose$SendOptions): void,
getBodyElement(): HTMLElement,
getInitialMessageID(): string,
getThreadID(): string,
getDraftID(): Promise<string>,
getCurrentDraftID(): Promise<string | null>,
getHTMLContent(): string,
getSelectedBodyHTML(): string,
getSelectedBodyText(): string,
getSubject(): string,
getTextContent(): string,
getToRecipients(): Common$Common$Contact[],
getCcRecipients(): Common$Common$Contact[],
getBccRecipients(): Common$Common$Contact[],
insertTextIntoBodyAtCursor(text: string): void,
insertHTMLIntoBodyAtCursor(html: string | HTMLElement): HTMLElement,
insertLinkChipIntoBodyAtCursor(text: string, url: string, iconUrl: string): HTMLElement,
insertLinkIntoBodyAtCursor(text: string, url: string): HTMLElement,
isInlineReplyForm(): boolean,
isFullscreen(): boolean,
setFullscreen(minimized: boolean): void,
isMinimized(): boolean,
setMinimized(minimized: boolean): void,
popOut(): Promise<Compose$ComposeView>,
setTitleBarColor(color: string): () => void,
isReply(): boolean,
setToRecipients(emails: string[]): void,
setCcRecipients(emails: string[]): void,
setBccRecipients(emails: string[]): void,
getFromContact(): Common$Common$Contact,
getFromContactChoices(): Common$Common$Contact[],
setFromEmail(email: string): void,
setSubject(text: string): void,
setBodyHTML(html: string): void,
setBodyText(text: string): void,
attachFiles(files: Blob[]): Promise<void>,
attachInlineFiles(Files: Blob[]): Promise<void>,
on(
name: "destroy",
cb: (event: {
messageID: string,
closedByInboxSDK: boolean
}) => void): void,
on(name: "fullscreenChanged", cb: (event: {
fullscreen: boolean
}) => void): void,
on(
name: "fromContactChanged"
| "toContactAdded"
| "toContactRemoved"
| "ccContactAdded"
| "ccContactRemoved"
| "bccContactAdded"
| "bccContactRemoved",
cb: (event: {
contact: Common$Common$Contact
}) => void): void,
on(
name: "recipientsChanged",
cb: (event: Compose$RecipientsChangedEvent) => void): void,
on(name: "presending", cb: (event: {
cancel: () => void
}) => void): void,
on(
name: "sent",
cb: (
event: {
getThreadID: () => Promise<string>,
getMessageID: () => Promise<string>
}) => void): void,
on(
name: "discard"
| "sendCanceled"
| "sending"
| "bodyChanged"
| "minimized"
| "restored",
cb: () => void): void,
destroyed: boolean
} 

declare interface Compose$RecipientsChangedEvent {
to: {
added: Common$Common$Contact[],
removed: Common$Common$Contact[]
},
cc: {
added: Common$Common$Contact[],
removed: Common$Common$Contact[]
},
bcc: {
added: Common$Common$Contact[],
removed: Common$Common$Contact[]
}
} 

declare interface Compose$ComposeButtonDescriptor {
title: string,
iconUrl?: string,
iconClass?: string,
onClick: (event: Compose$ComposeButtonClickEvent) => void,
hasDropdown?: boolean,
type?: "MODIFIER" | "SEND_ACTION",
orderHint?: number,
enabled?: boolean
} 

declare interface Compose$ComposeButtonClickEvent {
composeView: Compose$ComposeView,
dropdown: Common$Common$DropdownView
} 

declare interface Compose$StatusBarDescriptor {
height?: number,
orderHint?: number
} 

declare type Compose$StatusBarView = {
setHeight(height: number): void
} & Common$Common$SimpleElementView


declare interface Compose$SendOptions {
sendAndArchive?: boolean
} 

declare interface Lists$ListsInstance {
registerThreadRowViewHandler(handler: (threadRowView: Lists$ThreadRowView) => any): () => void
} 

declare interface Lists$ThreadRowView {
addLabel(labelDescriptor: Lists$LabelDescriptor): void,
addImage(imageDescriptor: Lists$ImageDescriptor): void,
addButton(buttonDescriptor: Lists$ThreadRowButtonDescriptor): void,
addActionButton(buttonDescriptor: Lists$ThreadRowActionButtonDescriptor): void,
addAttachmentIcon(
threadRowAttachmentIconDescriptor: Lists$ThreadRowAttachmentIconDescriptor): void,
replaceDate(threadRowDateDescriptor: Lists$ThreadRowDateDescriptor): void,
replaceDraftLabel(draftLabelDescriptor: Lists$ThreadRowDraftLabelDescriptor): void,
getSubject(): string,
getDateString(): string,
getThreadIDAsync(): Promise<string>,
getThreadIDIfStableAsync(): Promise<string | null>,
getDraftID(): Promise<string>,
getVisibleDraftCount(): number,
getVisibleMessageCount(): number,
getContacts(): Common$Common$Contact[],
on(name: "destroy", cb: () => void): void,
destroyed: boolean
} 

declare interface Lists$ThreadRowButtonDescriptor {
title: string,
iconUrl: string,
iconClass?: string,
onClick: (event: Lists$ThreadRowButtonClickEvent) => void,
hasDropdown?: boolean
} 

declare interface Lists$ThreadRowButtonClickEvent {
threadRowView: Lists$ThreadRowView,
dropdown?: Common$Common$DropdownView
} 

declare interface Lists$ThreadRowActionButtonDescriptor {
type: "LINK",
title: string,
className?: string,
onClick?: (event: any) => void,
url: string
} 

declare interface Lists$LabelDescriptor {
title: string,
foregroundColor?: string,
backgroundColor?: string,
iconUrl: string,
iconClass?: string,
iconBackgroundColor?: string
} 

declare interface Lists$ImageDescriptor {
imageUrl: string,
imageClass?: string,
tooltip?: string,
orderHint?: number
} 

declare interface Lists$ThreadRowDateDescriptor {
text: string,
textColor?: string,
tooltip?: string
} 

declare interface Lists$ThreadRowAttachmentIconDescriptor {
iconUrl?: string,
iconClass?: string,
tooltip?: string
} 

declare interface Lists$ThreadRowDraftLabelDescriptor {
text: string,
count?: string
} 

declare interface Conversations$ConversationsInstance {
registerThreadViewHandler(handler: (threadView: Conversations$ThreadView) => void): () => void,
registerMessageViewHandler(handler: (messageView: Conversations$MessageView) => void): () => void,
registerMessageViewHandlerAll(handler: (messageView: Conversations$MessageView) => void): () => void,
registerFileAttachmentCardViewHandler(
handler: (attachmentCardView: Conversations$AttachmentCardView) => void): () => void
} 

declare interface Conversations$ThreadView {
addNoticeBar(): Common$Common$SimpleElementView,
addSidebarContentPanel(
contentPanelDescriptor: Conversations$ContentPanelDescriptor): Conversations$ContentPanelView,
getMessageViews(): Conversations$MessageView[],
getMessageViewsAll(): Conversations$MessageView[],
getSubject(): string,
getThreadIDAsync(): Promise<string>,
on(
name: "contactHover",
cb: (event: Conversations$ContactHoverEvent) => void): void,
on(name: "destroy", cb: () => void): void,
destroyed: boolean
} 

declare interface Conversations$ContactHoverEvent {
contact: Common$Common$Contact,
contactType: "sender" | "recipient",
messageView: Conversations$MessageView,
threadView: Conversations$ThreadView
} 

declare interface Conversations$MessageView {
addAttachmentCardView(
cardOptions: Conversations$AttachmentCardOptions | Conversations$AttachmentCardNoPreviewOptions): Conversations$AttachmentCardView,
addAttachmentsToolbarButton(buttonOptions: Conversations$AttachmentsToolbarButtonDescriptor): void,
addToolbarButton(options: Conversations$MessageViewToolbarButtonDescriptor): void,
getBodyElement(): HTMLElement,
getMessageIDAsync(): Promise<string>,
getFileAttachmentCardViews(): Conversations$AttachmentCardView[],
isElementInQuotedArea(): boolean,
isLoaded(): boolean,
getLinksInBody(): Conversations$MessageViewLinkDescriptor[],
getSender(): Common$Common$Contact,
getRecipientEmailAddresses(): string[],
getRecipientsFull(): Promise<Common$Common$Contact[]>,
getThreadView(): Conversations$ThreadView,
getDateString(): string,
addAttachmentIcon(iconDescriptor: Conversations$MessageAttachmentIconDescriptor): void,
getViewState(): Conversations$MessageViewViewStates,
on(
name: "viewStateChange",
cb: (
event: {
newViewState: Conversations$MessageViewViewStates,
oldViewState: Conversations$MessageViewViewStates,
messageView: Conversations$MessageView
}) => void): void,
on(
name: "contactHover",
cb: (event: Conversations$ContactHoverEvent) => void): void,
on(name: "destroy" | "load", cb: () => void): void,
destroyed: boolean
} 

declare type Conversations$MessageViewViewStates = "HIDDEN" | "COLLAPSED" | "EXPANDED";

declare interface Conversations$ContentPanelView {
remove(): void,
on(name: "destroy" | "activate" | "deactivate", cb: () => void): void,
destroyed: boolean
} 

declare interface Conversations$AttachmentCardView {
getAttachmentType(): string,
addButton(buttonDescriptor: Conversations$CustomButtonDescriptor): void,
getTitle(): string,

/**
 * @deprecated . Use AttachmentCardClickEvent.getDownloadURL() instead
 */
getDownloadURL(): Promise<string>,
getMessageView(): Conversations$MessageView | null,
on(name: "destroy", cb: () => void): void,
destroyed: boolean
} 

declare interface Conversations$AttachmentCardOptions {
title: string,
description: string,
previewUrl: string,
previewThumbnailUrl: string,
failoverPreviewIconUrl: string,
previewOnClick: (event: Conversations$PreviewClickEvent) => void,
fileIconImageUrl: string,
buttons: Array<Conversations$DownloadButtonDescriptor | Conversations$CustomButtonDescriptor>,
foldColor?: string,
mimeType?: string
} 

declare interface Conversations$AttachmentCardNoPreviewOptions {
title: string,
description: string,
previewUrl: string,
iconThumbnailUrl: string,
previewOnClick: (event: Conversations$PreviewClickEvent) => void,
fileIconImageUrl: string,
buttons: Array<Conversations$DownloadButtonDescriptor | Conversations$CustomButtonDescriptor>,
foldColor?: string
} 

declare interface Conversations$PreviewClickEvent {
attachmentCardView: Conversations$AttachmentCardView,
preventDefault(): void
} 

declare interface Conversations$ContentPanelDescriptor {
el: HTMLElement,
title: string,
iconUrl: string,
appName?: string,
appIconUrl?: string,
id?: string,
hideTitleBar?: boolean,
orderHint?: number
} 

declare interface Conversations$DownloadButtonDescriptor {
downloadUrl: string,
downloadFilename?: string,
onClick: (event: any) => void,
openInNewTab?: boolean
} 

declare interface Conversations$CustomButtonDescriptor {
iconUrl: string,
tooltip: string,
onClick: (event: Conversations$AttachmentCardClickEvent) => void
} 

declare interface Conversations$AttachmentCardClickEvent {
getDownloadURL(): Promise<string>
} 

declare interface Conversations$AttachmentsToolbarButtonDescriptor {
tooltip: string,
iconUrl: string,
onClick: (event: Conversations$AttachmentsToolbarButtonEvent) => void
} 

declare interface Conversations$AttachmentsToolbarButtonEvent {
attachmentCardViews: Conversations$AttachmentCardView[]
} 

declare interface Conversations$MessageViewLinkDescriptor {
text: string,
html: string,
element: HTMLElement,
href: string,
isInQuotedArea: boolean
} 

declare interface Conversations$MessageAttachmentIconDescriptor {
iconUrl: string,
iconClass?: string,
tooltip: string,
onClick?: () => void
} 

declare interface Conversations$MessageViewToolbarButtonDescriptor {
section: "MORE",
title: string,
iconUrl: string,
onClick: () => void,
iconClass?: string,
orderHint: number
} 

declare interface Toolbars$ToolbarsInstance {
registerThreadButton(toolbarButtonDescriptor: Toolbars$ToolbarButtonDescriptor): () => void,

/**
 * @deprecated . use registerThreadButton
 * @param toolbarButtonDescriptor
 */
registerToolbarButtonForList(toolbarButtonDescriptor: Toolbars$ToolbarButtonDescriptor): () => void,

/**
 * @deprecated . use registerThreadButton
 * @param toolbarButtonDescriptor
 */
registerToolbarButtonForThreadView(toolbarButtonDescriptor: Toolbars$ToolbarButtonDescriptor): () => void,
addToolbarButtonForApp(
appToolbarButtonDescriptor: Toolbars$AppToolbarButtonDescriptor): Toolbars$AppToolbarButtonView
} 

declare interface Toolbars$ToolbarButtonDescriptor {
title: string,
onClick: (event: Toolbars$ToolbarButtonEvent) => void,
iconUrl?: string,
iconClass?: string,
positions?: Toolbars$ToolbarButtonPosition[],
threadSection?: Toolbars$SectionNames,
listSection?: Toolbars$SectionNames,
hasDropdown?: boolean,
hideFor?: (routeView: Router$Router$RouteView) => void,
orderHint?: number,
keyboardShortcutHandle?: Keyboard$Keyboard$KeyboardShortcutHandle
} 

declare type Toolbars$ToolbarButtonPosition = "THREAD" | "ROW" | "LIST";

declare interface Toolbars$ToolbarButtonEvent {
position: Toolbars$ToolbarButtonPosition,
selectedThreadRowViews: Lists$Lists$ThreadRowView[],
selectedThreadViews: Conversations$Conversations$ThreadView[],
dropdown?: Common$Common$DropdownView
} 

declare interface Toolbars$AppToolbarButtonDescriptor {
title: string,
titleClass?: string,
iconUrl: string,
iconClass?: string,
onClick: (event: Toolbars$AppToolbarButtonEvent) => void,
arrowColor?: string
} 

declare interface Toolbars$AppToolbarButtonView {
open(): void,
close(): void,
remove(): void,
on(name: "destroy", cb: () => void): void,
destroyed: boolean
} 

declare interface Toolbars$AppToolbarButtonEvent {
dropdown: Common$Common$DropdownView
} 

declare type Toolbars$SectionNames = "INBOX_STATE" | "METADATA_STATE" | "OTHER";

declare interface Router$RouterInstance {
createLink(routeID: string | Router$NativeRouteIDs, params: Router$RouteParams): string,
goto(routeID: string | Router$NativeRouteIDs, params: Router$RouteParams): void,
handleCustomRoute(
routeID: string,
handler: (customRouteView: Router$CustomRouteView) => void): () => void,
handleAllRoutes(handler: (routeView: Router$RouteView) => void): () => void,
handleListRoute(
routeID: Router$NativeListRouteIDs,
handler: (listRouteView: Router$ListRouteView) => void): () => void,
handleCustomListRoute(
routeID: string,
handler: (
offset: number,
max: number) => Router$CustomListDescriptor | Promise<Router$CustomListDescriptor>): () => void,
getCurrentRouteView(): Router$RouteView,
Router$NativeListRouteIDs: typeof NativeListRouteIDs,
Router$NativeRouteIDs: typeof NativeRouteIDs
} 

declare interface Router$CustomListDescriptor {
threads: Array<Router$ThreadDescriptor | string>,
total?: number,
hasMore?: boolean
} 

declare interface Router$ThreadDescriptor {
rfcMessageId?: string,
gmailThreadId?: string
} 

declare interface Router$RouteParams {
[key: number]: string | number,
[key: string]: string | number
} 

declare interface Router$RouteView {
getRouteID(): string,
getRouteType(): Router$RouteTypes,
getParams(): Router$RouteParams,
on(name: "destroy", cb: () => void): void,
destroyed: boolean
} 

declare type Router$RouteTypes = "LIST"
| "THREAD"
| "SETTINGS"
| "CHAT"
| "CUSTOM"
| "UNKNOWN";

declare type Router$CustomRouteView = {
getElement(): HTMLElement,
setFullWidth(fullWidth: boolean): void
} & Router$RouteView


declare type Router$ListRouteView = {
addCollapsibleSection(options: Router$SectionDescriptor): Router$CollapsibleSectionView,
addSection(options: Router$SectionDescriptor): Router$SectionView,
refresh(): void
} & Router$RouteView


declare interface Router$SectionView {
remove(): void,
on(name: "destroy", cb: () => void): void,
destroyed: boolean
} 

declare type Router$CollapsibleSectionView = {
setCollapsed(value: boolean): void,
remove(): void,
on(name: "destroy" | "expanded" | "collapsed", cb: () => void): void
} & Router$SectionView


declare interface Router$SectionDescriptor {
title: string,
subtitle?: string,
titleLinkText?: string,
onTitleLinkClick?: () => void,
hasDropdown?: boolean,
onDropdownClick?: (event: Router$SectionDropdownClickEvent) => void,
tableRows?: Router$RowDescriptor[],
contentElement?: HTMLElement,
footerLinkText?: string,
onFooterLinkClick?: (event: any) => void
} 

declare interface Router$SectionDropdownClickEvent {
dropdown: Common$Common$DropdownView
} 

declare interface Router$RowDescriptor {
title: string,
body: string,
shortDetailText: string,
isRead: string,
labels: Lists$Lists$LabelDescriptor[],
iconUrl?: string,
iconClass?: string,
routeID?: string,
routeParams?: string[],
onClick?: () => void
} 

declare  class Router$NativeRouteIDs {
  constructor(...args: empty): mixed;
static +INBOX: Class<Router$NativeRouteIDs__INBOX> & Router$NativeRouteIDs__INBOX & 0;// 0
static +ALL_MAIL: Class<Router$NativeRouteIDs__ALL_MAIL> & Router$NativeRouteIDs__ALL_MAIL & 1;// 1
static +SENT: Class<Router$NativeRouteIDs__SENT> & Router$NativeRouteIDs__SENT & 2;// 2
static +STARRED: Class<Router$NativeRouteIDs__STARRED> & Router$NativeRouteIDs__STARRED & 3;// 3
static +DRAFTS: Class<Router$NativeRouteIDs__DRAFTS> & Router$NativeRouteIDs__DRAFTS & 4;// 4
static +SNOOZED: Class<Router$NativeRouteIDs__SNOOZED> & Router$NativeRouteIDs__SNOOZED & 5;// 5
static +DONE: Class<Router$NativeRouteIDs__DONE> & Router$NativeRouteIDs__DONE & 6;// 6
static +REMINDERS: Class<Router$NativeRouteIDs__REMINDERS> & Router$NativeRouteIDs__REMINDERS & 7;// 7
static +LABEL: Class<Router$NativeRouteIDs__LABEL> & Router$NativeRouteIDs__LABEL & 8;// 8
static +TRASH: Class<Router$NativeRouteIDs__TRASH> & Router$NativeRouteIDs__TRASH & 9;// 9
static +SPAM: Class<Router$NativeRouteIDs__SPAM> & Router$NativeRouteIDs__SPAM & 10;// 10
static +IMPORTANT: Class<Router$NativeRouteIDs__IMPORTANT> & Router$NativeRouteIDs__IMPORTANT & 11;// 11
static +SEARCH: Class<Router$NativeRouteIDs__SEARCH> & Router$NativeRouteIDs__SEARCH & 12;// 12
static +THREAD: Class<Router$NativeRouteIDs__THREAD> & Router$NativeRouteIDs__THREAD & 13;// 13
static +CHATS: Class<Router$NativeRouteIDs__CHATS> & Router$NativeRouteIDs__CHATS & 14;// 14
static +CHAT: Class<Router$NativeRouteIDs__CHAT> & Router$NativeRouteIDs__CHAT & 15;// 15
static +CONTACTS: Class<Router$NativeRouteIDs__CONTACTS> & Router$NativeRouteIDs__CONTACTS & 16;// 16
static +CONTACT: Class<Router$NativeRouteIDs__CONTACT> & Router$NativeRouteIDs__CONTACT & 17;// 17
static +SETTINGS: Class<Router$NativeRouteIDs__SETTINGS> & Router$NativeRouteIDs__SETTINGS & 18;// 18
static +ANY_LIST: Class<Router$NativeRouteIDs__ANY_LIST> & Router$NativeRouteIDs__ANY_LIST & 19;// 19

}

declare class Router$NativeRouteIDs__INBOX mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__ALL_MAIL mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__SENT mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__STARRED mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__DRAFTS mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__SNOOZED mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__DONE mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__REMINDERS mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__LABEL mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__TRASH mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__SPAM mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__IMPORTANT mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__SEARCH mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__THREAD mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__CHATS mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__CHAT mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__CONTACTS mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__CONTACT mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__SETTINGS mixins Router$NativeRouteIDs {}
declare class Router$NativeRouteIDs__ANY_LIST mixins Router$NativeRouteIDs {}


declare  class Router$NativeListRouteIDs {
  constructor(...args: empty): mixed;
static +INBOX: Class<Router$NativeListRouteIDs__INBOX> & Router$NativeListRouteIDs__INBOX & 0;// 0
static +ALL_MAIL: Class<Router$NativeListRouteIDs__ALL_MAIL> & Router$NativeListRouteIDs__ALL_MAIL & 1;// 1
static +SENT: Class<Router$NativeListRouteIDs__SENT> & Router$NativeListRouteIDs__SENT & 2;// 2
static +STARRED: Class<Router$NativeListRouteIDs__STARRED> & Router$NativeListRouteIDs__STARRED & 3;// 3
static +DRAFTS: Class<Router$NativeListRouteIDs__DRAFTS> & Router$NativeListRouteIDs__DRAFTS & 4;// 4
static +SNOOZED: Class<Router$NativeListRouteIDs__SNOOZED> & Router$NativeListRouteIDs__SNOOZED & 5;// 5
static +DONE: Class<Router$NativeListRouteIDs__DONE> & Router$NativeListRouteIDs__DONE & 6;// 6
static +REMINDERS: Class<Router$NativeListRouteIDs__REMINDERS> & Router$NativeListRouteIDs__REMINDERS & 7;// 7
static +LABEL: Class<Router$NativeListRouteIDs__LABEL> & Router$NativeListRouteIDs__LABEL & 8;// 8
static +TRASH: Class<Router$NativeListRouteIDs__TRASH> & Router$NativeListRouteIDs__TRASH & 9;// 9
static +SPAM: Class<Router$NativeListRouteIDs__SPAM> & Router$NativeListRouteIDs__SPAM & 10;// 10
static +IMPORTANT: Class<Router$NativeListRouteIDs__IMPORTANT> & Router$NativeListRouteIDs__IMPORTANT & 11;// 11
static +SEARCH: Class<Router$NativeListRouteIDs__SEARCH> & Router$NativeListRouteIDs__SEARCH & 12;// 12
static +ANY_LIST: Class<Router$NativeListRouteIDs__ANY_LIST> & Router$NativeListRouteIDs__ANY_LIST & 13;// 13

}

declare class Router$NativeListRouteIDs__INBOX mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__ALL_MAIL mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__SENT mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__STARRED mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__DRAFTS mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__SNOOZED mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__DONE mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__REMINDERS mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__LABEL mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__TRASH mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__SPAM mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__IMPORTANT mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__SEARCH mixins Router$NativeListRouteIDs {}
declare class Router$NativeListRouteIDs__ANY_LIST mixins Router$NativeListRouteIDs {}


declare interface NavMenu$NavMenuInstance {
addNavItem(navItemDescriptor: NavMenu$NavItemDescriptor): NavMenu$NavItemView
} 

declare interface NavMenu$NavItemView {
addNavItem(navItemDescriptor: NavMenu$NavItemDescriptor): NavMenu$NavItemView,
remove(): void,
isCollapsed(): boolean,
setCollapsed(collapseValue: boolean): void,
on(name: "destroy", cb: () => void): void,
destroyed: boolean
} 

declare interface NavMenu$NavItemDescriptor {
name: string,
routeID?: string,
routeParams?: {[key: string]: any},
onClick?: (event: {
preventDefault(): void
}) => void,
orderHint?: number,
accessory?: NavMenu$CreateAccessoryDescriptor | NavMenu$IconButtonAccessoryDescriptor | NavMenu$DropdownButtonAccessoryDescriptor,
iconUrl?: string,
iconClass?: string,
backgroundColor?: string,
expanderForegroundColor?: string,
type?: NavMenu$NavItemTypes
} 

declare interface NavMenu$CreateAccessoryDescriptor {
type: "CREATE",
onClick: () => void
} 

declare interface NavMenu$IconButtonAccessoryDescriptor {
type: "ICON_BUTTON",
onClick: () => void,
iconUrl: string,
iconClass?: string
} 

declare interface NavMenu$DropdownButtonAccessoryDescriptor {
type: "DROPDOWN_BUTTON",
buttonBackgroundColor: string,
buttonForegroundColor: string,
onClick: (event: NavMenu$DropdownButtonClickEvent) => void
} 

declare interface NavMenu$DropdownButtonClickEvent {
dropdown: Common$Common$DropdownView
} 

declare type NavMenu$NavItemTypes = "MANAGE" | "NAVIGATION";

declare interface Widgets$WidgetsInstance {
showModalView(options: Widgets$ModalOptions): Widgets$ModalView,
showMoleView(options: Widgets$MoleOptions): Widgets$MoleView,
showDrawerView(options: Widgets$DrawerOptions): Widgets$DrawerView
} 

declare interface Widgets$ModalOptions {
el: HTMLElement,
chrome?: boolean,
constrainTitleWidth?: boolean,
showCloseButton?: boolean,
title?: string,
buttons?: Widgets$ModalButtonDescriptor[]
} 

declare interface Widgets$ModalButtonDescriptor {
text: string,
title: string,
onClick: () => void,
type?: "PRIMARY_ACTION" | "SECONDARY_ACTION",
color?: string,
orderHint?: number
} 

declare interface Widgets$MoleOptions {
el: HTMLElement,
title?: string,
titleEl?: HTMLElement,
minimizedTitleEl?: HTMLElement,
className?: string,
titleButtons?: Widgets$MoleButtonDescriptor[],
chrome?: boolean
} 

declare interface Widgets$MoleButtonDescriptor {
title: string,
iconUrl: string,
iconClass?: string,
onClick: () => void
} 

declare interface Widgets$DrawerOptions {
el: HTMLElement,
chrome?: boolean,
title?: string,
composeView?: Compose$Compose$ComposeView,
closeWithCompose?: boolean
} 

declare interface Widgets$ModalView {
close(): void,
on(name: "destroy", cb: () => void): void,
destroyed: boolean
} 

declare interface Widgets$MoleView {
close(): void,
setTitle(text: string): void,
setMinimized(minimized: boolean): void,
getMinimized(): boolean,
on(name: "destroy" | "minimize" | "restore", cb: () => void): void,
destroyed: boolean
} 

declare interface Widgets$DrawerView {
close(): void,
associateComposeView(composeView: Compose$Compose$ComposeView, closeWithCompose: boolean): void,
disassociateComposeView(): void,
on(name: "destroy" | "slideAnimationDone" | "closing", cb: () => void): void,
destroyed: boolean
} 

declare interface ButterBar$ButterBarInstance {
showMessage(options: ButterBar$MessageDescriptor): {[key: string]: any},
showLoading(): {[key: string]: any},
showError(options: ButterBar$MessageDescriptor): {[key: string]: any},
showSaving(options: ButterBar$SavingMessageDescriptor): {[key: string]: any},
hideMessage(messageKey: {[key: string]: any} | string): void,
hideGmailMessage(): void
} 

declare interface ButterBar$MessageDescriptorBase {
className?: string,
priority?: number,
time?: number,
hideOnViewChanged?: boolean,
persistent?: boolean,
messageKey?: {[key: string]: any} | string
} 

declare type ButterBar$MessageDescriptorText = {
text: string
} & ButterBar$MessageDescriptorBase


declare type ButterBar$MessageDescriptorHtml = {
html: string
} & ButterBar$MessageDescriptorBase


declare type ButterBar$MessageDescriptorHtmlElement = {
el: HTMLElement
} & ButterBar$MessageDescriptorBase


declare type ButterBar$MessageDescriptor = ButterBar$MessageDescriptorText | ButterBar$MessageDescriptorHtml | ButterBar$MessageDescriptorHtmlElement;

declare type ButterBar$SavingMessageDescriptorBase = {
confirmationText?: string,
confirmationTime?: number,
showConfirmation?: boolean
} & ButterBar$MessageDescriptorBase


declare type ButterBar$SavingMessageDescriptorText = {
text: string
} & ButterBar$SavingMessageDescriptorBase


declare type ButterBar$SavingMessageDescriptorHtml = {
html: string
} & ButterBar$SavingMessageDescriptorBase


declare type ButterBar$SavingMessageDescriptorHtmlElement = {
el: HTMLElement
} & ButterBar$SavingMessageDescriptorBase


declare type ButterBar$SavingMessageDescriptor = ButterBar$SavingMessageDescriptorText | ButterBar$SavingMessageDescriptorHtml | ButterBar$SavingMessageDescriptorHtmlElement;

declare interface Search$SearchInstance {
registerSearchSuggestionsProvider(
handler: (
query: string) => Search$AutocompleteSearchResult[] | Promise<Search$AutocompleteSearchResult[]>): void,
registerSearchQueryRewriter(rewriter: Search$SearchQueryRewriter): void
} 

declare interface Search$AutocompleteSearchResultBase {
iconUrl?: string,
routeName?: string,
routeParams?: string[],
externalURL?: string,
onClick?: () => void
} 

declare type Search$AutocompleteSearchResultText = {
name: string,
description: string
} & Search$AutocompleteSearchResultBase


declare type Search$AutocompleteSearchResultHtml = {
nameHTML: string,
descriptionHTML: string
} & Search$AutocompleteSearchResultBase


declare type Search$AutocompleteSearchResult = Search$AutocompleteSearchResultText | Search$AutocompleteSearchResultHtml;

declare interface Search$SearchQueryRewriter {
term: string,
termReplacer: () => string | Promise<string>
} 

declare interface User$UserInstance {
getEmailAddress(): string,
isUsingGmailMaterialUI(): boolean,
isConversationViewDisabled(): boolean,
getLanguage(): string,
getAccountSwitcherContactList(): Common$Common$Contact[]
} 

declare interface Keyboard$KeyboardInstance {
createShortcutHandle(
keyboardShortcutDescriptor: Keyboard$KeyboardShortcutDescriptor): Keyboard$KeyboardShortcutHandle
} 

declare interface Keyboard$KeyboardShortcutHandle {
remove(): void
} 

declare interface Keyboard$KeyboardShortcutDescriptor {
chord: string,
description: string
} 

declare interface Global$GlobalInstance {
addSidebarContentPanel(
contentPanelDescriptor: Conversations$Conversations$ContentPanelDescriptor): Conversations$Conversations$ContentPanelView
} 
    }
