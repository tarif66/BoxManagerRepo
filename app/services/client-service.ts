import { CLIENTS } from "@/app/models/mock-clients";
import Client from "@/app/models/client";


export default class CleintService {

  static clients:Client[] = CLIENTS;

  static getClients(): Promise<Client[]> {
    return new Promise<Client[]>(resolve => {
      resolve(this.clients);
    });
  }

  static getClient(id: number): Promise<Client|null> {
    return new Promise(resolve => {    
      resolve(this.clients.find(client => id === client.id) || null);
    }); 
  }
}