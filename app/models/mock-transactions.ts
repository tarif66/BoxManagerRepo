import Transaction from './transaction';
import {LOCATIONS} from './mock-locations';

export const TRANSACTIONS: Transaction[] = [
    {
        id: 1,
        type: "Outgoing",
        date: "2018-01-01",
        boxes: 10,
        location: LOCATIONS[0],
    },
    {
        id: 2,
        type: "Incoming",
        date: "2018-01-02",
        boxes: 5,
        location: LOCATIONS[0],
    },
    {
        id: 3,
        type: "Outgoing",
        date: "2018-01-03",
        boxes: 15,
        location: LOCATIONS[0],
    }
];