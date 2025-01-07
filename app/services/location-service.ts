import LOCATIONS from "../models/mock-locations";
import Location from "../models/location";

export default class LocationService {

    static locations:Location[] = LOCATIONS;
  
    static getLocations(): Promise<Location[]> {
      return new Promise<Location[]>(resolve => {
        resolve(this.locations);
      });
    }
  
    static getLocation(id: number): Promise<Location|null> {
      return new Promise(resolve => {    
        resolve(this.locations.find(location => id === location.id) || null);
      }); 
    }
  }

