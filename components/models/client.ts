import Location from './location';

export default class Client {
    id: number;
    brand: string;
    locations: Location;

    constructor(
        id: number,
        brand: string,
        locations: Location,
    ) {
    this.id = id;
    this.brand = brand;
    this.locations = locations;
    }
   }