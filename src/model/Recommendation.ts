import { v4 as uuidv4 } from "uuid";

export class Recommendation {
  id: string;
  time: Date;
  image: string;
  description: string;
  hashTag?: string[];
  constructor(
    time: Date,
    image: string,
    description: string,
    hashTag?: string[]
  ) {
    this.id = uuidv4();
    this.time = time;
    this.image = image;
    this.description = description;
    this.hashTag = hashTag;
  }
}
