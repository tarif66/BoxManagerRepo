export default class Client {
    id: number;
    brand: string;
    latitude: number;
    longitude: number;

    constructor(
        id: number,
        brand: string,
        latitude: number,
        longitude: number,
    ) {
     this.id = id;
     this.brand = brand;
     this.latitude = latitude;
     this.longitude = longitude;
    }
   }