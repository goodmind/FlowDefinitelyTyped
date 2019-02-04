declare module 'parse-passwd' {
        declare module.exports: typeof parsePasswd

	declare function parsePasswd(passwdText: string): parsePasswd$parsePasswd$PasswdEntry[]

	declare interface parsePasswd$PasswdEntry {
username: string,
password: string,
uid: string,
gid: string,
gecos: string,
homedir: string,
shell: string
} 
    }
