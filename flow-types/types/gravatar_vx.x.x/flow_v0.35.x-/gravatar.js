declare module 'gravatar' {
        
      declare var npm$namespace$GravatarModule: {
        url: typeof GravatarModule$url,
        
      }
declare type GravatarModule$Options = {
d?: string,
default?: string,
f?: string,
forcedefault?: string,
r?: string,
rating?: string,
s?: string,
size?: string
};

declare function GravatarModule$url(
email: string,
options?: GravatarModule$Options,
forceProtocol?: boolean): string

	declare module.exports: typeof GravatarModule

    }
