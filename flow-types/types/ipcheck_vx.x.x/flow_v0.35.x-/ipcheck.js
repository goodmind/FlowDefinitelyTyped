declare module 'ipcheck' {
        declare var ipcheck: ipcheck$ipcheck$IPCheckStatic;
	declare module.exports: typeof ipcheck

	declare interface ipcheck$IPCheck {
address: number[],
input: string,
ipv: 4 | 6 | 0,
mask: number,
valid: boolean,
match(cidr: ipcheck$IPCheck | string): boolean
} 

declare interface ipcheck$IPCheckConstructor {
new (input: string): ipcheck$IPCheck
} 

declare type ipcheck$IPCheckStatic = {
match(ip: ipcheck$IPCheck | string, cidr: ipcheck$IPCheck | string): boolean
} & ipcheck$IPCheckConstructor

    }
