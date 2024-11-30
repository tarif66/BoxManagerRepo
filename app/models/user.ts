export default class User {
    id: number;
    name: string;
    numberOfBoxes: number;
    numberOfBoxesToGive: number;

    constructor(
    id: number,
    name: string,
    numberOfBoxes: number,
    numberOfBoxesToGive: number,

    ) {
    this.id = id;
    this.name = name;
    this.numberOfBoxes = numberOfBoxes;
    this.numberOfBoxesToGive = numberOfBoxesToGive;
    }
}
    