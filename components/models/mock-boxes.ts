import Box from './box';
import Client from './client';
import {CLIENTS} from './mock-clients';

export const BOXES: Box[] = [
    {
        id: 1,
        client: CLIENTS[0],
        location: CLIENTS[0].locations[0]
    },
    {
        id: 2,
        client: CLIENTS[2],
        location: CLIENTS[2].locations[3]
    },
    {
        id: 3,
        client: CLIENTS[1],
        location: CLIENTS[1].locations[5]
    }
];