declare module "inboxsdk" {
  declare export default typeof InboxSDK;

  declare var npm$namespace$InboxSDK: {
    load: typeof InboxSDK$load,
    loadScript: typeof InboxSDK$loadScript,

    Router: typeof npm$namespace$InboxSDK$Router
  };
  declare function InboxSDK$load(
    version: number,
    appId?: string,
    opts?: InboxSDK$LoadOptions
  ): Promise<InboxSDK$InboxSDKInstance>;

  declare function InboxSDK$loadScript(
    url: string,
    options?: InboxSDK$LoadScriptOptions
  ): Promise<void>;

  declare interface InboxSDK$LoadOptions {
    appName?: string;
    appIconUrl?: string;
    suppressAddonTitle?: string;
  }

  declare interface InboxSDK$LoadScriptOptions {
    nowrap?: boolean;
  }

  declare interface InboxSDK$InboxSDKInstance {
    Compose: Compose$ComposeInstance;
    Lists: Lists$ListsInstance;
    Conversations: Conversations$ConversationsInstance;
    Toolbars: Toolbars$ToolbarsInstance;
    Router: Router$RouterInstance;
    NavMenu: NavMenu$NavMenuInstance;
    Widgets: Widgets$WidgetsInstance;
    ButterBar: ButterBar$ButterBarInstance;
    Search: Search$SearchInstance;
    User: User$UserInstance;
    Keyboard: Keyboard$KeyboardInstance;
    Global: Global$GlobalInstance;
  }

  declare interface InboxSDK$Common$Contact {
    name: string;
    emailAddress: string;
  }

  declare interface InboxSDK$Common$DropdownView {
    setPlacementOptions(options: Common$PositionOptions): void;
    close(): void;
    reposition(): void;
    el: HTMLElement;
    destroyed: boolean;
    on(name: "destroy", cb: () => void): void;
    on(
      name: "preautoclose",
      cb: (event: Common$PreAutoCloseEvent) => void
    ): void;
  }

  declare interface InboxSDK$Common$PreAutoCloseEvent {
    type: "outsideInteraction" | "escape";
    cause: Event;
    cancel(): void;
  }

  declare interface InboxSDK$Common$PositionOptions {
    position?: string;
    forcePosition?: boolean;
    hAlign?: string;
    forceHAlign?: boolean;
    vAlign?: string;
    forceVAlign?: boolean;
    buffer?: number;
    topBuffer?: number;
    bottomBuffer?: number;
    leftBuffer?: number;
    rightBuffer?: number;
  }

  declare interface InboxSDK$Common$SimpleElementView {
    destroy(): void;
    el: HTMLElement;
    destroyed: boolean;
    on(name: "destroy", cb: () => void): void;
  }

  declare interface InboxSDK$Compose$ComposeInstance {
    registerComposeViewHandler(
      handler: (composeView: Compose$ComposeView) => void
    ): () => void;
    openNewComposeView(): Promise<Compose$ComposeView>;
  }

