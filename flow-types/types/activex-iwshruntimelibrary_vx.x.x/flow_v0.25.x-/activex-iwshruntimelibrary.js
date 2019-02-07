declare module "activex-iwshruntimelibrary" {
  declare type IWshRuntimeLibrary$WindowStyle =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10;

  declare type IWshRuntimeLibrary$ShortcutWindowStyle = 1 | 3 | 7;

  declare class IWshRuntimeLibrary$ButtonType {
    constructor(...args: empty): mixed;
    static +OK: Class<IWshRuntimeLibrary$ButtonType__OK> &
      IWshRuntimeLibrary$ButtonType__OK &
      0; // 0
    static +OKCancel: Class<IWshRuntimeLibrary$ButtonType__OKCancel> &
      IWshRuntimeLibrary$ButtonType__OKCancel &
      1; // 1
    static +AbortRetryIgnore: Class<IWshRuntimeLibrary$ButtonType__AbortRetryIgnore> &
      IWshRuntimeLibrary$ButtonType__AbortRetryIgnore &
      2; // 2
    static +YesNoCancel: Class<IWshRuntimeLibrary$ButtonType__YesNoCancel> &
      IWshRuntimeLibrary$ButtonType__YesNoCancel &
      3; // 3
    static +YesNo: Class<IWshRuntimeLibrary$ButtonType__YesNo> &
      IWshRuntimeLibrary$ButtonType__YesNo &
      4; // 4
    static +RetryCancel: Class<IWshRuntimeLibrary$ButtonType__RetryCancel> &
      IWshRuntimeLibrary$ButtonType__RetryCancel &
      5; // 5
    static +CancelTryagainContinue: Class<IWshRuntimeLibrary$ButtonType__CancelTryagainContinue> &
      IWshRuntimeLibrary$ButtonType__CancelTryagainContinue &
      6; // 6
  }

  declare class IWshRuntimeLibrary$ButtonType__OK
    mixins IWshRuntimeLibrary$ButtonType {}
  declare class IWshRuntimeLibrary$ButtonType__OKCancel
    mixins IWshRuntimeLibrary$ButtonType {}
  declare class IWshRuntimeLibrary$ButtonType__AbortRetryIgnore
    mixins IWshRuntimeLibrary$ButtonType {}
  declare class IWshRuntimeLibrary$ButtonType__YesNoCancel
    mixins IWshRuntimeLibrary$ButtonType {}
  declare class IWshRuntimeLibrary$ButtonType__YesNo
    mixins IWshRuntimeLibrary$ButtonType {}
  declare class IWshRuntimeLibrary$ButtonType__RetryCancel
    mixins IWshRuntimeLibrary$ButtonType {}
  declare class IWshRuntimeLibrary$ButtonType__CancelTryagainContinue
    mixins IWshRuntimeLibrary$ButtonType {}

  declare class IWshRuntimeLibrary$EventType {
    constructor(...args: empty): mixed;
    static +AuditFailure: Class<IWshRuntimeLibrary$EventType__AuditFailure> &
      IWshRuntimeLibrary$EventType__AuditFailure &
      5; // 5
    static +AuditSuccess: Class<IWshRuntimeLibrary$EventType__AuditSuccess> &
      IWshRuntimeLibrary$EventType__AuditSuccess &
      4; // 4
    static +Error: Class<IWshRuntimeLibrary$EventType__Error> &
      IWshRuntimeLibrary$EventType__Error &
      1; // 1
    static +Information: Class<IWshRuntimeLibrary$EventType__Information> &
      IWshRuntimeLibrary$EventType__Information &
      3; // 3
    static +Success: Class<IWshRuntimeLibrary$EventType__Success> &
      IWshRuntimeLibrary$EventType__Success &
      0; // 0
    static +Warning: Class<IWshRuntimeLibrary$EventType__Warning> &
      IWshRuntimeLibrary$EventType__Warning &
      2; // 2
  }

  declare class IWshRuntimeLibrary$EventType__AuditFailure
    mixins IWshRuntimeLibrary$EventType {}
  declare class IWshRuntimeLibrary$EventType__AuditSuccess
    mixins IWshRuntimeLibrary$EventType {}
  declare class IWshRuntimeLibrary$EventType__Error
    mixins IWshRuntimeLibrary$EventType {}
  declare class IWshRuntimeLibrary$EventType__Information
    mixins IWshRuntimeLibrary$EventType {}
  declare class IWshRuntimeLibrary$EventType__Success
    mixins IWshRuntimeLibrary$EventType {}
  declare class IWshRuntimeLibrary$EventType__Warning
    mixins IWshRuntimeLibrary$EventType {}

  declare class IWshRuntimeLibrary$IconType {
    constructor(...args: empty): mixed;
    static +Stop: Class<IWshRuntimeLibrary$IconType__Stop> &
      IWshRuntimeLibrary$IconType__Stop &
      16; // 16
    static +QuestionMark: Class<IWshRuntimeLibrary$IconType__QuestionMark> &
      IWshRuntimeLibrary$IconType__QuestionMark &
      32; // 32
    static +ExclamationMakr: Class<IWshRuntimeLibrary$IconType__ExclamationMakr> &
      IWshRuntimeLibrary$IconType__ExclamationMakr &
      48; // 48
    static +InformationMark: Class<IWshRuntimeLibrary$IconType__InformationMark> &
      IWshRuntimeLibrary$IconType__InformationMark &
      64; // 64
  }

  declare class IWshRuntimeLibrary$IconType__Stop
    mixins IWshRuntimeLibrary$IconType {}
  declare class IWshRuntimeLibrary$IconType__QuestionMark
    mixins IWshRuntimeLibrary$IconType {}
  declare class IWshRuntimeLibrary$IconType__ExclamationMakr
    mixins IWshRuntimeLibrary$IconType {}
  declare class IWshRuntimeLibrary$IconType__InformationMark
    mixins IWshRuntimeLibrary$IconType {}

  declare class IWshRuntimeLibrary$PopupType {
    constructor(...args: empty): mixed;
    static +SecondButtonDefault: Class<IWshRuntimeLibrary$PopupType__SecondButtonDefault> &
      IWshRuntimeLibrary$PopupType__SecondButtonDefault &
      256; // 256
    static +ThirdButtonDefault: Class<IWshRuntimeLibrary$PopupType__ThirdButtonDefault> &
      IWshRuntimeLibrary$PopupType__ThirdButtonDefault &
      512; // 512
    static +Modal: Class<IWshRuntimeLibrary$PopupType__Modal> &
      IWshRuntimeLibrary$PopupType__Modal &
      4096; // 4096
    static +RightJustified: Class<IWshRuntimeLibrary$PopupType__RightJustified> &
      IWshRuntimeLibrary$PopupType__RightJustified &
      524288; // 524288
    static +RTL: Class<IWshRuntimeLibrary$PopupType__RTL> &
      IWshRuntimeLibrary$PopupType__RTL &
      1048576; // 1048576
  }

  declare class IWshRuntimeLibrary$PopupType__SecondButtonDefault
    mixins IWshRuntimeLibrary$PopupType {}
  declare class IWshRuntimeLibrary$PopupType__ThirdButtonDefault
    mixins IWshRuntimeLibrary$PopupType {}
  declare class IWshRuntimeLibrary$PopupType__Modal
    mixins IWshRuntimeLibrary$PopupType {}
  declare class IWshRuntimeLibrary$PopupType__RightJustified
    mixins IWshRuntimeLibrary$PopupType {}
  declare class IWshRuntimeLibrary$PopupType__RTL
    mixins IWshRuntimeLibrary$PopupType {}

  declare class IWshRuntimeLibrary$PopupSelection {
    constructor(...args: empty): mixed;
    static +NoButton: Class<IWshRuntimeLibrary$PopupSelection__NoButton> &
      IWshRuntimeLibrary$PopupSelection__NoButton &
      -1; // -1
    static +OK: Class<IWshRuntimeLibrary$PopupSelection__OK> &
      IWshRuntimeLibrary$PopupSelection__OK &
      1; // 1
    static +Cancel: Class<IWshRuntimeLibrary$PopupSelection__Cancel> &
      IWshRuntimeLibrary$PopupSelection__Cancel &
      2; // 2
    static +Abort: Class<IWshRuntimeLibrary$PopupSelection__Abort> &
      IWshRuntimeLibrary$PopupSelection__Abort &
      3; // 3
    static +Retry: Class<IWshRuntimeLibrary$PopupSelection__Retry> &
      IWshRuntimeLibrary$PopupSelection__Retry &
      4; // 4
    static +Ignore: Class<IWshRuntimeLibrary$PopupSelection__Ignore> &
      IWshRuntimeLibrary$PopupSelection__Ignore &
      5; // 5
    static +Yes: Class<IWshRuntimeLibrary$PopupSelection__Yes> &
      IWshRuntimeLibrary$PopupSelection__Yes &
      6; // 6
    static +No: Class<IWshRuntimeLibrary$PopupSelection__No> &
      IWshRuntimeLibrary$PopupSelection__No &
      7; // 7
    static +TryAgain: Class<IWshRuntimeLibrary$PopupSelection__TryAgain> &
      IWshRuntimeLibrary$PopupSelection__TryAgain &
      10; // 10
    static +Continue: Class<IWshRuntimeLibrary$PopupSelection__Continue> &
      IWshRuntimeLibrary$PopupSelection__Continue &
      11; // 11
  }

  declare class IWshRuntimeLibrary$PopupSelection__NoButton
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__OK
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__Cancel
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__Abort
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__Retry
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__Ignore
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__Yes
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__No
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__TryAgain
    mixins IWshRuntimeLibrary$PopupSelection {}
  declare class IWshRuntimeLibrary$PopupSelection__Continue
    mixins IWshRuntimeLibrary$PopupSelection {}

  declare class IWshRuntimeLibrary$WshExecStatus {
    constructor(...args: empty): mixed;
    static +WshFailed: Class<IWshRuntimeLibrary$WshExecStatus__WshFailed> &
      IWshRuntimeLibrary$WshExecStatus__WshFailed &
      2; // 2
    static +WshFinished: Class<IWshRuntimeLibrary$WshExecStatus__WshFinished> &
      IWshRuntimeLibrary$WshExecStatus__WshFinished &
      1; // 1
    static +WshRunning: Class<IWshRuntimeLibrary$WshExecStatus__WshRunning> &
      IWshRuntimeLibrary$WshExecStatus__WshRunning &
      0; // 0
  }

  declare class IWshRuntimeLibrary$WshExecStatus__WshFailed
    mixins IWshRuntimeLibrary$WshExecStatus {}
  declare class IWshRuntimeLibrary$WshExecStatus__WshFinished
    mixins IWshRuntimeLibrary$WshExecStatus {}
  declare class IWshRuntimeLibrary$WshExecStatus__WshRunning
    mixins IWshRuntimeLibrary$WshExecStatus {}

  declare class IWshRuntimeLibrary$WshWindowStyle {
    constructor(...args: empty): mixed;
    static +WshHide: Class<IWshRuntimeLibrary$WshWindowStyle__WshHide> &
      IWshRuntimeLibrary$WshWindowStyle__WshHide &
      0; // 0
    static +WshMaximizedFocus: Class<IWshRuntimeLibrary$WshWindowStyle__WshMaximizedFocus> &
      IWshRuntimeLibrary$WshWindowStyle__WshMaximizedFocus &
      3; // 3
    static +WshMinimizedFocus: Class<IWshRuntimeLibrary$WshWindowStyle__WshMinimizedFocus> &
      IWshRuntimeLibrary$WshWindowStyle__WshMinimizedFocus &
      2; // 2
    static +WshMinimizedNoFocus: Class<IWshRuntimeLibrary$WshWindowStyle__WshMinimizedNoFocus> &
      IWshRuntimeLibrary$WshWindowStyle__WshMinimizedNoFocus &
      6; // 6
    static +WshNormalFocus: Class<IWshRuntimeLibrary$WshWindowStyle__WshNormalFocus> &
      IWshRuntimeLibrary$WshWindowStyle__WshNormalFocus &
      1; // 1
    static +WshNormalNoFocus: Class<IWshRuntimeLibrary$WshWindowStyle__WshNormalNoFocus> &
      IWshRuntimeLibrary$WshWindowStyle__WshNormalNoFocus &
      4; // 4
  }

  declare class IWshRuntimeLibrary$WshWindowStyle__WshHide
    mixins IWshRuntimeLibrary$WshWindowStyle {}
  declare class IWshRuntimeLibrary$WshWindowStyle__WshMaximizedFocus
    mixins IWshRuntimeLibrary$WshWindowStyle {}
  declare class IWshRuntimeLibrary$WshWindowStyle__WshMinimizedFocus
    mixins IWshRuntimeLibrary$WshWindowStyle {}
  declare class IWshRuntimeLibrary$WshWindowStyle__WshMinimizedNoFocus
    mixins IWshRuntimeLibrary$WshWindowStyle {}
  declare class IWshRuntimeLibrary$WshWindowStyle__WshNormalFocus
    mixins IWshRuntimeLibrary$WshWindowStyle {}
  declare class IWshRuntimeLibrary$WshWindowStyle__WshNormalNoFocus
    mixins IWshRuntimeLibrary$WshWindowStyle {}

  declare class IWshRuntimeLibrary$TextStreamBase {
    /**
     * The column number of the current character position in an input stream.
     */
    Column: number;

    /**
     * The current line number in an input stream.
     */
    Line: number;

    /**
     * Closes a text stream.
     * It is not necessary to close standard streams; they close automatically when the process ends. If
     * you close a standard stream, be aware that any other pointers to that standard stream become invalid.
     */
    Close(): void;
  }

  declare class IWshRuntimeLibrary$TextStreamWriter
    mixins IWshRuntimeLibrary$TextStreamBase {
    constructor(): this;

    /**
     * Sends a string to an output stream.
     */
    Write(s: string): void;

    /**
     * Sends a specified number of blank lines (newline characters) to an output stream.
     */
    WriteBlankLines(intLines: number): void;

    /**
     * Sends a string followed by a newline character to an output stream.
     */
    WriteLine(s: string): void;
  }

  declare class IWshRuntimeLibrary$TextStreamReader
    mixins IWshRuntimeLibrary$TextStreamBase {
    constructor(): this;

    /**
     * Returns a specified number of characters from an input stream, starting at the current pointer position.
     * Does not return until the ENTER key is pressed.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    Read(characters: number): string;

    /**
     * Returns all characters from an input stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    ReadAll(): string;

    /**
     * Returns an entire line from an input stream.
     * Although this method extracts the newline character, it does not add it to the returned string.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
    ReadLine(): string;

    /**
     * Skips a specified number of characters when reading from an input text stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)
     */
    Skip(characters: number): void;

    /**
     * Skips the next line when reading from an input text stream.
     * Can only be used on a stream in reading mode, not writing or appending mode.
     */
    SkipLine(): void;

    /**
     * Indicates whether the stream pointer position is at the end of a line.
     */
    AtEndOfLine: boolean;

    /**
     * Indicates whether the stream pointer position is at the end of a stream.
     */
    AtEndOfStream: boolean;
  }

  /**
   * Generic Collection Object
   */
  declare interface IWshRuntimeLibrary$WshCollection {
    Count(): number;
    Item(Index: any): any;
    +length: number;
    (Index: any): any;
  }

  /**
   * Environment Variables Collection Object
   */
  declare interface IWshRuntimeLibrary$WshEnvironment {
    Count(): number;
    Item(Name: string): string;
    +Length: number;
    Remove(Name: string): void;
    (Name: string): string;
  }

  /**
   * WSHExec object
   */
  declare class IWshRuntimeLibrary$WshExec {
    constructor(): this;
    ExitCode: number;
    ProcessID: number;
    Status: IWshRuntimeLibrary$WshExecStatus;
    StdErr: IWshRuntimeLibrary$TextStreamWriter;
    StdIn: IWshRuntimeLibrary$TextStreamReader;
    StdOut: IWshRuntimeLibrary$TextStreamWriter;
    Terminate(): void;
  }

  /**
   * Network Object
   */
  declare class IWshRuntimeLibrary$WshNetwork {
    constructor(): this;

    /**
 * Adds a remote MS-DOS-based printer connection to your computer system.
 * @param LocalName Local name to assign to the connected printer.
 * @param RemoteName Name of the remote printer.
 * @param UpdateProfile [false] Whether the printer mapping is stored in the current user's profile.

If you are mapping a remote printer using the profile of someone other than current user, you can specify _UserName_ and _Password_.
 */
    AddPrinterConnection(
      LocalName: string,
      RemoteName: string,
      UpdateProfile?: boolean,
      UserName?: string,
      Password?: string
    ): void;

    /**
 * @param string Path to printer connection
 * @param string [DriverName='']
 * @param string [Port='LPT1']

Unlike the **AddPrinterConnection** method, this method allows you to create a printer connection without directing it to a specific port, such as LPT1.
 */
    AddWindowsPrinterConnection(
      PrinterName: string,
      DriverName?: string,
      Port?: string
    ): void;
    ComputerName: string;
    EnumNetworkDrives(): IWshRuntimeLibrary$WshCollection;
    EnumPrinterConnections(): IWshRuntimeLibrary$WshCollection;

    /**
 * Adds a remote MS-DOS-based printer connection to your computer system.
 * @param LocalName Name by which the mapped drive will be known locally
 * @param RemoteName Share's UNC name (\\xxx\yyy)
 * @param UpdateProfile [false] Whether the printer mapping is stored in the current user's profile.

If you are mapping a network drive using the profile of someone other than current user, you can specify _UserName_ and _Password_.
 */
    MapNetworkDrive(
      LocalName: string,
      RemoteName: string,
      UpdateProfile?: boolean,
      UserName?: string,
      Password?: string
    ): void;
    Organization: string;

    /**
 * Removes a shared network drive from your computer system
 * @param Name Name of the mapped drive you want to remove. This will be the drive letter if the drive has a mapping between a local name (drive letter) and a remote name (UNC name);
it will be the UNC path if there is no such mapping
 * @param Force [false] Remove the connections even if the resource is in use
 * @param UpdateProfile [false] Remove the mapping from the user's profile
 */
    RemoveNetworkDrive(
      Name: string,
      Force?: boolean,
      UpdateProfile?: boolean
    ): void;

    /**
 * Removes a shared network printer connection from your computer system
 * @param Name Name that identifies the printer. Can be a UNC name (in the form `\\xxx\yyy`) or a local name (such as `LPT1`)
 * @param Force [false] Remove printer connection even if a user is still connected
 * @param UpdateProfile [false] Remove the printer connection from the user's profile

The **RemovePrinterConnection** method removes both Windows and MS-DOS based printer connections. If the printer was connected using the method **AddPrinterConnection**,
_Name_ must be the printer's local name. If the printer was connected using the **AddWindowsPrinterConnection** method or was added manually (using the Add Printer wizard),
then _Name_ must be the printer's UNC name.
 */
    RemovePrinterConnection(
      Name: string,
      Force?: true,
      UpdateProfile?: true
    ): void;
    SetDefaultPrinter(Name: string): void;
    Site: string;
    UserDomain: string;
    UserName: string;
    UserProfile: string;
  }

  /**
   * Shell Object
   */
  declare class IWshRuntimeLibrary$WshShell {
    constructor(): this;

    /**
 * Activates an application window
 * @param App Title of application as it appears in the title bar, or the process ID
 * @param Wait This method changes the focus to the named application or window. The window must be attached to the calling thread's message queue. It does not affect whether it is maximized or
minimized. Focus moves from the activated application window when the user takes action to change the focus (or closes the window).

In determining which application to activate, the specified title is compared to the title string of each running application. If no exact match exists, any application whose title
string begins with title is activated. If an application still cannot be found, any application whose title string ends with title is activated. If more than one instance of the
application named by title exists, one instance is arbitrarily activated.

The method might return `false` under the following conditions:

* The window is not brought to the foreground.
* The window is brought to the foreground but is not given keyboard focus.
* A Command Prompt window (`cmd.exe`) is brought to the foreground and is given keyboard focus.
 */
    AppActivate(App: string | number, Wait?: any): boolean;

    /**
 * Creates a shortcut
 * @param PathLink Path where the shortcut should be created

The shortcut object exists in memory until you save it to disk with the **Save** method.
 */
    CreateShortcut(
      PathLink: string
    ): IWshRuntimeLibrary$WshShortcut | IWshRuntimeLibrary$WshURLShortcut;
    CurrentDirectory: string;

    /**
     * Note that **Environment** doesn't actually return a callable object; the call is only usable in the context of the **Environment** property. The following:
     *
     *      let env = new ActiveXObject('WScript.Shell').Environment;
     *      WScript.Echo(env('System'));
     *
     * will return an empty string, unless there is an environment variable named `System`
     */
    Environment: IWshRuntimeLibrary$WshEnvironment &
      ((
        Type: "System" | "User" | "Process" | "Volatile"
      ) => IWshRuntimeLibrary$WshEnvironment);
    Exec(Command: string): IWshRuntimeLibrary$WshExec;
    ExpandEnvironmentStrings(Src: string): string;

    /**
     * @param string [Target=''] Name of the computer system where the event should be logged; default is the local computer system
     */
    LogEvent(
      Type: IWshRuntimeLibrary$EventType,
      Message: string,
      Target?: string
    ): boolean;
    Popup(
      Text: string,
      SecondsToWait?: number,
      Title?: string,
      Type?:
        | IWshRuntimeLibrary$ButtonType
        | IWshRuntimeLibrary$IconType
        | IWshRuntimeLibrary$PopupType
    ): IWshRuntimeLibrary$PopupSelection;
    RegDelete(Name: string): void;

    /**
 * Returns the value of a key or value-name from the registry
 * @param Name Key (ends with a final `\`) or value-name (doesn't end with a final `\`)

Returns one of the following, based on the registry value type:

* **REG_SZ** -- a string
* **REG_DWORD** -- a number
* **REG_SBINARY** -- a binary value, as a COM SafeArray containing integers
* **REG_EXPAND_SZ** -- an expandable string
* **REG_MULTI_SZ** -- an array of srings, as a COM SafeArray
 */
    RegRead(
      Name: string
    ): string | number | SafeArray<string> | SafeArray<number>;

    /**
 * Creates a new key, adds another value-name to an existing key and assigns it a value, or changes the value of an existing value-name
 * @param Name Key (ends with a final `\`) or value-name (doesn't end with a final `\`)
 * @param Value Will be coerced to `string` or `integer` based on the value-name type:
`REG_SZ | REG_EXPAND_SZ` will be converted to `string`;
`REG_DWORD | REG_BINARY` will be converted to `integer`
 * @param Type
 */
    RegWrite(
      Name: string,
      Value: any,
      Type?: "REG_SZ" | "REG_DWORD" | "REG_BINARY" | "REG_EXPAND_SZ"
    ): void;

    /**
 * Runs a program in a new process.
 * @param Command Command-line, including any parameters you want to pass to the executable file.
 * @param WindowStyle Appearance of the program window. Not all programs make use of this information.
 * @param WaitOnReturn Block script until program finishes executing.

If `false` is passed into **WaitOnReturn**, the **Run** method will return 0 immediately. If `true` is passed in, **Run** will return the program's error code, if any.

Environment variables will be expanded within the command line.

Passing a registered file type will automatically open the program registered to the file type.

Possible values for **WindowStyle**:

* **0** -- Hides the window and activates another window.
* **1** -- Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag
when displaying the window for the first time.
* **2** -- Activates the window and displays it as a minimized window.
* **3** -- Activates the window and displays it as a maximized window.
* **4** -- Displays a window in its most recent size and position. The active window remains active.
* **5** -- Activates the window and displays it in its current size and position.
* **6** -- Minimizes the specified window and activates the next top-level window in the Z order.
* **7** -- Displays the window as a minimized window. The active window remains active.
* **8** -- Displays the window in its current state. The active window remains active.
* **9** -- Activates and displays the window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag
when restoring a minimized window.
* **10** -- Sets the show-state based on the state of the program that started the application.
 */
    Run(
      Command: string,
      IWshRuntimeLibrary$WindowStyle?: IWshRuntimeLibrary$WindowStyle,
      WaitOnReturn?: boolean
    ): number;
    SendKeys(Keys: string, Wait?: boolean): void;
    SpecialFolders: IWshRuntimeLibrary$WshCollection;
  }

  /**
   * Shortcut Object
   */
  declare class IWshRuntimeLibrary$WshShortcut {
    constructor(): this;
    Arguments: string;
    Description: string;
    FullName: string;
    Hotkey: string;
    IconLocation: string;
    Load(PathLink: string): void;
    RelativePath: string;
    Save(): void;
    TargetPath: string;

    /**
     * Possible values:
     *
     * * **1** -- Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag
     * when displaying the window for the first time.
     * * **3** -- Activates the window and displays it as a maximized window.
     * * **7** -- Displays the window as a minimized window. The active window remains active.
     */
    IWshRuntimeLibrary$WindowStyle: IWshRuntimeLibrary$ShortcutWindowStyle;
    WorkingDirectory: string;
  }

  /**
   * URLShortcut Object
   */
  declare class IWshRuntimeLibrary$WshURLShortcut {
    constructor(): this;
    FullName: string;
    Load(PathLink: string): void;
    Save(): void;
    TargetPath: string;
  }
  declare class WSHControllerLibrary$WSHController {
    constructor(): this;
    CreateScript(Command: string, Server?: any): any;
  }
  declare class ScriptSigner$Signer {
    constructor(): this;

    /**
     * @param Store [Store='my']
     */
    Sign(
      FileExtension: string,
      Text: string,
      Certificate: string,
      Store?: string
    ): string;

    /**
     * @param Store [Store='my']
     */
    SignFile(FileName: string, Certificate: string, Store?: string): void;

    /**
     * @param ShowUI [ShowUI=false]
     */
    Verify(FileExtension: string, Text: string, ShowUI?: boolean): boolean;

    /**
     * @param ShowUI [ShowUI=false]
     */
    VerifyFile(FileName: string, ShowUI?: boolean): boolean;
  }
  declare interface ActiveXObjectNameMap {
    WSHController: WSHControllerLibrary$WSHControllerLibrary$WSHController;
    "Scripting.Signer": ScriptSigner$ScriptSigner$Signer;
    "WScript.Network": IWshRuntimeLibrary$IWshRuntimeLibrary$WshNetwork;
    "WScript.Shell": IWshRuntimeLibrary$IWshRuntimeLibrary$WshShell;
  }
  declare interface ActiveXObject {
    set(
      obj: IWshRuntimeLibrary$IWshRuntimeLibrary$WshEnvironment,
      propertyName: "Item",
      parameterTypes: [string],
      newValue: string
    ): void;
  }
}
