declare module 'milkcocoa' {
        declare class milkcocoa$MilkCocoa  {
constructor(host: string, callback?: Function): this;
dataStore(path: string): milkcocoa$DataStore;
addAccount(
email: string,
password: string,
options?: {},
callback?: (err: milkcocoa$MilkCocoa.Error.Error$AddAccount, user: milkcocoa$User) => void): void;
login(
email: string,
password: string,
callback: (err: milkcocoa$MilkCocoa.Error.Error$Login, user: milkcocoa$User) => void): void;
logout(callback?: (err: string) => void): void;
getCurrentUser(
callback: (
err: milkcocoa$MilkCocoa.Error.Error$GetCurrentUser,
user: {
id: string
}) => void): void
}

declare  class Error$AddAccount {
  constructor(...args: empty): mixed;
static +FormatError: Class<Error$AddAccount__FormatError> & Error$AddAccount__FormatError & 0;// 0
static +AlreadyExist: Class<Error$AddAccount__AlreadyExist> & Error$AddAccount__AlreadyExist & 1;// 1

}

declare class Error$AddAccount__FormatError mixins Error$AddAccount {}
declare class Error$AddAccount__AlreadyExist mixins Error$AddAccount {}


declare  class Error$Login {
  constructor(...args: empty): mixed;
static +FormatError: Class<Error$Login__FormatError> & Error$Login__FormatError & 0;// 0
static +LoginError: Class<Error$Login__LoginError> & Error$Login__LoginError & 1;// 1
static +EmailNotVerificated: Class<Error$Login__EmailNotVerificated> & Error$Login__EmailNotVerificated & 2;// 2

}

declare class Error$Login__FormatError mixins Error$Login {}
declare class Error$Login__LoginError mixins Error$Login {}
declare class Error$Login__EmailNotVerificated mixins Error$Login {}


declare  class Error$GetCurrentUser {
  constructor(...args: empty): mixed;
static +NotLoggedIn: Class<Error$GetCurrentUser__NotLoggedIn> & Error$GetCurrentUser__NotLoggedIn & 0;// 0

}

declare class Error$GetCurrentUser__NotLoggedIn mixins Error$GetCurrentUser {}


declare interface milkcocoa$DataStore {
push(object: {}, callback?: (data: milkcocoa$DataStoreCallbackData) => void): void,
set(id: string, data: {}): void,
remove(id: string): void,
send(object: {}): void,
on(event: string, callback: (data: milkcocoa$DataStoreCallbackData) => void): void,
off(event: string): void,
get(id: string, callback: (data: {}) => void): void,
query(condition?: {}): milkcocoa$Query,
child(path: string): milkcocoa$DataStore,
parent(): milkcocoa$DataStore,
root(): milkcocoa$DataStore
} 

declare interface milkcocoa$DataStoreCallbackData {
err: string,
path: string,
id: string,
value: any
} 

declare interface milkcocoa$Query {
done(callback: (data: any) => void): void,
limit(number: number): milkcocoa$Query,
skip(index: number): milkcocoa$Query,
sort(mode: string): milkcocoa$Query
} 

declare interface milkcocoa$User {
id: string,
email: string,
option: {}
} 
    }
