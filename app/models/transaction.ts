import Location from './location';

export default class Transaction {
    id: number;
    type: string;
    date: string;
    boxes: number;
    location: Location;

    constructor(
        id: number,
        type: string,
        date: string,
        boxes: number,
        location: Location
    ) {
        this.id = id;
        this.type = type;
        this.date = date;
        this.boxes = boxes;
        this.location = location;
    }
}
