declare module "ethereum-protocol" {
  import typeof BigNumber from "bignumber.js";

  declare export type JSONRPCErrorCallback = (
    err: Error | null,
    result?: JSONRPCResponsePayload
  ) => void;

  /**
   * Do not create your own provider. Use an existing provider from a Web3 or ProviderEngine library
   * Read more about Providers in the 0x wiki.
   */
  declare export interface Provider {
    sendAsync(
      payload: JSONRPCRequestPayload,
      callback: JSONRPCErrorCallback
    ): void;
  }
  declare export type ContractAbi = AbiDefinition[];
  declare export type AbiDefinition = FunctionAbi | EventAbi;
  declare export type FunctionAbi = MethodAbi | ConstructorAbi | FallbackAbi;
  declare export type ConstructorStateMutability = "nonpayable" | "payable";
  declare export type StateMutability =
    | "pure"
    | "view"
    | ConstructorStateMutability;
  declare export class AbiType {
    constructor(...args: empty): mixed;
    static +Function: Class<AbiType__Function> & AbiType__Function & "function"; // "function"
    static +Constructor: Class<AbiType__Constructor> &
      AbiType__Constructor &
      "constructor"; // "constructor"
    static +Event: Class<AbiType__Event> & AbiType__Event & "event"; // "event"
    static +Fallback: Class<AbiType__Fallback> & AbiType__Fallback & "fallback"; // "fallback"
  }

  declare class AbiType__Function mixins AbiType {}
  declare class AbiType__Constructor mixins AbiType {}
  declare class AbiType__Event mixins AbiType {}
  declare class AbiType__Fallback mixins AbiType {}

  declare export interface MethodAbi {
    type: AbiType.Function;
    name: string;
    inputs: DataItem[];
    outputs: DataItem[];
    constant: boolean;
    stateMutability: StateMutability;
    payable: boolean;
  }
  declare export interface ConstructorAbi {
    type: AbiType.Constructor;
    inputs: DataItem[];
    payable: boolean;
    stateMutability: ConstructorStateMutability;
  }
  declare export interface FallbackAbi {
    type: AbiType.Fallback;
    payable: boolean;
  }
  declare export type EventParameter = {
    indexed: boolean
  } & DataItem;

  declare export interface EventAbi {
    type: AbiType.Event;
    name: string;
    inputs: EventParameter[];
    anonymous: boolean;
  }
  declare export interface DataItem {
    name: string;
    type: string;
    components?: DataItem[];
  }
  declare export class OpCode {
    constructor(...args: empty): mixed;
    static +DelegateCall: Class<OpCode__DelegateCall> &
      OpCode__DelegateCall &
      "DELEGATECALL"; // "DELEGATECALL"
    static +Revert: Class<OpCode__Revert> & OpCode__Revert & "REVERT"; // "REVERT"
    static +Create: Class<OpCode__Create> & OpCode__Create & "CREATE"; // "CREATE"
    static +Stop: Class<OpCode__Stop> & OpCode__Stop & "STOP"; // "STOP"
    static +Invalid: Class<OpCode__Invalid> & OpCode__Invalid & "INVALID"; // "INVALID"
    static +CallCode: Class<OpCode__CallCode> & OpCode__CallCode & "CALLCODE"; // "CALLCODE"
    static +StaticCall: Class<OpCode__StaticCall> &
      OpCode__StaticCall &
      "STATICCALL"; // "STATICCALL"
    static +Return: Class<OpCode__Return> & OpCode__Return & "RETURN"; // "RETURN"
    static +Call: Class<OpCode__Call> & OpCode__Call & "CALL"; // "CALL"
    static +SelfDestruct: Class<OpCode__SelfDestruct> &
      OpCode__SelfDestruct &
      "SELFDESTRUCT"; // "SELFDESTRUCT"
  }

  declare class OpCode__DelegateCall mixins OpCode {}
  declare class OpCode__Revert mixins OpCode {}
  declare class OpCode__Create mixins OpCode {}
  declare class OpCode__Stop mixins OpCode {}
  declare class OpCode__Invalid mixins OpCode {}
  declare class OpCode__CallCode mixins OpCode {}
  declare class OpCode__StaticCall mixins OpCode {}
  declare class OpCode__Return mixins OpCode {}
  declare class OpCode__Call mixins OpCode {}
  declare class OpCode__SelfDestruct mixins OpCode {}

  declare export interface StructLog {
    depth: number;
    error: string;
    gas: number;
    gasCost: number;
    memory: string[];
    op: OpCode;
    pc: number;
    stack: string[];
    storage: {
      [location: string]: string
    };
  }
  declare export interface TransactionTrace {
    gas: number;
    returnValue: any;
    structLogs: StructLog[];
  }
  declare export type Unit =
    | "kwei"
    | "ada"
    | "mwei"
    | "babbage"
    | "gwei"
    | "shannon"
    | "szabo"
    | "finney"
    | "ether"
    | "kether"
    | "grand"
    | "einstein"
    | "mether"
    | "gether"
    | "tether";
  declare export interface JSONRPCRequestPayload {
    params: any[];
    method: string;
    id: number;
    jsonrpc: string;
  }
  declare export interface JSONRPCResponsePayload {
    result: any;
    id: number;
    jsonrpc: string;
  }
  declare export interface AbstractBlock {
    number: number | null;
    hash: string | null;
    parentHash: string;
    nonce: string | null;
    sha3Uncles: string;
    logsBloom: string | null;
    transactionsRoot: string;
    stateRoot: string;
    miner: string;
    difficulty: BigNumber;
    totalDifficulty: BigNumber;
    extraData: string;
    size: number;
    gasLimit: number;
    gasUsed: number;
    timestamp: number;
    uncles: string[];
  }
  declare export type BlockWithoutTransactionData = {
    transactions: string[]
  } & AbstractBlock;

