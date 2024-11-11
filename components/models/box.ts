export default class Box {
    id: number;
    client: string;
    numberOfBottles: number;
    problem: boolean;

    constructor(
    id: number,
    client: string = "Pas effectée",
    numberOfBottles: number = 0,
    problem: boolean = false
    ) {
    this.id = id;
    this.client = client;
    this.numberOfBottles = numberOfBottles;
    this.problem = problem;
    }
}
