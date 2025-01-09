import Location from './location';

export default class Transaction {
    id: number;
    type: string;
    date: string;
    boxes: number;
    location: string;

    constructor(
        id: number,
        type: string,
        date: string,
        boxes: number,
        location: string
    ) {
        this.id = id;
        this.type = type;
        this.date = date;
        this.boxes = boxes;
        this.location = location;
    }
}
