declare module 'swe-validation' {
        declare interface cin {
isValid: boolean,
corporation: {
type: string,
id: string
}
} 
	declare interface ssn {
isValid: boolean,
person?: {
type: string,
sex: string,
ssn: string
}
} 
	declare var validate: {
ssn(number: number): ssn,
cin(number: number): cin
};
	declare module.exports: typeof validate

    }
