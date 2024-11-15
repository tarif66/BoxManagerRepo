export default class Box {
    id: number;
    client: string;
    numberOfBottles: number;
    problem: boolean;
    latitude: number;
    longitude: number;

    constructor(
    id: number,
    client: string = "Pas effectée",
    numberOfBottles: number = 0,
    problem: boolean = false,
    latitude: number,
    longitude: number
    ) {
    this.id = id;
    this.client = client;
    this.numberOfBottles = numberOfBottles;
    this.problem = problem;
    this.latitude = latitude;
    this.longitude = longitude;
    }
}
