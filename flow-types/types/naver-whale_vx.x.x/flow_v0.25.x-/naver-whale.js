declare module "naver-whale" {
  declare interface Window {
    whale: typeof whale;
  }
  declare var chrome: typeof npm$namespace$chrome;

  declare var npm$namespace$chrome: {
    downloads: typeof npm$namespace$chrome$downloads
  };

  declare var npm$namespace$chrome$downloads: {
    State: typeof chrome$downloads$State
  };
  declare export interface chrome$downloads$StateType {
    +COMPLETE: string;
    +IN_PROGRESS: string;
    +INTERRUPTED: string;
  }

  declare export var chrome$downloads$State: chrome$downloads$StateType;
  declare var whale: typeof npm$namespace$whale;

  declare var npm$namespace$whale: {
    alarms: typeof whale$alarms,
    bookmarks: typeof whale$bookmarks,
    browserAction: typeof whale$browserAction,
    browsingData: typeof whale$browsingData,
    commands: typeof whale$commands,
    contentSettings: typeof whale$contentSettings,
    contextMenus: typeof whale$contextMenus,
    cookies: typeof whale$cookies,
    _debugger: typeof whale$_debugger,
    declarativeContent: typeof whale$declarativeContent,
    desktopCapture: typeof whale$desktopCapture,
    downloads: typeof whale$downloads,
    events: typeof whale$events,
    extension: typeof whale$extension,
    fontSettings: typeof whale$fontSettings,
    gcm: typeof whale$gcm,
    history: typeof whale$history,
    i18n: typeof whale$i18n,
    idle: typeof whale$idle,
    management: typeof whale$management,
    notifications: typeof whale$notifications,
    omnibox: typeof whale$omnibox,
    pageAction: typeof whale$pageAction,
    pageCapture: typeof whale$pageCapture,
    permissions: typeof whale$permissions,
    power: typeof whale$power,
    printerProvider: typeof whale$printerProvider,
    privacy: typeof whale$privacy,
    proxy: typeof whale$proxy,
    runtime: typeof whale$runtime,
    storage: typeof whale$storage,
    tabCapture: typeof whale$tabCapture,
    tabs: typeof whale$tabs,
    tts: typeof whale$tts,
    ttsEngine: typeof whale$ttsEngine,
    types: typeof whale$types,
    webNavigation: typeof whale$webNavigation,
    webRequest: typeof whale$webRequest,
    windows: typeof whale$windows,

    devtools: typeof npm$namespace$whale$devtools,
    sidebarAction: typeof npm$namespace$whale$sidebarAction,
    system: typeof npm$namespace$whale$system,
    topSites: typeof npm$namespace$whale$topSites
  };
  declare export var whale$alarms: typeof chrome$alarms;

  declare export var whale$bookmarks: typeof chrome$bookmarks;

  declare export var whale$browserAction: typeof chrome$browserAction;

  declare export var whale$browsingData: typeof chrome$browsingData;

  declare export var whale$commands: typeof chrome$commands;

  declare export var whale$contentSettings: typeof chrome$contentSettings;

  declare export var whale$contextMenus: typeof chrome$contextMenus;

  declare export var whale$cookies: typeof chrome$cookies;

  /**
   * 특정 탭의 네트워크 통신, JavaScript 디버깅, DOM · CSS 변형 등 디버그를 위한 [원격 디버깅 프로토콜](https://chromedevtools.github.io/devtools-protocol/tot/Network)을 사용할 수 있습니다.
   * `sendCommand()` 메소드와 `onEvent` 핸들러 함수를 이용해 개발자도구에서 제공하는 개별 기능을 명령 단위로 수행할 수 있습니다.
   * 권한: "debugger"
   * @since Chrome 18.
   */
  declare var _debugger: typeof chrome$debugger;

  declare export { _debugger as debugger };

  declare export var whale$declarativeContent: typeof chrome$declarativeContent;

  declare export var whale$desktopCapture: typeof chrome$desktopCapture;

  declare var npm$namespace$whale$devtools: {
    inspectedWindow: typeof whale$devtools$inspectedWindow,
    network: typeof whale$devtools$network,
    panels: typeof whale$devtools$panels
  };
  declare export var whale$devtools$inspectedWindow: typeof chrome$devtools.inspectedWindow;

  declare export var whale$devtools$network: typeof chrome$devtools.network;

  declare export var whale$devtools$panels: typeof chrome$devtools.panels;

  declare export var whale$downloads: typeof chrome$downloads;

  declare export var whale$events: typeof chrome$events;

  declare export var whale$extension: typeof chrome$extension;

  declare export var whale$fontSettings: typeof chrome$fontSettings;

  declare export var whale$gcm: typeof chrome$gcm;

  declare export var whale$history: typeof chrome$history;

  declare export var whale$i18n: typeof chrome$i18n;

  declare export var whale$idle: typeof chrome$idle;

  declare export var whale$management: typeof chrome$management;

  declare export var whale$notifications: typeof chrome$notifications;

  declare export var whale$omnibox: typeof chrome$omnibox;

  declare export var whale$pageAction: typeof chrome$pageAction;

  declare export var whale$pageCapture: typeof chrome$pageCapture;

  declare export var whale$permissions: typeof chrome$permissions;

  declare export var whale$power: typeof chrome$power;

  declare export var whale$printerProvider: typeof chrome$printerProvider;

  declare export var whale$privacy: typeof chrome$privacy;

  declare export var whale$proxy: typeof chrome$proxy;

  declare export var whale$runtime: typeof chrome$runtime;

  declare var npm$namespace$whale$sidebarAction: {
    show: typeof whale$sidebarAction$show,
    hide: typeof whale$sidebarAction$hide,
    setTitle: typeof whale$sidebarAction$setTitle,
    getTitle: typeof whale$sidebarAction$getTitle,
    setIcon: typeof whale$sidebarAction$setIcon,
    setPage: typeof whale$sidebarAction$setPage,
    getPage: typeof whale$sidebarAction$getPage,
    setBadgeText: typeof whale$sidebarAction$setBadgeText,
    getBadgeText: typeof whale$sidebarAction$getBadgeText,
    setBadgeBackgroundColor: typeof whale$sidebarAction$setBadgeBackgroundColor,
    getBadgeBackgroundColor: typeof whale$sidebarAction$getBadgeBackgroundColor,
    dock: typeof whale$sidebarAction$dock,
    undock: typeof whale$sidebarAction$undock,
    onClicked: typeof whale$sidebarAction$onClicked
  };
  declare export interface whale$sidebarAction$SidebarShowDetail {
    /**
     * Optional. 사이드바 영역에 표시할 페이지 URL. 지정하지 않으면 매니페스트에 정의한 default_page.
     */
    url?: string;

    /**
     * Optional. url 인자와 현재 URL이 같을 때에도 페이지를 새로고침 할 것인지 여부.
     * @default false
     */
    reload?: boolean;
  }

  declare export interface whale$sidebarAction$SidebarTitleDetail {
    title: string;
  }

  declare export interface whale$sidebarAction$SidebarIconDetail {
    /**
     * 아이콘 이미지 데이터입니다. @see https://developer.chrome.com/extensions/pageAction#type-ImageDataType
     */
    icon: ImageData;
  }

  declare export interface whale$sidebarAction$SidebarPageDetail {
    /**
     * html 파일의 리소스 경로. 빈 문자열(‘’)로 설정하면 사이드바에 빈화면이 보입니다.
     */
    page: string;
  }

  declare export interface whale$sidebarAction$SidebarBadgeDetail {
    /**
     * 설정할 badge 문자열
     */
    text: string;
  }

  declare export interface whale$sidebarAction$SidebarDockDetail {
    /**
     * 부모 윈도우의 ID. 지정하지 않으면 마지막 사용된 윈도우에 도킹합니다.
     */
    targetWindowId?: number;
  }

  declare export interface whale$sidebarAction$BadgeBackgroundColorDetails {
    /**
     * 색상값 배열([255, 0, 0, 255]) 혹은 HEX 색상 표현 문자열(#FF0000).
     */
    color: string | whale$sidebarAction$ColorArray;
  }

  declare export type whale$sidebarAction$ColorArray = [
    number,
    number,
    number,
    number
  ];

  declare export type whale$sidebarAction$BrowserClickedEvent = {} & chrome$events.Event<
    (tab: chrome$tabs.Tab) => void
  >;

  /**
   * 지정한 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
   * @param windowId Optional. 대상 윈도우의 ID.
   * @param details Optional. url 설정
   * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
   */
  declare export function whale$sidebarAction$show(
    windowId: number,
    details?: whale$sidebarAction$SidebarShowDetail,
    callback?: (windowId: number) => void
  ): void;

  /**
   * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
   * @param details Optional. url 설정
   * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
   */
  declare export function whale$sidebarAction$show(
    details: whale$sidebarAction$SidebarShowDetail,
    callback?: (windowId: number) => void
  ): void;

  /**
   * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
   * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
   */
  declare export function whale$sidebarAction$show(
    callback: (windowId: number) => void
  ): void;

  /**
   * 현재 윈도우에 사이드바 영역을 열고 포커스를 주는 메소드입니다. 이미 사이드바가 열려있다면 포커스만 옮겨줍니다.
   */
  declare export function whale$sidebarAction$show(): void;

  /**
   * 지정된 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
   * @param windowId Optional. 대상 윈도우의 ID. 지정하지 않으면 현재 윈도우.
   * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
   */
  declare export function whale$sidebarAction$hide(
    windowId: number,
    callback?: (windowId: number) => void
  ): void;

  /**
   * 현재 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
   * @param callback Optional. 콜백 함수. 인자값으로 windowId가 넘어감
   */
  declare export function whale$sidebarAction$hide(
    callback: (windowId: number) => void
  ): void;

  /**
   * 현재 윈도우의 사이드바를 닫습니다. 현재 확장앱에 포커스가 있는 상황에만 동작합니다.
   */
  declare export function whale$sidebarAction$hide(): void;

  /**
   * 확장앱 아이콘에 마우스를 올렸을 때 나타나는 툴팁 문자열을 변경합니다.
   * sidebar_action 에서 default_title 속성으로 지정하는 영역입니다.
   * 열려 있는 모든 윈도우에 동시 적용됩니다.
   * @param details 설정 할 데이터
   */
  declare export function whale$sidebarAction$setTitle(
    details: whale$sidebarAction$SidebarTitleDetail
  ): void;

  /**
   * 확장앱 아이콘에 마우스를 올렸을 때 나타나는 툴팁 문자열을 반환합니다.
   * sidebar_action 에서 default_title 속성으로 지정한 영역입니다.
   * @param callback title을 담은 결과를 인자값으로 넣은 콜백 함수
   */
  declare export function whale$sidebarAction$getTitle(
    callback: (result: string) => void
  ): void;

  /**
   * 확장앱 아이콘을 동적으로 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
   * @param details 아이콘 데이터
   */
  declare export function whale$sidebarAction$setIcon(
    details: whale$sidebarAction$SidebarIconDetail
  ): void;

  /**
   * 확장앱 아이콘이 클릭되었을 때, 로딩되는 페이지 리소스의 경로를 변경합니다.
   * @param details 페이지 상세 정보
   */
  declare export function whale$sidebarAction$setPage(
    details: whale$sidebarAction$SidebarPageDetail
  ): void;

  /**
   * 사이드바 확장앱 아이콘이 클릭되었을 때, 로딩되는 페이지 리소스의 경로를 반환합니다.
   * @param callback 현재 page 경로를 인자값으로 넣은 콜백 함수
   */
  declare export function whale$sidebarAction$getPage(
    callback: (result: string) => void
  ): void;

  /**
   * 확장앱 아이콘 위에 표시되는 뱃지의 문자열을 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
   * @param details badge 정보
   */
  declare export function whale$sidebarAction$setBadgeText(
    details: whale$sidebarAction$SidebarBadgeDetail
  ): void;

  /**
   * 사이드바 확장앱 아이콘 위에 표시되는 뱃지의 문자열을 반환합니다.
   * @param callback 현재 뱃지 텍스트를 인자값으로 넣은 콜백 함수.
   */
  declare export function whale$sidebarAction$getBadgeText(
    callback: (result: string) => void
  ): void;

  /**
   * 확장앱 아이콘 위에 표시되는 뱃지의 배경 색상을 변경합니다. 열려 있는 모든 윈도우에 동시 적용됩니다.
   * @param details 뱃지 배경 색상을 담은 객체
   */
  declare export function whale$sidebarAction$setBadgeBackgroundColor(
    details: whale$sidebarAction$BadgeBackgroundColorDetails
  ): void;

  /**
   * 확장앱 아이콘 위에 표시되는 뱃지의 배경색상을 반환합니다.
   * @param callback 뱃지 배경 색상. RGBA 색상값 배열 [R, G, B, A]를 담은 인자값으로 넣은 콜백 함수.
   */
  declare export function whale$sidebarAction$getBadgeBackgroundColor(
    callback: (color: whale$sidebarAction$ColorArray) => void
  ): void;

  /**
   * 팝업 윈도우를 사이드바에 도킹합니다. details를 통해 도킹하고자 하는 부모 윈도우를 지정할 수 있습니다.
   * 도킹 후에는 팝업 윈도우의 ID는 더 이상 유효하지 않습니다.
   * @param popupWindowId 팝업 윈도우의 ID.
   * @param details Optional. 부모 윈도우의 ID를 담은 객체
   * @param callback 도킹 된 windowId를 인자값으로 넣은 콜백 함수.
   */
  declare export function whale$sidebarAction$dock(
    popupWindowId: number,
    details: whale$sidebarAction$SidebarDockDetail,
    callback: (windowId: number) => void
  ): void;

  /**
   * 팝업 윈도우를 사이드바에 도킹합니다. details를 통해 도킹하고자 하는 부모 윈도우를 지정할 수 있습니다.
   * 도킹 후에는 팝업 윈도우의 ID는 더 이상 유효하지 않습니다.
   * @param popupWindowId 팝업 윈도우의 ID.
   * @param callback 도킹 된 windowId를 인자값으로 넣은 콜백 함수.
   */
  declare export function whale$sidebarAction$dock(
    popupWindowId: number,
    callback: (windowId: number) => void
  ): void;

  /**
   * 도킹된 윈도우를 부모 윈도우에서 떼어냅니다.
   * @param popupWindowId 부모 윈도우의 ID
   * @param callback 새로 부여된 윈도우 Id를 인자값으로 넣은 콜백 함수.
   * 여기서 windowId는 `whale.sidebarAction.dock()`으로 붙일 때 사용했던 윈도우 ID와는 다르다.
   */
  declare export function whale$sidebarAction$undock(
    popupWindowId: number,
    callback: (windowId: number) => void
  ): void;

  /**
   * 사이드바 확장앱 아이콘이 클릭될 때 발생하는 이벤트 핸들러
   */
  declare export var whale$sidebarAction$onClicked: whale$sidebarAction$BrowserClickedEvent;

  declare export var whale$storage: typeof chrome$storage;

  declare var npm$namespace$whale$system: {
    cpu: typeof whale$system$cpu,
    memory: typeof whale$system$memory,
    storage: typeof whale$system$storage
  };
  declare export var whale$system$cpu: typeof chrome$system.cpu;

  declare export var whale$system$memory: typeof chrome$system.memory;

  declare export var whale$system$storage: typeof chrome$system.storage;

  declare export var whale$tabCapture: typeof chrome$tabCapture;

  declare export var whale$tabs: typeof chrome$tabs;

  declare var npm$namespace$whale$topSites: {
    get: typeof whale$topSites$get,
    add: typeof whale$topSites$add,
    block: typeof whale$topSites$block,
    unblock: typeof whale$topSites$unblock,
    isBlocked: typeof whale$topSites$isBlocked,
    search: typeof whale$topSites$search,
    update: typeof whale$topSites$update,
    _delete: typeof whale$topSites$_delete
  };

  /**
   * 많이 방문한 URL을 저장하는 Object입니다. get에서 사용됩니다.
   */
  declare export interface whale$topSites$MostVisitedURL {
    /**
     * 많이 방문한 url.
     */
    url: string;

    /**
     * 페이지 제목
     */
    title: string;

    /**
     * 방문기록에서 판단한 여부입니다.
     * api로 추가한 경우에는 false입니다.
     */
    from_history: boolean;
  }

  /**
   * 많이 방문한 URL을 저장하는 Object입니다. search에서 사용됩니다.
   */
  declare export interface whale$topSites$MostVisitedURL2 {
    /**
     * 많이 방문한 url.
     */
    url: string;

    /**
     * 페이지 제목
     */
    title: string;
  }

  /**
   * 자주 가는 사이트를 전부 리스트로 담아옵니다.
   * @param callback 결과를 콜백함수의 인자값으로 보냅니다.
   */
  declare export function whale$topSites$get(
    callback: (data: whale$topSites$MostVisitedURL[]) => void
  ): void;

  /**
   * 자주 가는 사이트에 url과 title을 추가합니다.
   * @param url 추가할 url
   * @param title 제목
   * @param callback 상태를 콜백 함수의 인자값으로 보냅니다. 성공시 true, 실패시 false
   */
  declare export function whale$topSites$add(
    url: string,
    title: string,
    callback?: (status: boolean) => void
  ): void;

  /**
   * 자주 가는 사이트에서 해당 url을 삭제합니다.
   * @param url 삭제할 url
   */
  declare var _delete: (url: string) => void;

  declare export { _delete as delete };

  /**
   * 자주 가는 사이트에서 해당 url을 숨깁니다.
   * @param url block할 url
   */
  declare export function whale$topSites$block(url: string): void;

  /**
   * 자주 가는 사이트에서 숨겨진 url을 보이게 합니다.
   * @param url block을 풀 url
   */
  declare export function whale$topSites$unblock(url: string): void;

  /**
   * 자주 가는 사이트에 block당한 여부를 확인합니다.
   * @param url 확인할 uri
   * @param callback block 여부를 콜백함수의 인자값으로 보냅니다.
   */
  declare export function whale$topSites$isBlocked(
    url: string,
    callback: (status: boolean) => void
  ): void;

  /**
   * 방문기록에서 자주 가는 사이트 순으로 검색을 합니다.
   * @param term 검색할 키워드
   * @param count 검색할 개수.
   * @param callback 결과 리스트를 함수의 인자값으로 보냅니다.
   */
  declare export function whale$topSites$search(
    term: string,
    count: number,
    callback?: (result: whale$topSites$MostVisitedURL2[]) => void
  ): void;

  /**
   * 자주 가는 사이트에 해당 배열을 추가합니다.
   * 만약 다시 update를 실행하면 기존에 update에 존재하는 배열은 삭제됩니다.
   * @param urls url, title로 구성된 Object Array
   */
  declare export function whale$topSites$update(
    urls: whale$topSites$MostVisitedURL2[]
  ): void;

  declare export var whale$tts: typeof chrome$tts;

  declare export var whale$ttsEngine: typeof chrome$ttsEngine;

  declare export var whale$types: typeof chrome$types;

  declare export var whale$webNavigation: typeof chrome$webNavigation;

  declare export var whale$webRequest: typeof chrome$webRequest;

  declare export var whale$windows: typeof chrome$windows;
}
