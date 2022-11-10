import { Exercise } from "./../model/Exercise";

// get exercise by date
export async function getExerciseByDate(date: Date = new Date()) {
  // fake api call
  var response: Exercise[] = [];
  for (let index = 0; index < 20; index++) {
    response.push(new Exercise("家事全般（立位・軽い）", new Date(), 10, 26));
  }
  return response;
}
