import User from './user';

export const USERS: User[] = [
    {
        id: 1,
        name: "John Doe",
        numberOfBoxes: 14,
        numberOfBoxesToGive: 5,
        latitude: 49.2161,
        longitude: 3.9981,
        location: "Village by CA Reims",
        boxHistory: [
            { date: "2023-10-04", boxes: 3 },
            { date: "2023-10-05", boxes: 2 },
            { date: "2023-10-06", boxes: -3 },
            { date: "2023-10-07", boxes: 1 },
            { date: "2023-10-08", boxes: -5 }
        ]
    }
];
