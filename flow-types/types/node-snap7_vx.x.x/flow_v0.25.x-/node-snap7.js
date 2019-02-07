declare module "node-snap7" {
  declare export class ConnectionType {
    constructor(...args: empty): mixed;
    static +CONNTYPE_PG: Class<ConnectionType__CONNTYPE_PG> &
      ConnectionType__CONNTYPE_PG &
      1; // 1
    static +CONNTYPE_OP: Class<ConnectionType__CONNTYPE_OP> &
      ConnectionType__CONNTYPE_OP &
      2; // 2
    static +CONNTYPE_BASIC: Class<ConnectionType__CONNTYPE_BASIC> &
      ConnectionType__CONNTYPE_BASIC &
      3; // 3
  }

  declare class ConnectionType__CONNTYPE_PG mixins ConnectionType {}
  declare class ConnectionType__CONNTYPE_OP mixins ConnectionType {}
  declare class ConnectionType__CONNTYPE_BASIC mixins ConnectionType {}

  declare export class ParamNumber {
    constructor(...args: empty): mixed;
    static +RemotePort: Class<ParamNumber__RemotePort> &
      ParamNumber__RemotePort &
      2; // 2
    static +PingTimeout: Class<ParamNumber__PingTimeout> &
      ParamNumber__PingTimeout &
      3; // 3
    static +SendTimeout: Class<ParamNumber__SendTimeout> &
      ParamNumber__SendTimeout &
      4; // 4
    static +RecvTimeout: Class<ParamNumber__RecvTimeout> &
      ParamNumber__RecvTimeout &
      5; // 5
    static +SrcRef: Class<ParamNumber__SrcRef> & ParamNumber__SrcRef & 7; // 7
    static +DstRef: Class<ParamNumber__DstRef> & ParamNumber__DstRef & 8; // 8
    static +SrcTSap: Class<ParamNumber__SrcTSap> & ParamNumber__SrcTSap & 9; // 9
    static +PDURequest: Class<ParamNumber__PDURequest> &
      ParamNumber__PDURequest &
      10; // 10
  }

  declare class ParamNumber__RemotePort mixins ParamNumber {}
  declare class ParamNumber__PingTimeout mixins ParamNumber {}
  declare class ParamNumber__SendTimeout mixins ParamNumber {}
  declare class ParamNumber__RecvTimeout mixins ParamNumber {}
  declare class ParamNumber__SrcRef mixins ParamNumber {}
  declare class ParamNumber__DstRef mixins ParamNumber {}
  declare class ParamNumber__SrcTSap mixins ParamNumber {}
  declare class ParamNumber__PDURequest mixins ParamNumber {}

  declare export class Area {
    constructor(...args: empty): mixed;
    static +S7AreaPE: Class<Area__S7AreaPE> & Area__S7AreaPE & 129; // 129
    static +S7AreaPA: Class<Area__S7AreaPA> & Area__S7AreaPA & 130; // 130
    static +S7AreaMK: Class<Area__S7AreaMK> & Area__S7AreaMK & 131; // 131
    static +S7AreaDB: Class<Area__S7AreaDB> & Area__S7AreaDB & 132; // 132
    static +S7AreaCT: Class<Area__S7AreaCT> & Area__S7AreaCT & 28; // 28
    static +S7AreaTM: Class<Area__S7AreaTM> & Area__S7AreaTM & 29; // 29
  }

  declare class Area__S7AreaPE mixins Area {}
  declare class Area__S7AreaPA mixins Area {}
  declare class Area__S7AreaMK mixins Area {}
  declare class Area__S7AreaDB mixins Area {}
  declare class Area__S7AreaCT mixins Area {}
  declare class Area__S7AreaTM mixins Area {}

  declare export class WordLen {
    constructor(...args: empty): mixed;
    static +S7WLBit: Class<WordLen__S7WLBit> & WordLen__S7WLBit & 1; // 1
    static +S7WLByte: Class<WordLen__S7WLByte> & WordLen__S7WLByte & 2; // 2
    static +S7WLWord: Class<WordLen__S7WLWord> & WordLen__S7WLWord & 4; // 4
    static +S7WLDWord: Class<WordLen__S7WLDWord> & WordLen__S7WLDWord & 6; // 6
    static +S7WLReal: Class<WordLen__S7WLReal> & WordLen__S7WLReal & 8; // 8
    static +S7WLCounter: Class<WordLen__S7WLCounter> &
      WordLen__S7WLCounter &
      28; // 28
    static +S7WLTimer: Class<WordLen__S7WLTimer> & WordLen__S7WLTimer & 29; // 29
  }

  declare class WordLen__S7WLBit mixins WordLen {}
  declare class WordLen__S7WLByte mixins WordLen {}
  declare class WordLen__S7WLWord mixins WordLen {}
  declare class WordLen__S7WLDWord mixins WordLen {}
  declare class WordLen__S7WLReal mixins WordLen {}
  declare class WordLen__S7WLCounter mixins WordLen {}
  declare class WordLen__S7WLTimer mixins WordLen {}

  declare export class BlockType {
    constructor(...args: empty): mixed;
    static +Block_OB: Class<BlockType__Block_OB> & BlockType__Block_OB & 56; // 56
    static +Block_DB: Class<BlockType__Block_DB> & BlockType__Block_DB & 65; // 65
    static +Block_SDB: Class<BlockType__Block_SDB> & BlockType__Block_SDB & 66; // 66
    static +Block_FC: Class<BlockType__Block_FC> & BlockType__Block_FC & 67; // 67
    static +Block_SFC: Class<BlockType__Block_SFC> & BlockType__Block_SFC & 68; // 68
    static +Block_FB: Class<BlockType__Block_FB> & BlockType__Block_FB & 69; // 69
    static +Block_SFB: Class<BlockType__Block_SFB> & BlockType__Block_SFB & 70; // 70
  }

  declare class BlockType__Block_OB mixins BlockType {}
  declare class BlockType__Block_DB mixins BlockType {}
  declare class BlockType__Block_SDB mixins BlockType {}
  declare class BlockType__Block_FC mixins BlockType {}
  declare class BlockType__Block_SFC mixins BlockType {}
  declare class BlockType__Block_FB mixins BlockType {}
  declare class BlockType__Block_SFB mixins BlockType {}

  declare export class SubBlockType {
    constructor(...args: empty): mixed;
    static +SubBlk_OB: Class<SubBlockType__SubBlk_OB> &
      SubBlockType__SubBlk_OB &
      8; // 8
    static +SubBlk_DB: Class<SubBlockType__SubBlk_DB> &
      SubBlockType__SubBlk_DB &
      10; // 10
    static +SubBlk_SDB: Class<SubBlockType__SubBlk_SDB> &
      SubBlockType__SubBlk_SDB &
      11; // 11
    static +SubBlk_FC: Class<SubBlockType__SubBlk_FC> &
      SubBlockType__SubBlk_FC &
      12; // 12
    static +SubBlk_SFC: Class<SubBlockType__SubBlk_SFC> &
      SubBlockType__SubBlk_SFC &
      13; // 13
    static +SubBlk_FB: Class<SubBlockType__SubBlk_FB> &
      SubBlockType__SubBlk_FB &
      14; // 14
    static +SubBlk_SFB: Class<SubBlockType__SubBlk_SFB> &
      SubBlockType__SubBlk_SFB &
      15; // 15
  }

  declare class SubBlockType__SubBlk_OB mixins SubBlockType {}
  declare class SubBlockType__SubBlk_DB mixins SubBlockType {}
  declare class SubBlockType__SubBlk_SDB mixins SubBlockType {}
  declare class SubBlockType__SubBlk_FC mixins SubBlockType {}
  declare class SubBlockType__SubBlk_SFC mixins SubBlockType {}
  declare class SubBlockType__SubBlk_FB mixins SubBlockType {}
  declare class SubBlockType__SubBlk_SFB mixins SubBlockType {}

  declare export class LangType {
    constructor(...args: empty): mixed;
    static +BlockLangAWL: Class<LangType__BlockLangAWL> &
      LangType__BlockLangAWL &
      1; // 1
    static +BlockLangKOP: Class<LangType__BlockLangKOP> &
      LangType__BlockLangKOP &
      2; // 2
    static +BlockLangFUP: Class<LangType__BlockLangFUP> &
      LangType__BlockLangFUP &
      3; // 3
    static +BlockLangSCL: Class<LangType__BlockLangSCL> &
      LangType__BlockLangSCL &
      4; // 4
    static +BlockLangDB: Class<LangType__BlockLangDB> &
      LangType__BlockLangDB &
      5; // 5
    static +BlockLangGRAPH: Class<LangType__BlockLangGRAPH> &
      LangType__BlockLangGRAPH &
      6; // 6
  }

  declare class LangType__BlockLangAWL mixins LangType {}
  declare class LangType__BlockLangKOP mixins LangType {}
  declare class LangType__BlockLangFUP mixins LangType {}
  declare class LangType__BlockLangSCL mixins LangType {}
  declare class LangType__BlockLangDB mixins LangType {}
  declare class LangType__BlockLangGRAPH mixins LangType {}

  declare export class Status {
    constructor(...args: empty): mixed;
    static +S7CpuStatusUnknown: Class<Status__S7CpuStatusUnknown> &
      Status__S7CpuStatusUnknown &
      0; // 0
    static +S7CpuStatusRun: Class<Status__S7CpuStatusRun> &
      Status__S7CpuStatusRun &
      8; // 8
    static +S7CpuStatusStop: Class<Status__S7CpuStatusStop> &
      Status__S7CpuStatusStop &
      4; // 4
  }

  declare class Status__S7CpuStatusUnknown mixins Status {}
  declare class Status__S7CpuStatusRun mixins Status {}
  declare class Status__S7CpuStatusStop mixins Status {}

  declare interface MultiVarRead {
    Area: Area;
    WordLen: WordLen;
    DBNumber?: number;
    Start: number;
    Amount: number;
  }
  declare interface MultiVarWrite {
    Area: Area;
    WordLen: WordLen;
    DBNumber?: number;
    Start: number;
    Amount: number;
    Data: Buffer;
  }
  declare interface MultiVarsReadResult {
    Result: number;
    Data: Buffer;
  }
  declare interface MultiVarsWriteResult {
    Result: number;
  }
  declare interface S7Client_Static {
    new(): S7Client;
  }
  declare interface S7Client {
    /**
     * Connects the client to the PLC with the parameters specified in the previous call of ConnectTo() or SetConnectionParams().
     * - cb: The optional callback parameter will be executed after connection attempt
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    Connect(callback?: (err: any) => void): boolean;

    /**
     * Connects the client to the hardware at ip, rack, slot coordinates.
     * - ip: PLC/Equipment IPV4 Address ex. “192.168.1.12”
     * - rack: PLC Rack number
     * - slot: PLC Slot number
     * - cb: The optional callback parameter will be executed after connection attempt
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    ConnectTo(
      ip: string,
      rack: number,
      slot: number,
      callback?: (err: any) => void
    ): boolean;

    /**
     * Sets internally ip, localTSAP, remoteTSAP coordinates.
     * - ip PLC/Equipment IPv4 address ex. “192.168.1.12”
     * - localTSAP Local TSAP (PC TSAP)
     * - remoteTSAP Remote TSAP (PLC TSAP)
     * Returns true on success or false on error.
     */
    SetConnectionParams(ip: string, localTSAP: any, remoteTSAP: any): boolean;

    /**
     * Sets the connection resource type, i.e the way in which the Clients connects to a PLC.
     */
    SetConnectionType(connectionType: ConnectionType): void;

    /**
     * Disconnects “gracefully” the Client from the PLC.
     * Returns true on success or false on error.
     */
    Disconnect(): void;

    /**
     * Reads an internal Client object parameter.
     * Returns the parameter value on success or false on error.
     */
    GetParam(paramNumber: ParamNumber): any;

    /**
     * Sets an internal Client object parameter.
     * paramNumber One from the parameter list above
     * value New parameter value
     * Returns true on success or false on error.
     */
    SetParam(paramNumber: ParamNumber, value: any): boolean;

    /**
     * This is the main function to read data from a PLC. With it you can read DB, Inputs, Outputs, Merkers, Timers and Counters.
     * - area Area identifier (see table below)
     * - dbNumber DB number if area = S7AreaDB, otherwise ignored
     * - start Offset to start
     * - amount Amount of words to read
     * - wordLen Word size (see table below)
     * The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ReadArea(
      area: Area,
      dbNumber: number,
      start: number,
      amount: number,
      wordLen: WordLen,
      callback?: (err: any, data: Buffer) => void
    ): Buffer | boolean;

    /**
     * This is the main function to write data into a PLC.
     * - area Area identifier (see table below)
     * - dbNumber DB number if area = S7AreaDB, otherwise ignored
     * - start Offset to start
     * - amount Amount of words to read
     * - wordLen Word size (see table below)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    WriteArea(
      area: Area,
      dbNumber: number,
      start: number,
      amount: number,
      wordLen: WordLen,
      buffer: Buffer,
      callback?: (err: any) => void
    ): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC DB.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaDB and wordLen = s7client.S7WLByte.
     * - dbNumber DB number
     * - start Offset to start
     * - size Size to read (bytes)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    DBRead(
      dbNumber: number,
      start: number,
      size: number,
      callback?: (err: any, data: any) => void
    ): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC DB.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaDB and wordLen = s7client.S7WLByte.
     * - dbNumber DB number
     * - start Offset to start
     * - size Size to write (bytes)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    DBWrite(
      dbNumber: number,
      start: number,
      size: number,
      buffer: Buffer,
      callback?: (err: any) => void
    ): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC process outputs.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaPA and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to read (bytes)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ABRead(
      start: number,
      size: number,
      callback?: (err: any, data: Buffer) => void
    ): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC process outputs.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaPA and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to write (bytes)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    ABWrite(
      start: number,
      size: number,
      buffer: Buffer,
      callback?: (err: any) => void
    ): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC process inputs.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaPE and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to read (bytes)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    EBRead(
      start: number,
      size: number,
      callback?: (err: any, data: Buffer) => void
    ): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC process inputs.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaPE and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to write (bytes)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    EBWrite(
      start: number,
      size: number,
      buffer: Buffer,
      callback?: (err: any) => void
    ): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC Merkers.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaMK and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to read (bytes)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    MBRead(
      start: number,
      size: number,
      callback?: (err: any, data: Buffer) => void
    ): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC Merkers.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaMK and wordLen = s7client.S7WLByte.
     * - start Offset to start
     * - size Size to write (bytes)
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    MBWrite(
      start: number,
      size: number,
      buffer: Buffer,
      callback?: (err: any) => void
    ): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC Timers.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaTM and wordLen = S7Client.S7WLTimer.
     * - start Offset to start
     * - amount Number of timers
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    TMRead(
      start: number,
      size: number,
      callback?: (err: any, data: Buffer) => void
    ): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC Timers.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaTM and wordLen = S7Client.S7WLTimer.
     * - start Offset to start
     * - amount Number of timers
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    TMWrite(
      start: number,
      size: number,
      buffer: Buffer,
      callback?: (err: any) => void
    ): boolean;

    /**
     * This is a lean function of ReadArea() to read PLC Counters.
     * It simply internally calls ReadArea() with area = S7Client.S7AreaCT and wordLen = S7Client.S7WLCounter.
     * - start Offset to start
     * - amount Number of counters
     * -  The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns a buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    CTRead(
      start: number,
      size: number,
      callback?: (err: any, data: Buffer) => void
    ): Buffer | boolean;

    /**
     * This is a lean function of WriteArea() to write PLC Counters.
     * It simply internally calls WriteArea() with area = S7Client.S7AreaCT and wordLen = S7Client.S7WLCounter.
     * - start Offset to start
     * - amount Number of counters
     * - buffer User buffer
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    CTWrite(
      start: number,
      size: number,
      buffer: Buffer,
      callback?: (err: any) => void
    ): boolean;

    /**
     * This is function allows to read different kind of variables from a PLC in a single call. With it you can read DB,
     * Inputs, Outputs, Merkers, Timers and Counters.
     * - multiVars Array of objects with read information (see structure below)
     * - The optional callback parameter will be executed after read
     * If callback is not set the function is blocking and returns an array on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ReadMultiVars(
      multiVars: MultiVarRead[],
      callback?: (err: any, data: MultiVarsReadResult[]) => void
    ): MultiVarsReadResult[] | boolean;

    /**
     * This is function allows to write different kind of variables into a PLC in a single call. With it you can write DB,
     * Inputs, Outputs, Merkers, Timers and Counters.
     * - multiVars Array of objects with write information (see structure below)
     * - The optional callback parameter will be executed after write
     * If callback is not set the function is blocking and returns an array on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    WriteMultiVars(
      multiVars: MultiVarWrite[],
      callback?: (err: any, data: MultiVarsWriteResult[]) => void
    ): MultiVarsWriteResult[] | boolean;

    /**
     * This function returns an object of the AG blocks amount divided by type.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object (see below) on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ListBlocks(callback?: (err: any, data: Object) => void): Object | boolean;

    /**
     * This function returns an array of the AG list of a specified block type.
     * - blockType Type of block (see table below)
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an array on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ListBlocksOfType(
      blockType: BlockType,
      callback?: (err: any, data: any) => void
    ): any | boolean;

    /**
     * Returns an object with detailed information about a given AG block. This function is very useful if you need to read or write
     * data in a DB which you do not know the size in advance (see MC7Size field)
     * - blockType Type of block (see table above)
     * - blockNum Number of block
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object (see below) on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetAgBlockInfo(
      blockType: BlockType,
      blockNum: number,
      callback?: (err: any, data: any) => void
    ): any | boolean;

    /**
     * Returns detailed information about a block present in a user buffer. This function is usually used in conjunction with FullUpload().
     * An uploaded block saved to disk, could be loaded in a user buffer and checked with this function.
     * - buffer User buffer
     * Returns an object (see example above) on success or false on error.
     */
    GetPgBlockInfo(buffer: Buffer): Object | boolean;

    /**
     * Uploads a block from AG. The whole block (including header and footer) is copied into the user buffer.
     * - blockType Type of block (see table above)
     * - blockNum Number of block
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a Buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    FullUpload(
      blockType: BlockType,
      blockNum: number,
      callback?: (err: any, data: Object) => void
    ): Object | boolean;

    /**
     * Uploads a block body from AG. Only the block body (but header and footer) is copied into the user buffer.
     * - blockType Type of block (see table above)
     * - blockNum Number of block
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a Buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    Upload(
      blockType: BlockType,
      blockNum: number,
      callback?: (err: any, data: Object) => void
    ): Object | boolean;

    /**
     * Downloads a block into AG. A whole block (including header and footer) must be available into the user buffer.
     * - blockNum Number of block
     * - buffer User buffer
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     * If the parameter blockNum is -1, the block number is not changed else the block is downloaded with the provided number (just like a “Download As…”).
     */
    Download(
      blockNum: number,
      buffer: Buffer,
      callback?: (err: any) => void
    ): boolean;

    /**
     * Deletes a block into AG.
     * !!! There is no undo function available !!!
     * - blockType Type of block (see table above)
     * - blockNum Number of block
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    Delete(
      blockType: BlockType,
      blockNum: number,
      callback?: (err: any) => void
    ): boolean;

    /**
     * Uploads a DB from AG. This function is equivalent to Upload() with BlockType = Block_DB but it uses a different approach
     * so it’s not subject to the security level set.
     * Only data is uploaded.
     * - dbNumber DB number
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a Buffer object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     * This function first gathers the DB size via GetAgBlockInfo() then calls DBRead().
     */
    DBGet(
      dbNumber: number,
      callback?: (err: any, data: Buffer) => void
    ): Buffer | boolean;

    /**
     * Fills a DB in AG with a given byte without the need of specifying its size.
     * - dbNumber DB number
     * - fillChar char or char code
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    DBFill(
      dbNumber: number,
      fillChar: string,
      callback?: (err: any) => void
    ): boolean;

    /**
     * Reads PLC date and time.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a javascript Date() object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetPlcDateTime(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Sets the PLC date and time.
     * - dateTime
     * - The optional callback parameter will be executed after completion
     * The dateTime argument can be a javascript Date() object or an object with the structure below.
     * {
     *    "year": 2015,  // year
     *    "month": 4,    // months since January     0-11
     *    "day": 3,      // day of the month         1-31
     *    "hours": 19,   // hours since midnight     0-23
     *    "minutes": 37, // minutes after the hour   0-59
     *    "seconds": 0   // seconds after the minute 0-59
     * }
     * If callback is not set the function is blocking and returns a true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    SetPlcDateTime(dateTime: Date, callback?: (err: any) => void): boolean;

    /**
     * Sets the PLC date and time in accord to the PC system Date/Time.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    SetPlcSystemDateTime(callback?: (err: any) => void): boolean;

    /**
     * Reads a partial list of given idand index.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns a buffer on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ReadSZL(
      id: number,
      index: number,
      callback?: (err: any, data: any) => void
    ): Buffer | boolean;

    /**
     * Reads the directory of the partial lists.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an array on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    ReadSZLList(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Gets CPU order code and version info.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetOrderCode(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Gets CPU module name, serial number and other info.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetCpuInfo(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Gets CP (communication processor) info.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns an object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetCpInfo(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Puts the CPU in RUN mode performing an HOT START.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    PlcHotStart(callback?: (err: any) => void): boolean;

    /**
     * Puts the CPU in RUN mode performing a COLD START.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    PlcColdStart(callback?: (err: any) => void): boolean;

    /**
     * Puts the CPU in STOP mode.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    PlcStop(callback?: (err: any) => void): boolean;

    /**
     * Performs the Copy Ram to Rom action.
     * - timeout Maximum time expected to complete the operation (ms)
     * - The optional callback parameter will be executed after completion or on timeout
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     * Not all CPUs support this operation. The CPU must be in STOP mode.
     */
    CopyRamToRom(timeout: number, callback?: (err: any) => void): boolean;

    /**
     * Performs the Memory compress action.
     * - timeout Maximum time expected to complete the operation (ms)
     * - The optional callback parameter will be executed after completion or on timeout
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    Compress(timeout: number, callback?: (err: any) => void): boolean;

    /**
     * Send the password to the PLC to meet its security level.
     * - password Password
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     * A password accepted by a PLC is an 8 chars string, a longer password will be trimmed, and a shorter one will be "right space padded".
     */
    SetSessionPassword(
      password: string,
      callback?: (err: any) => void
    ): boolean;

    /**
     * Clears the password set for the current session (logout).
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns true on success or false on error.
     * If callback is set the function is non-blocking and an error argument is given to the callback.
     */
    ClearSessionPassword(callback?: (err: any) => void): boolean;

    /**
     * Gets the CPU protection level info.
     * - The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns the protection object on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    GetProtection(callback?: (err: any, data: any) => void): any | boolean;

    /**
     * Returns the last job execution time in milliseconds or false on error.
     */
    ExecTime(): number | boolean;

    /**
     * Returns the last job result.
     */
    LastError(): any;

    /**
     * Returns the PDU length requested by the client or false on error. The requested PDU length can be modified with SetParam().
     */
    PduRequested(): number | boolean;

    /**
     * Returns the PDU length negotiated between the client and the PLC during the connection or false on error.
     * It’s useful to know the PDU negotiated when we need to call ReadMultivar() or WriteMultiVar().
     * All other data transfer functions handle this information by themselves and split the telegrams automatically if needed.
     */
    PduLength(): number | boolean;

    /**
     * Returns the CPU status (running/stopped).
     * The optional callback parameter will be executed after completion
     * If callback is not set the function is blocking and returns the CPU status on success or false on error.
     * If callback is set the function is non-blocking and an error and result argument is given to the callback.
     */
    PlcStatus(callback?: (err: any, data: Status) => void): Status | boolean;

    /**
     * Returns the connection status.
     */
    Connected(): any;

    /**
     * Returns a textual explanation of a given error number.
     * - errNum Error number
     */
    ErrorText(err: number): string;
  }
  declare export var S7Client: S7Client_Static;
}
