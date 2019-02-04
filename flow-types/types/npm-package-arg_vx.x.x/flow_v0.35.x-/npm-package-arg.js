declare module 'npm-package-arg' {
        
/**
 * Throws if the package name is invalid, a dist-tag is invalid or a URL's protocol is not supported.
 * @param arg a string that you might pass to npm install, like:
foo
 * @ 1.2,
 * @bar /foo
 * @ 1.2, foo
 * @user /foo, http://x.com/foo.tgz, git+https://github.com/user/foo, bitbucket:user/foo, foo.tar.gz, ../foo/bar/ or bar.
If the arg you provide doesn't have a specifier part, eg foo then the specifier will default to latest.
 * @param where Optionally the path to resolve file paths relative to. Defaults to process.cwd()
 */
declare function npa(arg: string, where?: string): npa$npa$Result

	
      declare var npm$namespace$npa: {
        resolve: typeof npa$resolve,
        
      }

/**
 * Throws if the package name is invalid, a dist-tag is invalid or a URL's protocol is not supported.
 * @param name The name of the module you want to install. For example: foo or
 * @bar /foo.
 * @param spec The specifier indicating where and how you can get this module.
Something like: 1.2, ^1.7.17, http://x.com/foo.tgz, git+https://github.com/user/foo, bitbucket:user/foo, file:foo.tar.gz or file:../foo/bar/. If not included then the default is latest.
 * @param where Optionally the path to resolve file paths relative to. Defaults to process.cwd()
 */
declare function npa$resolve(
name: string,
spec: string,
where?: string): npa$FileResult
| npa$HostedGitResult
| npa$URLResult
| npa$AliasResult
| npa$RegistryResult


declare class npa$Result  {

/**
 * One of the following strings:
 * * git - A git repo
 * * tag - A tagged version, like "foo@latest"
 * * version - A specific version number, like "foo@1.2.3"
 * * range - A version range, like "foo@2.x"
 * * file - A local .tar.gz, .tar or .tgz file.
 * * directory - A local directory.
 * * remote - An http url (presumably to a tgz)
 */
type: "git"
| "tag"
| "version"
| "range"
| "file"
| "directory"
| "remote"
| "alias";

/**
 * If true this specifier refers to a resource hosted on a registry. This is true for tag, version and range types.
 */
registry: boolean;

/**
 * If known, the name field expected in the resulting pkg.
 */
name: string | null;

/**
 * If a name is something like @org/module then the scope field will be set to @org. If it doesn't have a scoped name, then scope is null.
 */
scope: string | null;

/**
 * A version of name escaped to match the npm scoped packages specification. Mostly used when making requests against a registry. When name is null, escapedName will also be null.
 */
escapedName: string | null;

/**
 * The specifier part that was parsed out in calls to npa(arg), or the value of spec in calls to `npa.resolve(name, spec). *
 */
rawSpec: string;

/**
 * The normalized specifier, for saving to package.json files. null for registry dependencies.
 */
saveSpec: string | null;

/**
 * The version of the specifier to be used to fetch this resource. null for shortcuts to hosted git dependencies as there isn't just one URL to try with them.
 */
fetchSpec: string | null;

/**
 * If set, this is a semver specifier to match against git tags with
 */
gitRange: string;

/**
 * If set, this is the specific committish to use with a git dependency.
 */
gitCommittish: string;

/**
 * If from === 'hosted' then this will be a hosted-git-info object. This property is not included when serializing the object as JSON.
 */
hosted: npa$HostedGit;

/**
 * The original un-modified string that was provided. If called as npa.resolve(name, spec) then this will be name + '@' + spec.
 */
raw: string
}

declare type npa$FileResult = {
type: "file" | "directory",
where: string,
saveSpec: string,
fetchSpec: null | string
} & npa$Result


declare type npa$HostedGitResult = {
type: "git",
hosted: npa$HostedGit,
saveSpec: string,
fetchSpec: null | string,
gitRange: void | string,
gitCommittish: void | string
} & npa$Result


declare type npa$URLResult = {
saveSpec: string,
type: "git" | "remote",
fetchSpec: string,
gitCommittish: string | void,
gitRange: string | void
} & npa$Result


declare type npa$AliasResult = {
subSpec: npa$Result,
registry: true,
type: "alias",
saveSpec: null,
fetchSpec: null
} & npa$Result


declare type npa$RegistryResult = {
registry: true,
type: "version" | "range" | "tag",
saveSpec: null,
fetchSpec: string
} & npa$Result


declare interface npa$HostedGit {
type: string,
domain: string,
user: string,
project: string
} 
	declare module.exports: typeof npa

    }
