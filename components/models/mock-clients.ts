import Client from './client';

export const CLIENTS: Client[] = [
    {
        id: 1,
        brand: "Leroy Merlin",
        locations: 
            { id: 1, name: "Magasin Cormontreuil", latitude: 49.2319, longitude: 4.0478, numberOfBoxes: 0 },
    },
    {
        id: 2,
        brand: "IKEA",
        locations: 
            { id: 20, name: "IKEA Orléans", latitude: 47.9036, longitude: 1.9115, numberOfBoxes: 0 }
        ,

    },
    {
        id: 2,
        brand: "Monoprix",
        locations: 
            { id: 20, name: "Monoprix Rouen Centre", latitude: 49.4432, longitude: 1.0993, numberOfBoxes: 0 }
        ,
        
    },
]
