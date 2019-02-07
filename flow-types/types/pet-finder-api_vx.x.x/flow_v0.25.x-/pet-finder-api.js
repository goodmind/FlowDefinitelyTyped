declare module "pet-finder-api" {
  declare function petFinder(
    api_key: string,
    api_secret: string,
    options?: any
  ): petFinder$petFinder$PetFinder;

  declare interface petFinder$PetFinder {
    getBreedList(
      animal: string,
      callback: (err: any, breedArray: string[]) => void
    ): void;
    getPet(
      petId: number,
      options: any,
      callback: (error: any, pet: petFinder$Pet) => void
    ): void;
    getRandomPet(
      options: any,
      callback: (error: any, pet: petFinder$Pet) => void
    ): void;
    findPet(
      options: any,
      callback: (error: any, pets: petFinder$Pet[]) => void
    ): void;
    findShelter(
      location: string,
      options: any,
      callback: (error: any, shelters: petFinder$Shelter[]) => void
    ): void;
    getShelter(
      shelterId: string,
      options: any,
      callback: (error: any, shelter: petFinder$Shelter) => void
    ): void;
    getPetsInShelter(
      shelterId: string,
      options: any,
      callback: (error: any, pets: petFinder$Pet[]) => void
    ): void;
    getSheltersWithBreeds(
      animal: string,
      breed: string,
      options: any,
      callback: (error: any, shelters: petFinder$Shelter[]) => void
    ): void;
  }

  declare interface petFinder$Pet {
    id: number;
    name: string;
    status: string;
    description: string;
    sex: string;
    age: string;
    size: string;
    mix: string;
    animal: string;
    shelterId: string;
    shelterPetId: string;
    contact: petFinder$Contact;
    options: string[];
    breeds: string[];
    media: any;
  }

  declare interface petFinder$Shelter {
    id: string;
    name: string;
    email: string;
    phone: string;
    fax: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    longitude: number;
    latitude: number;
  }

  declare interface petFinder$Contact {
    email: string;
    phone: string;
    fax: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
  }
  declare module.exports: typeof petFinder;
}
