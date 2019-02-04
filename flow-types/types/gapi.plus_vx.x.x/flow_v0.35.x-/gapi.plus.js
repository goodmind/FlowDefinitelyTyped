declare module 'gapi.plus' {
        
      declare var npm$namespace$people: {
        get: typeof people$get,
search: typeof people$search,
        
      }
declare interface people$GetParameters {
userId: string
} 

declare function people$get(parameters: people$GetParameters): HttpRequest<people$Person>


declare interface people$SearchParameters {
query: string,
language?: string,
maxResults?: number,
pageToken?: string
} 

declare function people$search(parameters: people$SearchParameters): HttpRequest<people$PeopleFeed>


declare interface people$PeopleFeed {
kind: "plus#peopleFeed",
etag: string,
selfLink: string,
title: string,
nextPageToken: string,
totalItems: number,
items: people$Person[]
} 

declare interface people$Person {
kind: "plus#person",
etag: string,
nickname: string,
occupation: string,
skills: string,
birthday: string,
gender: string,
emails: {
value: string,
type: string
}[],
urls: {
value: string,
type: string,
label: string
}[],
objectType: string,
id: string,
displayName: string,
name: {
formatted: string,
familyName: string,
givenName: string,
middleName: string,
honorificPrefix: string,
honorificSuffix: string
},
tagline: string,
braggingRights: string,
aboutMe: string,
relationshipStatus: string,
url: string,
image: {
url: string
},
organizations: {
name: string,
department: string,
title: string,
type: string,
startDate: string,
endDate: string,
location: string,
description: string,
primary: boolean
}[],
placesLived: {
value: string,
primary: boolean
}[],
isPlusUser: boolean,
language: string,
ageRange: {
min: number,
max: number
},
plusOneCount: number,
circledByCount: number,
verified: boolean,
cover: {
layout: string,
coverPhoto: {
url: string,
height: number,
width: number
},
coverInfo: {
topImageOffset: number,
leftImageOffset: number
}
},
domain: string
} 
    }
