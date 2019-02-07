declare module 'promised-ldap' {
        import type {
          EventEmitter
        } from 'events';

	import typeof * as ldap from 'ldapjs';

	declare class Client mixins EventEmitter {
constructor({url}: {
url: string
}): this;
search(
base: string,
options: ldap.Client$SearchOptions,
controls?: ldap.Control | ldap.Control[]): Promise<{
entries: any[],
references: any[]
}>;
authenticate(base: string, dn: string, password: string): Promise<any>;
authenticateUser(
base: string,
dn: string,
password: string): Promise<{
name: string,
email: string,
groups: string[]
} | null>;
bind(
dn: string,
password: string,
controls?: ldap.Control | ldap.Control[]): Promise<any>;
add(
name: string,
entry: {[key: string]: any},
controls?: ldap.Control | ldap.Control[]): Promise<any>;
compare(
name: string,
attr: string,
value: string,
controls?: ldap.Control | ldap.Control[]): Promise<boolean>;
del(name: string, controls?: ldap.Control | ldap.Control[]): Promise<any>;
exop(
name: string,
value: string,
controls?: ldap.Control | ldap.Control[]): Promise<any>;
modify(
name: string,
change: ldap.Change | ldap.Change[],
controls?: ldap.Control | ldap.Control[]): Promise<any>;
modifyDN(
name: string,
newName: string,
controls?: ldap.Control | ldap.Control[]): Promise<any>;
_search(
base: string,
options: ldap.Client$SearchOptions,
controls?: ldap.Control | ldap.Control[],
_bypass?: boolean): Promise<EventEmitter>;
_search(
base: string,
options: ldap.Client$SearchOptions,
_bypass: boolean): Promise<EventEmitter>;
starttls(
options: {[key: string]: any},
controls: ldap.Control | ldap.Control[],
_bypass?: boolean): Promise<any>;
unbind(): Promise<void>;
destroy(err?: any): void
}
	declare type Client$SearchOptions = ldap.Client$SearchOptions;
	declare module.exports: typeof Client

    }
