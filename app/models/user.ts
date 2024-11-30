export default class User {
    id: number;
    name: string;
    numberOfBoxes: number;
    numberOfBoxesToGive: number;
    location: string;
    latitude: number;
    longitude: number;

    constructor(
    id: number,
    name: string,
    numberOfBoxes: number,
    numberOfBoxesToGive: number,
    location: string,
    latitude: number,
    longitude: number

    ) {
    this.id = id;
    this.name = name;
    this.numberOfBoxes = numberOfBoxes;
    this.numberOfBoxesToGive = numberOfBoxesToGive;
    this.location = location;
    this.latitude = latitude;
    this.longitude = longitude;
    }
}
    