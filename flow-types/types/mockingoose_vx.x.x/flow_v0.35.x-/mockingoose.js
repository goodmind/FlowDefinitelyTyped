declare module 'mockingoose' {
        declare type Op = "find"
| "findOne"
| "count"
| "countDocuments"
| "estimatedDocumentCount"
| "distinct"
| "findOneAndUpdate"
| "findOneAndRemove"
| "remove"
| "update"
| "deleteOne"
| "deleteMany"
| "save";
	declare class Mock  {
toReturn(expected: any, op?: Op): this;
reset(op: Op): this;
toJSON(): any
}
	declare interface Target {
__mocks: any,
resetAll(): void,
toJSON(): any
} 
	declare type Proxy = Target & {
[index: string]: Mock
};
	declare var mockingoose: Proxy;
	declare export default typeof mockingoose

    }
