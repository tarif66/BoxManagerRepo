import Location from './location';

export default class Box {
    id: number;
    location: string;

    constructor(
    id: number,
    location: string,
    ) {
    this.id = id;
    this.location = location;
    }
}
