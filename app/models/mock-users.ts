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
        historicalData: [
            { month: 'Jan', owned: 10, acquired: 100 },
            { month: 'Feb', owned: 15, acquired: 3 },
            { month: 'Mar', owned: 12, acquired: 5 },
            { month: 'Apr', owned: 8, acquired: 4 },
            { month: 'May', owned: 6, acquired: 4 },
            { month: 'Jun', owned: 5, acquired: 3 },
        ]
    }
];