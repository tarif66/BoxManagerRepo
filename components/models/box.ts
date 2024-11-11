export default class Box {
    id: number;
    client: string;
    numberOfBottles: number;

    constructor(
    id: number,
    client: string = "Pas effectée",
    numberOfBottles: number = 0
    ) {
    this.id = id;
    this.client = client;
    this.numberOfBottles = numberOfBottles;
    }
}
