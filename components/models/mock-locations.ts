import Location from './location';
import { CLIENTS } from './mock-clients';

export const LOCATIONS: Location[] = [
    {
        id: 1,
        name: "Maison mère",
        brand: CLIENTS[0].brand,
        latitude: 48.8566,
        longitude: 2.3522,
        numberOfBoxes: 0
    },
    {
        id: 2,
        name: "Entrepôt Farman",
        brand: CLIENTS[7].brand,
        latitude: 49.2326,
        longitude: 4.0959,
        numberOfBoxes: 78
    },
    {
        id: 3,
        name: "Cave Visiteurs",
        brand: CLIENTS[6].brand,
        latitude: 49.2434,
        longitude: 4.0513,
        numberOfBoxes: 45
    },
    {
        id: 4,
        name: "Pressoir",
        brand: CLIENTS[6].brand,
        latitude: 49.1756,
        longitude: 4.1158,
        numberOfBoxes: 23
    },
    {
        id: 5,
        name: "Caves principales",
        brand: CLIENTS[3].brand,
        latitude: 49.1547,
        longitude: 4.0839,
        numberOfBoxes: 67
    },
    {
        id: 6,
        name: "Siège",
        brand: CLIENTS[6].brand,
        latitude: 49.2448,
        longitude: 4.0545,
        numberOfBoxes: 0
    },
    {
        id: 7,
        name: "Entrepôt Pargny",
        brand: CLIENTS[7].brand,
        latitude: 49.2195,
        longitude: 3.9223,
        numberOfBoxes: 0
    }
]
