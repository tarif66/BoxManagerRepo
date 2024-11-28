import { CLIENTS } from "@/app/models/mock-clients";
import Client from "@/app/models/client";
import BoxService from "./box-service";


export default class ClientService {

  static clients:Client[] = CLIENTS;


  private static async updateClientsWithBoxCounts(clients: Client[]): Promise<Client[]> {
    const boxes = await BoxService.getBoxes();

    clients.forEach((client) => {
        client.locations.forEach((clientLocation) => {
            boxes.forEach((box) => {
              if(clientLocation.id === box.location){
                clientLocation.numberOfBoxes++;
              }
            });
        });
    });

    return clients;
  }
 




  static async getClients(): Promise<Client[]> {
    const updatedClients = await this.updateClientsWithBoxCounts(this.clients);
    return updatedClients;
  }

  static async getClient(id: number): Promise<Client | null> {
    const updatedClients = await this.updateClientsWithBoxCounts(this.clients);
    return updatedClients.find((client) => client.id === id) || null;
  }
}





