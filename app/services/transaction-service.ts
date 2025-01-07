import TRANSACTIONS from "../models/mock-transactions";
import Transaction from "../models/transaction";

export default class TransactionService {

    static transactions: Transaction[] = TRANSACTIONS;
  
    static getTransactions(): Promise<Transaction[]> {
      return new Promise<Transaction[]>(resolve => {
        resolve(this.transactions);
      });
    }
  
    static getTransaction(id: number): Promise<Transaction | null> {
      return new Promise(resolve => {    
        resolve(this.transactions.find(transaction => id === transaction.id) || null);
      }); 
    }
}