import Company from "./company";

export default class Location {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    numberOfBoxes: number;
    numberOfBoxesToGive: number;
    city: string

    constructor(
        id: number,
        name: string,
        latitude: number,
        longitude: number,
        numberOfBoxes: 0,
        numberOfBoxesToGive: 0,
        city: string
    ) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.numberOfBoxes = numberOfBoxes;
    this.numberOfBoxesToGive = numberOfBoxesToGive;
    this.city = city
    }
   }
