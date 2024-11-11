import Client from "./client";

export default class Location {
    id: number;
    name: string;
    brand: string;
    latitude: number;
    longitude: number;
    numberOfBoxes: number;

    constructor(
        id: number,
        name: string,
        brand: string,
        latitude: number,
        longitude: number,
        numberOfBoxes: 0
    ) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.latitude = latitude;
    this.longitude = longitude;
    this.numberOfBoxes = numberOfBoxes;
    }
   }
