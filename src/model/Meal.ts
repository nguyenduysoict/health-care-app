import { MealType } from "../constant/MealType";

export class Meal{
    id: number = 0;
    date: Date = new Date();
    image?: string = ''; // default img
    type?: MealType = MealType.Morning;
    constructor(date: Date, image: string, type: MealType){
        this.date = date;
        this.image = image;
        this.type = type;
    }
}