  declare interface InboxSDK$Compose$ComposeView {
    addButton(buttonDescriptor: Compose$ComposeButtonDescriptor): void;
    addStatusBar(
      statusBarDescriptor: Compose$StatusBarDescriptor
    ): Compose$StatusBarView;
    close(): void;
    send(options?: Compose$SendOptions): void;
    getBodyElement(): HTMLElement;
    getInitialMessageID(): string;
    getThreadID(): string;
    getDraftID(): Promise<string>;
    getCurrentDraftID(): Promise<string | null>;
    getHTMLContent(): string;
    getSelectedBodyHTML(): string;
    getSelectedBodyText(): string;
    getSubject(): string;
    getTextContent(): string;
    getToRecipients(): Common$Contact[];
    getCcRecipients(): Common$Contact[];
    getBccRecipients(): Common$Contact[];
    insertTextIntoBodyAtCursor(text: string): void;
    insertHTMLIntoBodyAtCursor(html: string | HTMLElement): HTMLElement;
    insertLinkChipIntoBodyAtCursor(
      text: string,
      url: string,
      iconUrl: string
    ): HTMLElement;
    insertLinkIntoBodyAtCursor(text: string, url: string): HTMLElement;
    isInlineReplyForm(): boolean;
    isFullscreen(): boolean;
    setFullscreen(minimized: boolean): void;
    isMinimized(): boolean;
    setMinimized(minimized: boolean): void;
    popOut(): Promise<InboxSDK$Compose$ComposeView>;
    setTitleBarColor(color: string): () => void;
    isReply(): boolean;
    setToRecipients(emails: string[]): void;
    setCcRecipients(emails: string[]): void;
    setBccRecipients(emails: string[]): void;
    getFromContact(): Common$Contact;
    getFromContactChoices(): Common$Contact[];
    setFromEmail(email: string): void;
    setSubject(text: string): void;
    setBodyHTML(html: string): void;
    setBodyText(text: string): void;
    attachFiles(files: Blob[]): Promise<void>;
    attachInlineFiles(Files: Blob[]): Promise<void>;
    on(
      name: "destroy",
      cb: (event: {
        messageID: string,
        closedByInboxSDK: boolean
      }) => void
    ): void;
    on(
      name: "fullscreenChanged",
      cb: (event: {
        fullscreen: boolean
      }) => void
    ): void;
    on(
      name:
        | "fromContactChanged"
        | "toContactAdded"
        | "toContactRemoved"
        | "ccContactAdded"
        | "ccContactRemoved"
        | "bccContactAdded"
        | "bccContactRemoved",
      cb: (event: {
        contact: Common$Contact
      }) => void
    ): void;
    on(
      name: "recipientsChanged",
      cb: (event: Compose$RecipientsChangedEvent) => void
    ): void;
    on(
      name: "presending",
      cb: (event: {
        cancel: () => void
      }) => void
    ): void;
    on(
      name: "sent",
      cb: (event: {
        getThreadID: () => Promise<string>,
        getMessageID: () => Promise<string>
      }) => void
    ): void;
    on(
      name:
        | "discard"
        | "sendCanceled"
        | "sending"
        | "bodyChanged"
        | "minimized"
        | "restored",
      cb: () => void
    ): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$Compose$RecipientsChangedEvent {
    to: {
      added: Common$Contact[],
      removed: Common$Contact[]
    };
    cc: {
      added: Common$Contact[],
      removed: Common$Contact[]
    };
    bcc: {
      added: Common$Contact[],
      removed: Common$Contact[]
    };
  }

  declare interface InboxSDK$Compose$ComposeButtonDescriptor {
    title: string;
    iconUrl?: string;
    iconClass?: string;
    onClick: (event: Compose$ComposeButtonClickEvent) => void;
    hasDropdown?: boolean;
    type?: "MODIFIER" | "SEND_ACTION";
    orderHint?: number;
    enabled?: boolean;
  }

  declare interface InboxSDK$Compose$ComposeButtonClickEvent {
    composeView: InboxSDK$Compose$ComposeView;
    dropdown: Common$DropdownView;
  }

  declare interface InboxSDK$Compose$StatusBarDescriptor {
    height?: number;
    orderHint?: number;
  }

  declare type InboxSDK$Compose$StatusBarView = {
    setHeight(height: number): void
  } & Common$SimpleElementView;

  declare interface InboxSDK$Compose$SendOptions {
    sendAndArchive?: boolean;
  }

  declare interface InboxSDK$Lists$ListsInstance {
    registerThreadRowViewHandler(
      handler: (threadRowView: Lists$ThreadRowView) => any
    ): () => void;
  }

  declare interface InboxSDK$Lists$ThreadRowView {
    addLabel(labelDescriptor: Lists$LabelDescriptor): void;
    addImage(imageDescriptor: Lists$ImageDescriptor): void;
    addButton(buttonDescriptor: Lists$ThreadRowButtonDescriptor): void;
    addActionButton(
      buttonDescriptor: Lists$ThreadRowActionButtonDescriptor
    ): void;
    addAttachmentIcon(
      threadRowAttachmentIconDescriptor: Lists$ThreadRowAttachmentIconDescriptor
    ): void;
    replaceDate(threadRowDateDescriptor: Lists$ThreadRowDateDescriptor): void;
    replaceDraftLabel(
      draftLabelDescriptor: Lists$ThreadRowDraftLabelDescriptor
    ): void;
    getSubject(): string;
    getDateString(): string;
    getThreadIDAsync(): Promise<string>;
    getThreadIDIfStableAsync(): Promise<string | null>;
    getDraftID(): Promise<string>;
    getVisibleDraftCount(): number;
    getVisibleMessageCount(): number;
    getContacts(): Common$Contact[];
    on(name: "destroy", cb: () => void): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$Lists$ThreadRowButtonDescriptor {
    title: string;
    iconUrl: string;
    iconClass?: string;
    onClick: (event: Lists$ThreadRowButtonClickEvent) => void;
    hasDropdown?: boolean;
  }

