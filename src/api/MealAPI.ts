import { Meal } from "../model/Meal";
import { MealType } from "../constant/MealType";

// these image should be store in public storage and return url;
import img1 from "../resources/m01.jpg";
import img2 from "../resources/m02.jpg";
import img3 from "../resources/m03.jpg";
import img4 from "../resources/l01.jpg";
import img5 from "../resources/l02.jpg";
import img6 from "../resources/l03.jpg";
import img7 from "../resources/d01.jpg";
import img8 from "../resources/d02.jpg";
import img9 from "../resources/s01.jpg";

// get meal by page
export async function getMealPaging(pageIndex: number, pageSize: number = 8) {
  // fake api call
  var response: Meal[] = [];
  var images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  var mealTypes = [
    MealType.Morning,
    MealType.Lunch,
    MealType.Dinner,
    MealType.Snack,
  ];
  for (let index = 0; index < pageSize; index++) {
    let img = images[Math.floor(Math.random() * 9)];
    let meal = mealTypes[Math.floor(Math.random() * 4)];
    response.push(new Meal(new Date(), img, meal));
  }
  return response;
}
