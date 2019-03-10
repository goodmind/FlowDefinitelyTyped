declare module "activex-iwshruntimelibrary" {
  declare var npm$namespace$IWshRuntimeLibrary: {
    ButtonType: typeof IWshRuntimeLibrary$ButtonType,
    EventType: typeof IWshRuntimeLibrary$EventType,
    IconType: typeof IWshRuntimeLibrary$IconType,
    PopupType: typeof IWshRuntimeLibrary$PopupType,
    PopupSelection: typeof IWshRuntimeLibrary$PopupSelection,
    WshExecStatus: typeof IWshRuntimeLibrary$WshExecStatus,
    WshWindowStyle: typeof IWshRuntimeLibrary$WshWindowStyle,
    TextStreamBase: typeof IWshRuntimeLibrary$TextStreamBase,
    TextStreamWriter: typeof IWshRuntimeLibrary$TextStreamWriter,
    TextStreamReader: typeof IWshRuntimeLibrary$TextStreamReader,
    WshExec: typeof IWshRuntimeLibrary$WshExec,
    WshNetwork: typeof IWshRuntimeLibrary$WshNetwork,
    WshShell: typeof IWshRuntimeLibrary$WshShell,
    WshShortcut: typeof IWshRuntimeLibrary$WshShortcut,
    WshURLShortcut: typeof IWshRuntimeLibrary$WshURLShortcut
  };
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

  declare var IWshRuntimeLibrary$ButtonType: {|
    +OK: 0, // 0
    +OKCancel: 1, // 1
    +AbortRetryIgnore: 2, // 2
    +YesNoCancel: 3, // 3
    +YesNo: 4, // 4
    +RetryCancel: 5, // 5
    +CancelTryagainContinue: 6 // 6
  |};

  declare var IWshRuntimeLibrary$EventType: {|
    +AuditFailure: 5, // 5
    +AuditSuccess: 4, // 4
    +Error: 1, // 1
    +Information: 3, // 3
    +Success: 0, // 0
    +Warning: 2 // 2
  |};

  declare var IWshRuntimeLibrary$IconType: {|
    +Stop: 16, // 16
    +QuestionMark: 32, // 32
    +ExclamationMakr: 48, // 48
    +InformationMark: 64 // 64
  |};

  declare var IWshRuntimeLibrary$PopupType: {|
    +SecondButtonDefault: 256, // 256
    +ThirdButtonDefault: 512, // 512
    +Modal: 4096, // 4096
    +RightJustified: 524288, // 524288
    +RTL: 1048576 // 1048576
  |};

  declare var IWshRuntimeLibrary$PopupSelection: {|
    +NoButton: -1, // -1
    +OK: 1, // 1
    +Cancel: 2, // 2
    +Abort: 3, // 3
    +Retry: 4, // 4
    +Ignore: 5, // 5
    +Yes: 6, // 6
    +No: 7, // 7
    +TryAgain: 10, // 10
    +Continue: 11 // 11
  |};

  declare var IWshRuntimeLibrary$WshExecStatus: {|
    +WshFailed: 2, // 2
    +WshFinished: 1, // 1
    +WshRunning: 0 // 0
  |};

  declare var IWshRuntimeLibrary$WshWindowStyle: {|
    +WshHide: 0, // 0
    +WshMaximizedFocus: 3, // 3
    +WshMinimizedFocus: 2, // 2
    +WshMinimizedNoFocus: 6, // 6
    +WshNormalFocus: 1, // 1
    +WshNormalNoFocus: 4 // 4
  |};

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
    Status: $Values<typeof IWshRuntimeLibrary$WshExecStatus>;
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
     *
     * If you are mapping a remote printer using the profile of someone other than current user, you can specify _UserName_ and _Password_.
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
     *
     * Unlike the **AddPrinterConnection** method, this method allows you to create a printer connection without directing it to a specific port, such as LPT1.
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
     *
     * If you are mapping a network drive using the profile of someone other than current user, you can specify _UserName_ and _Password_.
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
     * it will be the UNC path if there is no such mapping
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
     *
     * The **RemovePrinterConnection** method removes both Windows and MS-DOS based printer connections. If the printer was connected using the method **AddPrinterConnection**,
     * _Name_ must be the printer's local name. If the printer was connected using the **AddWindowsPrinterConnection** method or was added manually (using the Add Printer wizard),
     * then _Name_ must be the printer's UNC name.
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
     * minimized. Focus moves from the activated application window when the user takes action to change the focus (or closes the window).
     *
     * In determining which application to activate, the specified title is compared to the title string of each running application. If no exact match exists, any application whose title
     * string begins with title is activated. If an application still cannot be found, any application whose title string ends with title is activated. If more than one instance of the
     * application named by title exists, one instance is arbitrarily activated.
     *
     * The method might return `false` under the following conditions:
     *
     * * The window is not brought to the foreground.
     * * The window is brought to the foreground but is not given keyboard focus.
     * * A Command Prompt window (`cmd.exe`) is brought to the foreground and is given keyboard focus.
     */
    AppActivate(App: string | number, Wait?: any): boolean;

    /**
     * Creates a shortcut
     * @param PathLink Path where the shortcut should be created
     *
     * The shortcut object exists in memory until you save it to disk with the **Save** method.
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
      Type: $Values<typeof IWshRuntimeLibrary$EventType>,
      Message: string,
      Target?: string
    ): boolean;
    Popup(
      Text: string,
      SecondsToWait?: number,
      Title?: string,
      Type?:
        | $Values<typeof IWshRuntimeLibrary$ButtonType>
        | $Values<typeof IWshRuntimeLibrary$IconType>
        | $Values<typeof IWshRuntimeLibrary$PopupType>
    ): $Values<typeof IWshRuntimeLibrary$PopupSelection>;
    RegDelete(Name: string): void;

    /**
     * Returns the value of a key or value-name from the registry
     * @param Name Key (ends with a final `\`) or value-name (doesn't end with a final `\`)
     *
     * Returns one of the following, based on the registry value type:
     *
     * * **REG_SZ** -- a string
     * * **REG_DWORD** -- a number
     * * **REG_SBINARY** -- a binary value, as a COM SafeArray containing integers
     * * **REG_EXPAND_SZ** -- an expandable string
     * * **REG_MULTI_SZ** -- an array of srings, as a COM SafeArray
     */
    RegRead(
      Name: string
    ): string | number | SafeArray<string> | SafeArray<number>;

    /**
     * Creates a new key, adds another value-name to an existing key and assigns it a value, or changes the value of an existing value-name
     * @param Name Key (ends with a final `\`) or value-name (doesn't end with a final `\`)
     * @param Value Will be coerced to `string` or `integer` based on the value-name type:
     * `REG_SZ | REG_EXPAND_SZ` will be converted to `string`;
     * `REG_DWORD | REG_BINARY` will be converted to `integer`
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
     *
     * If `false` is passed into **WaitOnReturn**, the **Run** method will return 0 immediately. If `true` is passed in, **Run** will return the program's error code, if any.
     *
     * Environment variables will be expanded within the command line.
     *
     * Passing a registered file type will automatically open the program registered to the file type.
     *
     * Possible values for **WindowStyle**:
     *
     * * **0** -- Hides the window and activates another window.
     * * **1** -- Activates and displays a window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag
     * when displaying the window for the first time.
     * * **2** -- Activates the window and displays it as a minimized window.
     * * **3** -- Activates the window and displays it as a maximized window.
     * * **4** -- Displays a window in its most recent size and position. The active window remains active.
     * * **5** -- Activates the window and displays it in its current size and position.
     * * **6** -- Minimizes the specified window and activates the next top-level window in the Z order.
     * * **7** -- Displays the window as a minimized window. The active window remains active.
     * * **8** -- Displays the window in its current state. The active window remains active.
     * * **9** -- Activates and displays the window. If the window is minimized or maximized, the system restores it to its original size and position. An application should specify this flag
     * when restoring a minimized window.
     * * **10** -- Sets the show-state based on the state of the program that started the application.
     */
    Run(
      Command: string,
      WindowStyle?: IWshRuntimeLibrary$WindowStyle,
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

  declare var npm$namespace$WSHControllerLibrary: {
    WSHController: typeof WSHControllerLibrary$WSHController
  };
  declare class WSHControllerLibrary$WSHController {
    constructor(): this;
    CreateScript(Command: string, Server?: any): any;
  }

  declare var npm$namespace$ScriptSigner: {
    Signer: typeof ScriptSigner$Signer
  };
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
    WSHController: WSHControllerLibrary$WSHController;
    "Scripting.Signer": ScriptSigner$Signer;
    "WScript.Network": IWshRuntimeLibrary$WshNetwork;
    "WScript.Shell": IWshRuntimeLibrary$WshShell;
  }
  declare interface ActiveXObject {
    set(
      obj: IWshRuntimeLibrary$WshEnvironment,
      propertyName: "Item",
      parameterTypes: [string],
      newValue: string
    ): void;
  }
}
