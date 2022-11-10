import { v4 as uuidv4 } from 'uuid';

export class Diary {
    id: string;
    time: Date;
    description: string;
    constructor(time: Date, description:string){
        this.id = uuidv4();
        this.time = time;
        this.description = description;
    }
}