// get body fat percentage

import { IntervalType } from "../constant/IntervalType";

export async function getBodyFatPercentage(intervalType: IntervalType) {

  // fake api call supposed to be get by interval type
  var response: any = [[], []];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 12; j++) {
      const element = Math.floor(Math.random() * 100);
      response[i].push(element);
    }
  }

  return response;
}
