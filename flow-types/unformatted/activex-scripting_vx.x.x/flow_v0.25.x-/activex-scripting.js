declare module 'activex-scripting' {
        declare  class Scripting$CompareMethod {
  constructor(...args: empty): mixed;
static +BinaryCompare: Class<Scripting$CompareMethod__BinaryCompare> & Scripting$CompareMethod__BinaryCompare & 0;// 0
static +DatabaseCompare: Class<Scripting$CompareMethod__DatabaseCompare> & Scripting$CompareMethod__DatabaseCompare & 2;// 2
static +TextCompare: Class<Scripting$CompareMethod__TextCompare> & Scripting$CompareMethod__TextCompare & 1;// 1

}

declare class Scripting$CompareMethod__BinaryCompare mixins Scripting$CompareMethod {}
declare class Scripting$CompareMethod__DatabaseCompare mixins Scripting$CompareMethod {}
declare class Scripting$CompareMethod__TextCompare mixins Scripting$CompareMethod {}


declare  class Scripting$DriveTypeConst {
  constructor(...args: empty): mixed;
static +CDRom: Class<Scripting$DriveTypeConst__CDRom> & Scripting$DriveTypeConst__CDRom & 4;// 4
static +Fixed: Class<Scripting$DriveTypeConst__Fixed> & Scripting$DriveTypeConst__Fixed & 2;// 2
static +RamDisk: Class<Scripting$DriveTypeConst__RamDisk> & Scripting$DriveTypeConst__RamDisk & 5;// 5
static +Remote: Class<Scripting$DriveTypeConst__Remote> & Scripting$DriveTypeConst__Remote & 3;// 3
static +Removable: Class<Scripting$DriveTypeConst__Removable> & Scripting$DriveTypeConst__Removable & 1;// 1
static +UnknownType: Class<Scripting$DriveTypeConst__UnknownType> & Scripting$DriveTypeConst__UnknownType & 0;// 0

}

declare class Scripting$DriveTypeConst__CDRom mixins Scripting$DriveTypeConst {}
declare class Scripting$DriveTypeConst__Fixed mixins Scripting$DriveTypeConst {}
declare class Scripting$DriveTypeConst__RamDisk mixins Scripting$DriveTypeConst {}
declare class Scripting$DriveTypeConst__Remote mixins Scripting$DriveTypeConst {}
declare class Scripting$DriveTypeConst__Removable mixins Scripting$DriveTypeConst {}
declare class Scripting$DriveTypeConst__UnknownType mixins Scripting$DriveTypeConst {}


declare  class Scripting$FileAttribute {
  constructor(...args: empty): mixed;
static +Alias: Class<Scripting$FileAttribute__Alias> & Scripting$FileAttribute__Alias & 1024;// 1024
static +Archive: Class<Scripting$FileAttribute__Archive> & Scripting$FileAttribute__Archive & 32;// 32
static +Compressed: Class<Scripting$FileAttribute__Compressed> & Scripting$FileAttribute__Compressed & 2048;// 2048
static +Directory: Class<Scripting$FileAttribute__Directory> & Scripting$FileAttribute__Directory & 16;// 16
static +Hidden: Class<Scripting$FileAttribute__Hidden> & Scripting$FileAttribute__Hidden & 2;// 2
static +Normal: Class<Scripting$FileAttribute__Normal> & Scripting$FileAttribute__Normal & 0;// 0
static +ReadOnly: Class<Scripting$FileAttribute__ReadOnly> & Scripting$FileAttribute__ReadOnly & 1;// 1
static +System: Class<Scripting$FileAttribute__System> & Scripting$FileAttribute__System & 4;// 4
static +Volume: Class<Scripting$FileAttribute__Volume> & Scripting$FileAttribute__Volume & 8;// 8

}

declare class Scripting$FileAttribute__Alias mixins Scripting$FileAttribute {}
declare class Scripting$FileAttribute__Archive mixins Scripting$FileAttribute {}
declare class Scripting$FileAttribute__Compressed mixins Scripting$FileAttribute {}
declare class Scripting$FileAttribute__Directory mixins Scripting$FileAttribute {}
declare class Scripting$FileAttribute__Hidden mixins Scripting$FileAttribute {}
declare class Scripting$FileAttribute__Normal mixins Scripting$FileAttribute {}
declare class Scripting$FileAttribute__ReadOnly mixins Scripting$FileAttribute {}
declare class Scripting$FileAttribute__System mixins Scripting$FileAttribute {}
declare class Scripting$FileAttribute__Volume mixins Scripting$FileAttribute {}


declare  class Scripting$IOMode {
  constructor(...args: empty): mixed;
static +ForAppending: Class<Scripting$IOMode__ForAppending> & Scripting$IOMode__ForAppending & 8;// 8
static +ForReading: Class<Scripting$IOMode__ForReading> & Scripting$IOMode__ForReading & 1;// 1
static +ForWriting: Class<Scripting$IOMode__ForWriting> & Scripting$IOMode__ForWriting & 2;// 2

}

declare class Scripting$IOMode__ForAppending mixins Scripting$IOMode {}
declare class Scripting$IOMode__ForReading mixins Scripting$IOMode {}
declare class Scripting$IOMode__ForWriting mixins Scripting$IOMode {}


declare  class Scripting$SpecialFolderConst {
  constructor(...args: empty): mixed;
static +SystemFolder: Class<Scripting$SpecialFolderConst__SystemFolder> & Scripting$SpecialFolderConst__SystemFolder & 1;// 1
static +TemporaryFolder: Class<Scripting$SpecialFolderConst__TemporaryFolder> & Scripting$SpecialFolderConst__TemporaryFolder & 2;// 2
static +WindowsFolder: Class<Scripting$SpecialFolderConst__WindowsFolder> & Scripting$SpecialFolderConst__WindowsFolder & 0;// 0

}

declare class Scripting$SpecialFolderConst__SystemFolder mixins Scripting$SpecialFolderConst {}
declare class Scripting$SpecialFolderConst__TemporaryFolder mixins Scripting$SpecialFolderConst {}
declare class Scripting$SpecialFolderConst__WindowsFolder mixins Scripting$SpecialFolderConst {}


declare  class Scripting$StandardStreamTypes {
  constructor(...args: empty): mixed;
static +StdErr: Class<Scripting$StandardStreamTypes__StdErr> & Scripting$StandardStreamTypes__StdErr & 2;// 2
static +StdIn: Class<Scripting$StandardStreamTypes__StdIn> & Scripting$StandardStreamTypes__StdIn & 0;// 0
static +StdOut: Class<Scripting$StandardStreamTypes__StdOut> & Scripting$StandardStreamTypes__StdOut & 1;// 1

}

declare class Scripting$StandardStreamTypes__StdErr mixins Scripting$StandardStreamTypes {}
declare class Scripting$StandardStreamTypes__StdIn mixins Scripting$StandardStreamTypes {}
declare class Scripting$StandardStreamTypes__StdOut mixins Scripting$StandardStreamTypes {}


declare  class Scripting$Tristate {
  constructor(...args: empty): mixed;
static +TristateFalse: Class<Scripting$Tristate__TristateFalse> & Scripting$Tristate__TristateFalse & 0;// 0
static +TristateMixed: Class<Scripting$Tristate__TristateMixed> & Scripting$Tristate__TristateMixed & -2;// -2
static +TristateTrue: Class<Scripting$Tristate__TristateTrue> & Scripting$Tristate__TristateTrue & -1;// -1
static +TristateUseDefault: Class<Scripting$Tristate__TristateUseDefault> & Scripting$Tristate__TristateUseDefault & -2;// -2

}

declare class Scripting$Tristate__TristateFalse mixins Scripting$Tristate {}
declare class Scripting$Tristate__TristateMixed mixins Scripting$Tristate {}
declare class Scripting$Tristate__TristateTrue mixins Scripting$Tristate {}
declare class Scripting$Tristate__TristateUseDefault mixins Scripting$Tristate {}



/**
 * Scripting.Dictionary
 */
declare interface Scripting$Dictionary<TKey= any, TItem= any> {

/**
 * Add a new key and item to the dictionary.
 */
Add(Key: TKey, Item: TItem): void,

/**
 * Set or get the string comparison method.
 */
CompareMode: Scripting$CompareMethod,

/**
 * Get the number of items in the dictionary.
 */
+Count: number,

/**
 * Determine if a given key is in the dictionary.
 */
Exists(Key: TKey): boolean,
HashVal(Key: TKey): any,

/**
 * Set or get the item for a given key
 */
Item(Key: TKey): TItem,

/**
 * Get an array containing all items in the dictionary.
 */
Items(): SafeArray<TItem>,

/**
 * Change a key to a different key.
 */
Key(Key: TKey): TKey,

/**
 * Get an array containing all keys in the dictionary.
 */
Keys(): SafeArray<TKey>,

/**
 * Remove a given key from the dictionary.
 */
Remove(Key: TKey): void,

/**
 * Remove all information from the dictionary.
 */
RemoveAll(): void,

/**
 * Set or get the item for a given key
 */
(Key: TKey): TItem
} 


/**
 * Drive Object
 */
declare class Scripting$Drive  {
constructor(): this;

/**
 * Get available space
 */
AvailableSpace: number;

/**
 * Drive letter
 */
DriveLetter: string;

/**
 * Drive type
 */
DriveType: Scripting$DriveTypeConst;

/**
 * Filesystem type
 */
FileSystem: string;

/**
 * Get drive free space
 */
FreeSpace: number;

/**
 * Check if disk is available
 */
IsReady: boolean;

/**
 * Path
 */
Path: string;

/**
 * Root folder
 */
RootFolder: Scripting$Folder;

/**
 * Serial number
 */
SerialNumber: number;

/**
 * Share name
 */
ShareName: string;

/**
 * Get total drive size
 */
TotalSize: number;

/**
 * Name of volume
 */
VolumeName: string
}


/**
 * Collection of drives associated with drive letters
 */
declare interface Scripting$Drives {

/**
 * Number of drives
 */
+Count: number,

/**
 * Get drive using the drive letter (`C`) or path (`C:\\`)
 */
Item(Key: string): Scripting$Drive,

/**
 * Get drive using the drive letter (`C`) or path (`C:\\`)
 */
(Key: string): Scripting$Drive
} 


/**
 * Script Encoder Object
 */
declare interface Scripting$Encoder {

/**
 * Call the Encoder determined by szExt, passing bstrStreamIn and optional arguments
 */
EncodeScriptFile(
szExt: string,
bstrStreamIn: string,
cFlags: number,
bstrDefaultLang: string): string,

/**
 * Call the Encoder determined by szExt, passing bstrStreamIn and optional arguments
 */
(szExt: string, bstrStreamIn: string, cFlags: number, bstrDefaultLang: string): string
} 


/**
 * File object
 */
declare class Scripting$File  {
constructor(): this;

/**
 * File attributes
 */
Attributes: Scripting$FileAttribute;

/**
 * Copy this file
 * @param boolean [OverWriteFiles=true]
 */
Copy(Destination: string, OverWriteFiles?: boolean): void;

/**
 * Date file was created
 */
DateCreated: VarDate;

/**
 * Date file was last accessed
 */
DateLastAccessed: VarDate;

/**
 * Date file was last modified
 */
DateLastModified: VarDate;

/**
 * Delete this file
 * @param boolean [Force=false] Pass `true` to delete the file even if the read-only attribute is set
 */
Delete(Force?: boolean): void;

/**
 * Get drive that contains file
 */
Scripting$Drive: Scripting$Drive;

/**
 * Move this file
 */
Move(Destination: string): void;

/**
 * Get name of file
 */
Name: string;

/**
 * Open a file as a TextStream
 * @param [IOMode=1]
 * @param [Format=0]
 */
OpenAsTextStream(
Scripting$IOMode?: Scripting$IOMode,
Format?: Scripting$Tristate): Scripting$TextStream;

/**
 * Get folder that contains file
 */
ParentFolder: Scripting$Folder;

/**
 * Path to the file
 */
Path: string;

/**
 * Short name
 */
ShortName: string;

/**
 * Short path
 */
ShortPath: string;

/**
 * File size
 */
Size: number;

/**
 * Type description
 */
Type: string
}


/**
 * Collection of files in a folder
 */
declare interface Scripting$Files {

/**
 * Number of folders
 */
+Count: number,

/**
 * Get file object using the name and extension of the file
 */
Item(Key: string): Scripting$File,

/**
 * Get file
 */
(Key: string): Scripting$File
} 


/**
 * FileSystem Object
 */
declare class Scripting$FileSystemObject  {
constructor(): this;

/**
 * Generate a path from an existing path and a name
 */
BuildPath(Path: string, Name: string): string;

/**
 * Copy a file
 * @param boolean [OverWriteFiles=true]
 */
CopyFile(Source: string, Destination: string, OverWriteFiles?: boolean): void;

/**
 * Copy a folder
 * @param boolean [OverWriteFiles=true]
 */
CopyFolder(Source: string, Destination: string, OverWriteFiles?: boolean): void;

/**
 * Create a folder
 */
CreateFolder(Path: string): Scripting$Folder;

/**
 * Create a file as a TextStream
 * @param boolean [Overwrite=true]
 * @param boolean [Unicode=false]
 */
CreateTextFile(FileName: string, Overwrite?: boolean, Unicode?: boolean): Scripting$TextStream;

/**
 * Delete a file
 * @param boolean [Force=false] Pass `true` to also delete files with the read-only attribute set
 */
DeleteFile(FileSpec: string, Force?: boolean): void;

/**
 * Delete a folder
 * @param boolean [Force=false] Pass `true` to also delete folders with the read-only attribute set
 */
DeleteFolder(FolderSpec: string, Force?: boolean): void;

/**
 * Check if a drive or a share exists
 */
DriveExists(DriveSpec: string): boolean;

/**
 * Get drives collection
 */
Scripting$Drives: Scripting$Drives;

/**
 * Check if a file exists
 */
FileExists(FileSpec: string): boolean;

/**
 * Check if a path exists
 */
FolderExists(FolderSpec: string): boolean;

/**
 * Return the canonical representation of the path
 */
GetAbsolutePathName(Path: string): string;

/**
 * Return base name from a path
 */
GetBaseName(Path: string): string;

/**
 * Get drive or UNC share
 */
GetDrive(DriveSpec: string): Scripting$Drive;

/**
 * Return drive from a path
 */
GetDriveName(Path: string): string;

/**
 * Return extension from path
 */
GetExtensionName(Path: string): string;

/**
 * Get file
 */
GetFile(FilePath: string): Scripting$File;

/**
 * Return the file name from a path
 */
GetFileName(Path: string): string;

/**
 * Retrieve the file version of the specified file into a string
 */
GetFileVersion(FileName: string): string;

/**
 * Get folder
 */
GetFolder(FolderPath: string): Scripting$Folder;

/**
 * Return path to the parent folder
 */
GetParentFolderName(Path: string): string;

/**
 * Get location of various system folders
 */
GetSpecialFolder(SpecialFolder: Scripting$SpecialFolderConst): Scripting$Folder;

/**
 * Retrieve the standard input, output or error stream
 * @param boolean [Unicode=false]
 */
GetStandardStream(
StandardStreamType: Scripting$StandardStreamTypes,
Unicode?: boolean): Scripting$TextStream;

/**
 * Generate name that can be used to name a temporary file
 */
GetTempName(): string;

/**
 * Move a file
 */
MoveFile(Source: string, Destination: string): void;

/**
 * Move a folder
 */
MoveFolder(Source: string, Destination: string): void;

/**
 * Open a file as a TextStream
 * @param [IOMode=1]
 * @param boolean [Create=false]
 * @param [Format=0] **TristateTrue** opens the file as Unicode; **TristateFalse** opens the file as ASCII;  **TristateUseDefault** opens the file with  the system default
 */
OpenTextFile(
FileName: string,
Scripting$IOMode?: Scripting$IOMode,
Create?: boolean,
Format?: Scripting$Tristate): Scripting$TextStream
}


/**
 * Folder object
 */
declare class Scripting$Folder  {
constructor(): this;

/**
 * Folder attributes
 */
Attributes: Scripting$FileAttribute;

/**
 * Copy this folder
 * @param boolean [OverWriteFiles=true]
 */
Copy(Destination: string, OverWriteFiles?: boolean): void;

/**
 * Create a file as a TextStream
 * @param boolean [Overwrite=true]
 * @param boolean [Unicode=false]
 */
CreateTextFile(FileName: string, Overwrite?: boolean, Unicode?: boolean): Scripting$TextStream;

/**
 * Date folder was created
 */
DateCreated: VarDate;

/**
 * Date folder was last accessed
 */
DateLastAccessed: VarDate;

/**
 * Date folder was last modified
 */
DateLastModified: VarDate;

/**
 * Delete this folder
 * @param boolean [Force=false] Pass `true` to delete the folder even if the read-only attribute set
 */
Delete(Force?: boolean): void;

/**
 * Get drive that contains folder
 */
Scripting$Drive: Scripting$Drive;

/**
 * Get files collection
 */
Scripting$Files: Scripting$Files;

/**
 * True if folder is root
 */
IsRootFolder: boolean;

/**
 * Move this folder
 */
Move(Destination: string): void;

/**
 * Get name of folder
 */
Name: string;

/**
 * Get parent folder
 */
ParentFolder: Scripting$Folder;

/**
 * Path to folder
 */
Path: string;

/**
 * Short name
 */
ShortName: string;

/**
 * Short path
 */
ShortPath: string;

/**
 * Sum of files and subfolders
 */
Size: number;

/**
 * Get folders collection
 */
SubFolders: Scripting$Folders;

/**
 * Type description
 */
Type: string
}


/**
 * Collection of subfolders in a folder
 */
declare interface Scripting$Folders {

/**
 * Create a new folder
 */
Add(Name: string): Scripting$Folder,

/**
 * Number of folders
 */
+Count: number,

/**
 * Get folder in collection using the folder's name
 */
Item(Key: string): Scripting$Folder,

/**
 * Get folder in collection using the folder's name
 */
(Key: string): Scripting$Folder
} 


/**
 * TextStream object
 */
declare class Scripting$TextStream  {
constructor(): this;

/**
 * Is the current position at the end of a line?
 */
AtEndOfLine: boolean;

/**
 * Is the current position at the end of the stream?
 */
AtEndOfStream: boolean;

/**
 * Close a text stream
 */
Close(): void;

/**
 * Current column number
 */
Column: number;

/**
 * Current line number
 */
Line: number;

/**
 * Read a specific number of characters into a string
 */
Read(Characters: number): string;

/**
 * Read the entire stream into a string
 */
ReadAll(): string;

/**
 * Read an entire line into a string
 */
ReadLine(): string;

/**
 * Skip a specific number of characters
 */
Skip(Characters: number): void;

/**
 * Skip a line
 */
SkipLine(): void;

/**
 * Write a string to the stream
 */
Write(Text: string): void;

/**
 * Write a number of blank lines to the stream
 */
WriteBlankLines(Lines: number): void;

/**
 * Write a string and an end of line to the stream
 * @param string [Text='']
 */
WriteLine(Text?: string): void
}
	declare interface ActiveXObject {
set<TKey= any, TValue= any>(
obj: Scripting$Scripting$Dictionary<TKey, TValue>,
propertyName: "Item",
parameterTypes: [TKey],
newValue: TValue): void
} 
	declare interface ActiveXObjectNameMap {
"Scripting.Dictionary": Scripting$Scripting$Dictionary,
"Scripting.Encoder": Scripting$Scripting$Encoder,
"Scripting.FileSystemObject": Scripting$Scripting$FileSystemObject
} 
	declare interface EnumeratorConstructor {
new <TKey>(dict: Scripting$Scripting$Dictionary<TKey>): Enumerator<TKey>
} 
    }
