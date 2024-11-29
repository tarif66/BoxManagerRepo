export default class Truck {
    id: number;
    type: string;
    model: string;
    numberOfBoxes: number;

    constructor(
        id: number,
        type: string,
        model: string,
        numberOfBoxes: 0
    ) {
    this.id = id;
    this.type = type;
    this.model = model;
    this.numberOfBoxes = numberOfBoxes;
    }
   }

