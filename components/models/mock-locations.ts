import {CLIENTS} from './mock-clients';
import Location from './location';

const locationsAggregated: Location[] = CLIENTS.map(client => client.locations).flat() as Location[];

export const LOCATIONS:Location[] = locationsAggregated;