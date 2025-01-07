import Company from './company';
import USERS from './mock-user';
import LOCATIONS from './mock-locations';

const COMPANIES: Company[] = [
    {
        id: 1,
        name: "Company 1",
        transactionHistory: [],
        numberOfBoxes: 0,
        listOfEmployees: [USERS[0]],
        listOfLocations: [LOCATIONS[0]]
    }
];

export default COMPANIES;
