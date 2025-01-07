import Transaction from './transaction';
import User from './user';
import Location from './location';

export default class Company {
    id: number;
    name: string;
    transactionHistory: Transaction[];
    numberOfBoxes: number;
    listOfEmployees: User[];
    listOfLocations: Location[];

    constructor(
        id: number,
        name: string,
        transactionHistory: Transaction[],
        numberOfBoxes: number,
        listOfEmployees: User[],
        listOfLocations: Location[]
    ) {
        this.id = id;
        this.name = name;
        this.transactionHistory = transactionHistory;
        this.numberOfBoxes = numberOfBoxes;
        this.listOfEmployees = listOfEmployees;
        this.listOfLocations = listOfLocations;
    }

}