  declare interface InboxSDK$Lists$ThreadRowButtonClickEvent {
    threadRowView: InboxSDK$Lists$ThreadRowView;
    dropdown?: Common$DropdownView;
  }

  declare interface InboxSDK$Lists$ThreadRowActionButtonDescriptor {
    type: "LINK";
    title: string;
    className?: string;
    onClick?: (event: any) => void;
    url: string;
  }

  declare interface InboxSDK$Lists$LabelDescriptor {
    title: string;
    foregroundColor?: string;
    backgroundColor?: string;
    iconUrl: string;
    iconClass?: string;
    iconBackgroundColor?: string;
  }

  declare interface InboxSDK$Lists$ImageDescriptor {
    imageUrl: string;
    imageClass?: string;
    tooltip?: string;
    orderHint?: number;
  }

  declare interface InboxSDK$Lists$ThreadRowDateDescriptor {
    text: string;
    textColor?: string;
    tooltip?: string;
  }

  declare interface InboxSDK$Lists$ThreadRowAttachmentIconDescriptor {
    iconUrl?: string;
    iconClass?: string;
    tooltip?: string;
  }

  declare interface InboxSDK$Lists$ThreadRowDraftLabelDescriptor {
    text: string;
    count?: string;
  }

  declare interface InboxSDK$Conversations$ConversationsInstance {
    registerThreadViewHandler(
      handler: (threadView: Conversations$ThreadView) => void
    ): () => void;
    registerMessageViewHandler(
      handler: (messageView: Conversations$MessageView) => void
    ): () => void;
    registerMessageViewHandlerAll(
      handler: (messageView: Conversations$MessageView) => void
    ): () => void;
    registerFileAttachmentCardViewHandler(
      handler: (attachmentCardView: Conversations$AttachmentCardView) => void
    ): () => void;
  }

  declare interface InboxSDK$Conversations$ThreadView {
    addNoticeBar(): Common$SimpleElementView;
    addSidebarContentPanel(
      contentPanelDescriptor: Conversations$ContentPanelDescriptor
    ): Conversations$ContentPanelView;
    getMessageViews(): Conversations$MessageView[];
    getMessageViewsAll(): Conversations$MessageView[];
    getSubject(): string;
    getThreadIDAsync(): Promise<string>;
    on(
      name: "contactHover",
      cb: (event: Conversations$ContactHoverEvent) => void
    ): void;
    on(name: "destroy", cb: () => void): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$Conversations$ContactHoverEvent {
    contact: Common$Contact;
    contactType: "sender" | "recipient";
    messageView: Conversations$MessageView;
    threadView: InboxSDK$Conversations$ThreadView;
  }

  declare interface InboxSDK$Conversations$MessageView {
    addAttachmentCardView(
      cardOptions:
        | Conversations$AttachmentCardOptions
        | Conversations$AttachmentCardNoPreviewOptions
    ): Conversations$AttachmentCardView;
    addAttachmentsToolbarButton(
      buttonOptions: Conversations$AttachmentsToolbarButtonDescriptor
    ): void;
    addToolbarButton(
      options: Conversations$MessageViewToolbarButtonDescriptor
    ): void;
    getBodyElement(): HTMLElement;
    getMessageIDAsync(): Promise<string>;
    getFileAttachmentCardViews(): Conversations$AttachmentCardView[];
    isElementInQuotedArea(): boolean;
    isLoaded(): boolean;
    getLinksInBody(): Conversations$MessageViewLinkDescriptor[];
    getSender(): Common$Contact;
    getRecipientEmailAddresses(): string[];
    getRecipientsFull(): Promise<Common$Contact[]>;
    getThreadView(): InboxSDK$Conversations$ThreadView;
    getDateString(): string;
    addAttachmentIcon(
      iconDescriptor: Conversations$MessageAttachmentIconDescriptor
    ): void;
    getViewState(): Conversations$MessageViewViewStates;
    on(
      name: "viewStateChange",
      cb: (event: {
        newViewState: Conversations$MessageViewViewStates,
        oldViewState: Conversations$MessageViewViewStates,
        messageView: InboxSDK$Conversations$MessageView
      }) => void
    ): void;
    on(
      name: "contactHover",
      cb: (event: InboxSDK$Conversations$ContactHoverEvent) => void
    ): void;
    on(name: "destroy" | "load", cb: () => void): void;
    destroyed: boolean;
  }

