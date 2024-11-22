import Location from './location';
import Client from './client';

export default class Box {
    id: number;
    client: Client;
    location: Location;

    constructor(
    id: number,
    client: Client,
    location: Location,
    ) {
    this.id = id;
    this.client = client;
    this.location = location;
    }
}
