import { BOXES } from "@/app/models/mock-boxes";
import Box from "@/app/models/box";


export default class BoxService {

  static boxes:Box[] = BOXES;

  static getBoxes(): Promise<Box[]> {
    return new Promise<Box[]>(resolve => {
      resolve(this.boxes);
    });
  }

  static getBox(id: number): Promise<Box|null> {
    return new Promise(resolve => {    
      resolve(this.boxes.find(box => id === box.id) || null);
    }); 
  }
}