  declare type InboxSDK$Conversations$MessageViewViewStates =
    | "HIDDEN"
    | "COLLAPSED"
    | "EXPANDED";

  declare interface InboxSDK$Conversations$ContentPanelView {
    remove(): void;
    on(name: "destroy" | "activate" | "deactivate", cb: () => void): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$Conversations$AttachmentCardView {
    getAttachmentType(): string;
    addButton(buttonDescriptor: Conversations$CustomButtonDescriptor): void;
    getTitle(): string;

    /**
     * @deprecated . Use AttachmentCardClickEvent.getDownloadURL() instead
     */
    getDownloadURL(): Promise<string>;
    getMessageView(): InboxSDK$Conversations$MessageView | null;
    on(name: "destroy", cb: () => void): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$Conversations$AttachmentCardOptions {
    title: string;
    description: string;
    previewUrl: string;
    previewThumbnailUrl: string;
    failoverPreviewIconUrl: string;
    previewOnClick: (event: Conversations$PreviewClickEvent) => void;
    fileIconImageUrl: string;
    buttons: Array<
      | Conversations$DownloadButtonDescriptor
      | Conversations$CustomButtonDescriptor
    >;
    foldColor?: string;
    mimeType?: string;
  }

  declare interface InboxSDK$Conversations$AttachmentCardNoPreviewOptions {
    title: string;
    description: string;
    previewUrl: string;
    iconThumbnailUrl: string;
    previewOnClick: (event: Conversations$PreviewClickEvent) => void;
    fileIconImageUrl: string;
    buttons: Array<
      | Conversations$DownloadButtonDescriptor
      | Conversations$CustomButtonDescriptor
    >;
    foldColor?: string;
  }

  declare interface InboxSDK$Conversations$PreviewClickEvent {
    attachmentCardView: InboxSDK$Conversations$AttachmentCardView;
    preventDefault(): void;
  }

  declare interface InboxSDK$Conversations$ContentPanelDescriptor {
    el: HTMLElement;
    title: string;
    iconUrl: string;
    appName?: string;
    appIconUrl?: string;
    id?: string;
    hideTitleBar?: boolean;
    orderHint?: number;
  }

  declare interface InboxSDK$Conversations$DownloadButtonDescriptor {
    downloadUrl: string;
    downloadFilename?: string;
    onClick: (event: any) => void;
    openInNewTab?: boolean;
  }

  declare interface InboxSDK$Conversations$CustomButtonDescriptor {
    iconUrl: string;
    tooltip: string;
    onClick: (event: Conversations$AttachmentCardClickEvent) => void;
  }

  declare interface InboxSDK$Conversations$AttachmentCardClickEvent {
    getDownloadURL(): Promise<string>;
  }

  declare interface InboxSDK$Conversations$AttachmentsToolbarButtonDescriptor {
    tooltip: string;
    iconUrl: string;
    onClick: (event: Conversations$AttachmentsToolbarButtonEvent) => void;
  }

  declare interface InboxSDK$Conversations$AttachmentsToolbarButtonEvent {
    attachmentCardViews: InboxSDK$Conversations$AttachmentCardView[];
  }

  declare interface InboxSDK$Conversations$MessageViewLinkDescriptor {
    text: string;
    html: string;
    element: HTMLElement;
    href: string;
    isInQuotedArea: boolean;
  }

  declare interface InboxSDK$Conversations$MessageAttachmentIconDescriptor {
    iconUrl: string;
    iconClass?: string;
    tooltip: string;
    onClick?: () => void;
  }

  declare interface InboxSDK$Conversations$MessageViewToolbarButtonDescriptor {
    section: "MORE";
    title: string;
    iconUrl: string;
    onClick: () => void;
    iconClass?: string;
    orderHint: number;
  }

  declare interface InboxSDK$Toolbars$ToolbarsInstance {
    registerThreadButton(
      toolbarButtonDescriptor: Toolbars$ToolbarButtonDescriptor
    ): () => void;

    /**
     * @deprecated . use registerThreadButton
     * @param toolbarButtonDescriptor
     */
    registerToolbarButtonForList(
      toolbarButtonDescriptor: Toolbars$ToolbarButtonDescriptor
    ): () => void;

    /**
     * @deprecated . use registerThreadButton
     * @param toolbarButtonDescriptor
     */
    registerToolbarButtonForThreadView(
      toolbarButtonDescriptor: Toolbars$ToolbarButtonDescriptor
    ): () => void;
    addToolbarButtonForApp(
      appToolbarButtonDescriptor: Toolbars$AppToolbarButtonDescriptor
    ): Toolbars$AppToolbarButtonView;
  }

  declare interface InboxSDK$Toolbars$ToolbarButtonDescriptor {
    title: string;
    onClick: (event: Toolbars$ToolbarButtonEvent) => void;
    iconUrl?: string;
    iconClass?: string;
    positions?: Toolbars$ToolbarButtonPosition[];
    threadSection?: Toolbars$SectionNames;
    listSection?: Toolbars$SectionNames;
    hasDropdown?: boolean;
    hideFor?: (routeView: Router$RouteView) => void;
    orderHint?: number;
    keyboardShortcutHandle?: Keyboard$KeyboardShortcutHandle;
  }

  declare type InboxSDK$Toolbars$ToolbarButtonPosition =
    | "THREAD"
    | "ROW"
    | "LIST";

  declare interface InboxSDK$Toolbars$ToolbarButtonEvent {
    position: InboxSDK$Toolbars$ToolbarButtonPosition;
    selectedThreadRowViews: Lists$ThreadRowView[];
    selectedThreadViews: Conversations$ThreadView[];
    dropdown?: Common$DropdownView;
  }

  declare interface InboxSDK$Toolbars$AppToolbarButtonDescriptor {
    title: string;
    titleClass?: string;
    iconUrl: string;
    iconClass?: string;
    onClick: (event: Toolbars$AppToolbarButtonEvent) => void;
    arrowColor?: string;
  }

  declare interface InboxSDK$Toolbars$AppToolbarButtonView {
    open(): void;
    close(): void;
    remove(): void;
    on(name: "destroy", cb: () => void): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$Toolbars$AppToolbarButtonEvent {
    dropdown: Common$DropdownView;
  }

  declare type InboxSDK$Toolbars$SectionNames =
    | "INBOX_STATE"
    | "METADATA_STATE"
    | "OTHER";

  declare var npm$namespace$InboxSDK$Router: {
    NativeRouteIDs: typeof InboxSDK$Router$NativeRouteIDs,
    NativeListRouteIDs: typeof InboxSDK$Router$NativeListRouteIDs
  };
  declare interface InboxSDK$Router$RouterInstance {
    createLink(
      routeID: string | Router$NativeRouteIDs,
      params: Router$RouteParams
    ): string;
    goto(
      routeID: string | Router$NativeRouteIDs,
      params: Router$RouteParams
    ): void;
    handleCustomRoute(
      routeID: string,
      handler: (customRouteView: Router$CustomRouteView) => void
    ): () => void;
    handleAllRoutes(handler: (routeView: Router$RouteView) => void): () => void;
    handleListRoute(
      routeID: Router$NativeListRouteIDs,
      handler: (listRouteView: Router$ListRouteView) => void
    ): () => void;
    handleCustomListRoute(
      routeID: string,
      handler: (
        offset: number,
        max: number
      ) => Router$CustomListDescriptor | Promise<Router$CustomListDescriptor>
    ): () => void;
    getCurrentRouteView(): Router$RouteView;
    NativeListRouteIDs: typeof NativeListRouteIDs;
    NativeRouteIDs: typeof NativeRouteIDs;
  }

  declare interface InboxSDK$Router$CustomListDescriptor {
    threads: Array<Router$ThreadDescriptor | string>;
    total?: number;
    hasMore?: boolean;
  }

  declare interface InboxSDK$Router$ThreadDescriptor {
    rfcMessageId?: string;
    gmailThreadId?: string;
  }

  declare interface InboxSDK$Router$RouteParams {
    [key: number]: string | number;
    [key: string]: string | number;
  }

  declare interface InboxSDK$Router$RouteView {
    getRouteID(): string;
    getRouteType(): Router$RouteTypes;
    getParams(): InboxSDK$Router$RouteParams;
    on(name: "destroy", cb: () => void): void;
    destroyed: boolean;
  }

  declare type InboxSDK$Router$RouteTypes =
    | "LIST"
    | "THREAD"
    | "SETTINGS"
    | "CHAT"
    | "CUSTOM"
    | "UNKNOWN";

  declare type InboxSDK$Router$CustomRouteView = {
    getElement(): HTMLElement,
    setFullWidth(fullWidth: boolean): void
  } & RouteView;

  declare type InboxSDK$Router$ListRouteView = {
    addCollapsibleSection(
      options: Router$SectionDescriptor
    ): Router$CollapsibleSectionView,
    addSection(options: Router$SectionDescriptor): Router$SectionView,
    refresh(): void
  } & RouteView;

  declare interface InboxSDK$Router$SectionView {
    remove(): void;
    on(name: "destroy", cb: () => void): void;
    destroyed: boolean;
  }

  declare type InboxSDK$Router$CollapsibleSectionView = {
    setCollapsed(value: boolean): void,
    remove(): void,
    on(name: "destroy" | "expanded" | "collapsed", cb: () => void): void
  } & SectionView;

  declare interface InboxSDK$Router$SectionDescriptor {
    title: string;
    subtitle?: string;
    titleLinkText?: string;
    onTitleLinkClick?: () => void;
    hasDropdown?: boolean;
    onDropdownClick?: (event: Router$SectionDropdownClickEvent) => void;
    tableRows?: Router$RowDescriptor[];
    contentElement?: HTMLElement;
    footerLinkText?: string;
    onFooterLinkClick?: (event: any) => void;
  }

  declare interface InboxSDK$Router$SectionDropdownClickEvent {
    dropdown: Common$DropdownView;
  }

  declare interface InboxSDK$Router$RowDescriptor {
    title: string;
    body: string;
    shortDetailText: string;
    isRead: string;
    labels: Lists$LabelDescriptor[];
    iconUrl?: string;
    iconClass?: string;
    routeID?: string;
    routeParams?: string[];
    onClick?: () => void;
  }

  declare var InboxSDK$Router$NativeRouteIDs: {|
    +INBOX: 0, // 0
    +ALL_MAIL: 1, // 1
    +SENT: 2, // 2
    +STARRED: 3, // 3
    +DRAFTS: 4, // 4
    +SNOOZED: 5, // 5
    +DONE: 6, // 6
    +REMINDERS: 7, // 7
    +LABEL: 8, // 8
    +TRASH: 9, // 9
    +SPAM: 10, // 10
    +IMPORTANT: 11, // 11
    +SEARCH: 12, // 12
    +THREAD: 13, // 13
    +CHATS: 14, // 14
    +CHAT: 15, // 15
    +CONTACTS: 16, // 16
    +CONTACT: 17, // 17
    +SETTINGS: 18, // 18
    +ANY_LIST: 19 // 19
  |};

  declare var InboxSDK$Router$NativeListRouteIDs: {|
    +INBOX: 0, // 0
    +ALL_MAIL: 1, // 1
    +SENT: 2, // 2
    +STARRED: 3, // 3
    +DRAFTS: 4, // 4
    +SNOOZED: 5, // 5
    +DONE: 6, // 6
    +REMINDERS: 7, // 7
    +LABEL: 8, // 8
    +TRASH: 9, // 9
    +SPAM: 10, // 10
    +IMPORTANT: 11, // 11
    +SEARCH: 12, // 12
    +ANY_LIST: 13 // 13
  |};

  declare interface InboxSDK$NavMenu$NavMenuInstance {
    addNavItem(
      navItemDescriptor: NavMenu$NavItemDescriptor
    ): NavMenu$NavItemView;
  }

  declare interface InboxSDK$NavMenu$NavItemView {
    addNavItem(
      navItemDescriptor: NavMenu$NavItemDescriptor
    ): InboxSDK$NavMenu$NavItemView;
    remove(): void;
    isCollapsed(): boolean;
    setCollapsed(collapseValue: boolean): void;
    on(name: "destroy", cb: () => void): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$NavMenu$NavItemDescriptor {
    name: string;
    routeID?: string;
    routeParams?: { [key: string]: any };
    onClick?: (event: {
      preventDefault(): void
    }) => void;
    orderHint?: number;
    accessory?:
      | NavMenu$CreateAccessoryDescriptor
      | NavMenu$IconButtonAccessoryDescriptor
      | NavMenu$DropdownButtonAccessoryDescriptor;
    iconUrl?: string;
    iconClass?: string;
    backgroundColor?: string;
    expanderForegroundColor?: string;
    type?: NavMenu$NavItemTypes;
  }

  declare interface InboxSDK$NavMenu$CreateAccessoryDescriptor {
    type: "CREATE";
    onClick: () => void;
  }

  declare interface InboxSDK$NavMenu$IconButtonAccessoryDescriptor {
    type: "ICON_BUTTON";
    onClick: () => void;
    iconUrl: string;
    iconClass?: string;
  }

  declare interface InboxSDK$NavMenu$DropdownButtonAccessoryDescriptor {
    type: "DROPDOWN_BUTTON";
    buttonBackgroundColor: string;
    buttonForegroundColor: string;
    onClick: (event: NavMenu$DropdownButtonClickEvent) => void;
  }

  declare interface InboxSDK$NavMenu$DropdownButtonClickEvent {
    dropdown: Common$DropdownView;
  }

  declare type InboxSDK$NavMenu$NavItemTypes = "MANAGE" | "NAVIGATION";

  declare interface InboxSDK$Widgets$WidgetsInstance {
    showModalView(options: Widgets$ModalOptions): Widgets$ModalView;
    showMoleView(options: Widgets$MoleOptions): Widgets$MoleView;
    showDrawerView(options: Widgets$DrawerOptions): Widgets$DrawerView;
  }

  declare interface InboxSDK$Widgets$ModalOptions {
    el: HTMLElement;
    chrome?: boolean;
    constrainTitleWidth?: boolean;
    showCloseButton?: boolean;
    title?: string;
    buttons?: Widgets$ModalButtonDescriptor[];
  }

  declare interface InboxSDK$Widgets$ModalButtonDescriptor {
    text: string;
    title: string;
    onClick: () => void;
    type?: "PRIMARY_ACTION" | "SECONDARY_ACTION";
    color?: string;
    orderHint?: number;
  }

  declare interface InboxSDK$Widgets$MoleOptions {
    el: HTMLElement;
    title?: string;
    titleEl?: HTMLElement;
    minimizedTitleEl?: HTMLElement;
    className?: string;
    titleButtons?: Widgets$MoleButtonDescriptor[];
    chrome?: boolean;
  }

  declare interface InboxSDK$Widgets$MoleButtonDescriptor {
    title: string;
    iconUrl: string;
    iconClass?: string;
    onClick: () => void;
  }

  declare interface InboxSDK$Widgets$DrawerOptions {
    el: HTMLElement;
    chrome?: boolean;
    title?: string;
    composeView?: Compose$ComposeView;
    closeWithCompose?: boolean;
  }

  declare interface InboxSDK$Widgets$ModalView {
    close(): void;
    on(name: "destroy", cb: () => void): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$Widgets$MoleView {
    close(): void;
    setTitle(text: string): void;
    setMinimized(minimized: boolean): void;
    getMinimized(): boolean;
    on(name: "destroy" | "minimize" | "restore", cb: () => void): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$Widgets$DrawerView {
    close(): void;
    associateComposeView(
      composeView: Compose$ComposeView,
      closeWithCompose: boolean
    ): void;
    disassociateComposeView(): void;
    on(
      name: "destroy" | "slideAnimationDone" | "closing",
      cb: () => void
    ): void;
    destroyed: boolean;
  }

  declare interface InboxSDK$ButterBar$ButterBarInstance {
    showMessage(options: ButterBar$MessageDescriptor): { [key: string]: any };
    showLoading(): { [key: string]: any };
    showError(options: ButterBar$MessageDescriptor): { [key: string]: any };
    showSaving(
      options: ButterBar$SavingMessageDescriptor
    ): { [key: string]: any };
    hideMessage(messageKey: { [key: string]: any } | string): void;
    hideGmailMessage(): void;
  }

  declare interface InboxSDK$ButterBar$MessageDescriptorBase {
    className?: string;
    priority?: number;
    time?: number;
    hideOnViewChanged?: boolean;
    persistent?: boolean;
    messageKey?: { [key: string]: any } | string;
  }

  declare type InboxSDK$ButterBar$MessageDescriptorText = {
    text: string
  } & MessageDescriptorBase;

  declare type InboxSDK$ButterBar$MessageDescriptorHtml = {
    html: string
  } & MessageDescriptorBase;

  declare type InboxSDK$ButterBar$MessageDescriptorHtmlElement = {
    el: HTMLElement
  } & MessageDescriptorBase;

  declare type InboxSDK$ButterBar$MessageDescriptor =
    | InboxSDK$ButterBar$MessageDescriptorText
    | InboxSDK$ButterBar$MessageDescriptorHtml
    | InboxSDK$ButterBar$MessageDescriptorHtmlElement;

  declare type InboxSDK$ButterBar$SavingMessageDescriptorBase = {
    confirmationText?: string,
    confirmationTime?: number,
    showConfirmation?: boolean
  } & MessageDescriptorBase;

  declare type InboxSDK$ButterBar$SavingMessageDescriptorText = {
    text: string
  } & SavingMessageDescriptorBase;

  declare type InboxSDK$ButterBar$SavingMessageDescriptorHtml = {
    html: string
  } & SavingMessageDescriptorBase;

  declare type InboxSDK$ButterBar$SavingMessageDescriptorHtmlElement = {
    el: HTMLElement
  } & SavingMessageDescriptorBase;

  declare type InboxSDK$ButterBar$SavingMessageDescriptor =
    | InboxSDK$ButterBar$SavingMessageDescriptorText
    | InboxSDK$ButterBar$SavingMessageDescriptorHtml
    | InboxSDK$ButterBar$SavingMessageDescriptorHtmlElement;

  declare interface InboxSDK$Search$SearchInstance {
    registerSearchSuggestionsProvider(
      handler: (
        query: string
      ) =>
        | Search$AutocompleteSearchResult[]
        | Promise<Search$AutocompleteSearchResult[]>
    ): void;
    registerSearchQueryRewriter(rewriter: Search$SearchQueryRewriter): void;
  }

  declare interface InboxSDK$Search$AutocompleteSearchResultBase {
    iconUrl?: string;
    routeName?: string;
    routeParams?: string[];
    externalURL?: string;
    onClick?: () => void;
  }

  declare type InboxSDK$Search$AutocompleteSearchResultText = {
    name: string,
    description: string
  } & AutocompleteSearchResultBase;

  declare type InboxSDK$Search$AutocompleteSearchResultHtml = {
    nameHTML: string,
    descriptionHTML: string
  } & AutocompleteSearchResultBase;

  declare type InboxSDK$Search$AutocompleteSearchResult =
    | InboxSDK$Search$AutocompleteSearchResultText
    | InboxSDK$Search$AutocompleteSearchResultHtml;

  declare interface InboxSDK$Search$SearchQueryRewriter {
    term: string;
    termReplacer: () => string | Promise<string>;
  }

  declare interface InboxSDK$User$UserInstance {
    getEmailAddress(): string;
    isUsingGmailMaterialUI(): boolean;
    isConversationViewDisabled(): boolean;
    getLanguage(): string;
    getAccountSwitcherContactList(): Common$Contact[];
  }

  declare interface InboxSDK$Keyboard$KeyboardInstance {
    createShortcutHandle(
      keyboardShortcutDescriptor: Keyboard$KeyboardShortcutDescriptor
    ): Keyboard$KeyboardShortcutHandle;
  }

  declare interface InboxSDK$Keyboard$KeyboardShortcutHandle {
    remove(): void;
  }

  declare interface InboxSDK$Keyboard$KeyboardShortcutDescriptor {
    chord: string;
    description: string;
  }

  declare interface InboxSDK$Global$GlobalInstance {
    addSidebarContentPanel(
      contentPanelDescriptor: Conversations$ContentPanelDescriptor
    ): Conversations$ContentPanelView;
  }
}
