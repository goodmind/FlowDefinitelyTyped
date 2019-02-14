declare module "gapi.plus" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    plus: typeof npm$namespace$gapi$client$plus
  };

  declare var npm$namespace$gapi$client$plus: {
    people: typeof npm$namespace$gapi$client$plus$people
  };

  declare var npm$namespace$gapi$client$plus$people: {
    get: typeof gapi$client$plus$people$get,
    search: typeof gapi$client$plus$people$search
  };
  declare interface gapi$client$plus$people$GetParameters {
    userId: string;
  }

  declare function gapi$client$plus$people$get(
    parameters: gapi$client$plus$people$GetParameters
  ): HttpRequest<people$Person>;

  declare interface gapi$client$plus$people$SearchParameters {
    query: string;
    language?: string;
    maxResults?: number;
    pageToken?: string;
  }

  declare function gapi$client$plus$people$search(
    parameters: gapi$client$plus$people$SearchParameters
  ): HttpRequest<people$PeopleFeed>;

  declare interface gapi$client$plus$people$PeopleFeed {
    kind: "plus#peopleFeed";
    etag: string;
    selfLink: string;
    title: string;
    nextPageToken: string;
    totalItems: number;
    items: people$Person[];
  }

  declare interface gapi$client$plus$people$Person {
    kind: "plus#person";
    etag: string;
    nickname: string;
    occupation: string;
    skills: string;
    birthday: string;
    gender: string;
    emails: {
      value: string,
      type: string
    }[];
    urls: {
      value: string,
      type: string,
      label: string
    }[];
    objectType: string;
    id: string;
    displayName: string;
    name: {
      formatted: string,
      familyName: string,
      givenName: string,
      middleName: string,
      honorificPrefix: string,
      honorificSuffix: string
    };
    tagline: string;
    braggingRights: string;
    aboutMe: string;
    relationshipStatus: string;
    url: string;
    image: {
      url: string
    };
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
    }[];
    placesLived: {
      value: string,
      primary: boolean
    }[];
    isPlusUser: boolean;
    language: string;
    ageRange: {
      min: number,
      max: number
    };
    plusOneCount: number;
    circledByCount: number;
    verified: boolean;
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
    };
    domain: string;
  }
}
