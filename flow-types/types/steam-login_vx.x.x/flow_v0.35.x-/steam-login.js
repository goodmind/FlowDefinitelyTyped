declare module 'steam-login' {
        import type {
          Request,RequestHandler
        } from 'express';

	declare export interface MiddlewareOptions {
verify: string,
realm: string,
apiKey: string,
useSession?: boolean
} 
	declare export interface SteamUser {
_json: {
steamid: string,
personaname: string,
profileurl: string,
avatar: string,
avatarmedium: string,
avatarfull: string,
personastate: number,
communityvisibilitystate: number,
profilestate?: number,
lastlogoff: number,
commentpermission?: number,
realname?: string,
primaryclanid?: string,
timecreated?: number,
gameid?: string,
gameserverip?: string,
gameextrainfo?: string,
loccountrycode?: string,
locstatecode?: string,
loccityid?: number
},
steamid: string,
username: string,
name: string,
profile: string,
avatar: {
small: string,
medium: string,
large: string
}
} 
	declare export type SteamRequest = {
logout(): (req: Request) => () => void,
user?: SteamUser
} & Request

	declare export function middleware(opts: MiddlewareOptions): RequestHandler

	declare export function enforceLogin(redirect: string): RequestHandler

	declare export function verify(): RequestHandler

	declare export function authenticate(): RequestHandler

    }
