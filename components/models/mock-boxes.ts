import Box from './box';
import Client from './client';
import {CLIENTS} from './mock-clients';

export const BOXES: Box[] = [
    {
        id: 1,
        client: CLIENTS[0],
        location: CLIENTS[0].locations[0]
    }
];