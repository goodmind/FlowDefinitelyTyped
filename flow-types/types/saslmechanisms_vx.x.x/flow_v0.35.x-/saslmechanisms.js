declare module 'saslmechanisms' {
        declare module.exports: typeof Factory

	declare class Factory  {
static Factory: typeof Factory;
use(name: string, mechanism: Factory$Factory$MechanismStatic): this;
use(mechanism: Factory$Factory$MechanismStatic): this;
create(mechanisms: string[]): Factory$Factory$Mechanism | null
}
	declare interface Factory$MechanismStatic {
new (): Factory$Mechanism,
prototype: {
[key: string]: any,
name: string
}
} 

declare interface Factory$Mechanism {
name: string,
response(cred: {
[key: string]: any
}): string,
challenge(chal: string): void
} 
    }