  declare export type BlockWithTransactionData = {
    transactions: Transaction[]
  } & AbstractBlock;

  declare export interface Transaction {
    hash: string;
    nonce: number;
    blockHash: string | null;
    blockNumber: number | null;
    transactionIndex: number | null;
    from: string;
    to: string | null;
    value: BigNumber;
    gasPrice: BigNumber;
    gas: number;
    input: string;
  }
  declare export interface CallTxDataBase {
    to?: string;
    value?: number | string | BigNumber;
    gas?: number | string | BigNumber;
    gasPrice?: number | string | BigNumber;
    data?: string;
    nonce?: number;
  }
  declare export type TxData = {
    from: string
  } & CallTxDataBase;

  declare export type CallData = {
    from?: string
  } & CallTxDataBase;

  declare export interface FilterObject {
    fromBlock?: number | string;
    toBlock?: number | string;
    address?: string;
    topics?: LogTopic[];
  }
  declare export type LogTopic = null | string | string[];
  declare export type DecodedLogEntry<A> = {
    event: string,
    args: A
  } & LogEntry;

  declare export type DecodedLogEntryEvent<A> = {
    removed: boolean
  } & DecodedLogEntry<A>;

  declare export type LogEntryEvent = {
    removed: boolean
  } & LogEntry;

  declare export interface LogEntry {
    logIndex: number | null;
    transactionIndex: number | null;
    transactionHash: string;
    blockHash: string | null;
    blockNumber: number | null;
    address: string;
    data: string;
    topics: string[];
  }
  declare export type TxDataPayable = {
    value?: BigNumber
  } & TxData;

  declare export interface TransactionReceipt {
    blockHash: string;
    blockNumber: number;
    transactionHash: string;
    transactionIndex: number;
    from: string;
    to: string;
    status: null | string | 0 | 1;
    cumulativeGasUsed: number;
    gasUsed: number;
    contractAddress: string | null;
    logs: LogEntry[];
  }
  declare export type ContractEventArg = string | BigNumber | number | boolean;
  declare export interface DecodedLogArgs {
    [argName: string]: ContractEventArg;
  }
  declare export type LogWithDecodedArgs<
    ArgsType: DecodedLogArgs
  > = {} & DecodedLogEntry<ArgsType>;

  declare export type RawLog = LogEntry;
  declare export class BlockParamLiteral {
    constructor(...args: empty): mixed;
    static +Earliest: Class<BlockParamLiteral__Earliest> &
      BlockParamLiteral__Earliest &
      "earliest"; // "earliest"
    static +Latest: Class<BlockParamLiteral__Latest> &
      BlockParamLiteral__Latest &
      "latest"; // "latest"
    static +Pending: Class<BlockParamLiteral__Pending> &
      BlockParamLiteral__Pending &
      "pending"; // "pending"
  }

  declare class BlockParamLiteral__Earliest mixins BlockParamLiteral {}
  declare class BlockParamLiteral__Latest mixins BlockParamLiteral {}
  declare class BlockParamLiteral__Pending mixins BlockParamLiteral {}

  declare export type BlockParam = BlockParamLiteral | number;
  declare export interface RawLogEntry {
    logIndex: string | null;
    transactionIndex: string | null;
    transactionHash: string;
    blockHash: string | null;
    blockNumber: string | null;
    address: string;
    data: string;
    topics: string[];
  }
  declare export class SolidityTypes {
    constructor(...args: empty): mixed;
    static +Address: Class<SolidityTypes__Address> &
      SolidityTypes__Address &
      "address"; // "address"
    static +Uint256: Class<SolidityTypes__Uint256> &
      SolidityTypes__Uint256 &
      "uint256"; // "uint256"
    static +Uint8: Class<SolidityTypes__Uint8> & SolidityTypes__Uint8 & "uint8"; // "uint8"
    static +Uint: Class<SolidityTypes__Uint> & SolidityTypes__Uint & "uint"; // "uint"
  }

  declare class SolidityTypes__Address mixins SolidityTypes {}
  declare class SolidityTypes__Uint256 mixins SolidityTypes {}
  declare class SolidityTypes__Uint8 mixins SolidityTypes {}
  declare class SolidityTypes__Uint mixins SolidityTypes {}

  /**
   * Contains the logs returned by a TransactionReceipt. We attempt to decode the
   * logs using AbiDecoder. If we have the logs corresponding ABI, we decode it,
   * otherwise we don't.
   */
  declare export type TransactionReceiptWithDecodedLogs = {
    logs: Array<LogWithDecodedArgs<DecodedLogArgs> | LogEntry>
  } & TransactionReceipt;

  declare export interface TraceParams {
    disableMemory?: boolean;
    disableStack?: boolean;
    disableStorage?: boolean;
  }
}
