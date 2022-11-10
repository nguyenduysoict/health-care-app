import { v4 as uuidv4 } from "uuid";

export class Exercise {
  id: string;
  name: string;
  time: Date;
  duration: number;
  energy: number;
  constructor(
    name: string,
    time: Date,
    duration: number,
    energy: number
  ) {
    this.id = uuidv4();
    this.name = name;
    this.time = time;
    this.duration = duration;
    this.energy = energy;
  }
}
