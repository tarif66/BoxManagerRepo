import { TRUCKS } from "@/app/models/mock-trucks";
import Truck from "@/app/models/truck";
import BoxService from "./box-service";


export default class TruckService {

  static trucks:Truck[] = TRUCKS;


  static async getTrucks(): Promise<Truck[]> {
    return this.trucks;
  }

  static async getTruck(id: number): Promise<Truck | null> {
    return this.trucks.find((truck) => truck.id === id) || null;
  }
}





