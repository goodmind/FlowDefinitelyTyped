declare module 'github-url-to-object' {
        declare interface gh$Options {
enterprise?: boolean
} 

declare interface gh$Result {
user: string,
repo: string,
branch: string,
https_url: string,
tarball_url: string,
clone_url: string,
travis_url: string,
api_url: string,
zip_url: string
} 
	declare function gh(url: string | {
url: string
}, options?: gh$gh$Options): gh$gh$Result | null

	declare module.exports: typeof gh

    }
