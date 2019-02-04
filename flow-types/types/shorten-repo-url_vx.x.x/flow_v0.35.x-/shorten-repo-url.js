declare module 'shorten-repo-url' {
        declare module.exports: typeof shortenRepoUrl

	declare function shortenRepoUrl(url: string, currentUrl?: string): string

	
      declare var npm$namespace$shortenRepoUrl: {
        applyToLink: typeof shortenRepoUrl$applyToLink,
        
      }
declare function shortenRepoUrl$applyToLink(link: HTMLAnchorElement, currentUrl?: string): boolean

    }
