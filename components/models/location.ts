export default class Location {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    numberOfBoxes: number;

    constructor(
        id: number,
        name: string,
        latitude: number,
        longitude: number,
        numberOfBoxes: 0
    ) {
    this.id = id;
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.numberOfBoxes = numberOfBoxes;
    }
   }
