import React from "react";
import { format } from "date-fns";
import * as ExerciseAPI from "../api/ExerciseAPI";
import { Exercise } from "../model/Exercise";
import "../styles/MyExercise.scss";

interface MyExerciseProps {}

interface MyExerciseState {
  exercise: Exercise[];
}

class MyExercise extends React.Component<MyExerciseProps, MyExerciseState> {
  constructor(props: MyExerciseProps) {
    super(props);
    this.state = {
      exercise: [],
    };
    this.getExercise = this.getExercise.bind(this);
  }

  componentDidMount(): void {
    this.getExercise();
  }

  getExercise() {
    ExerciseAPI.getExerciseByDate().then(
      (res) => {
        if (res) {
          this.setState({
            exercise: res,
          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div className="my-exercise-block d-flex flex-column">
        <div className="align-center mb-1 font-inter">
          <div className="font-15">
            <span className="d-block">MY</span>
            <span>EXERCISE</span>
          </div>
          <div className="font-22 ml-4">{format(new Date(), "yyyy.MM.dd")}</div>
        </div>
        <div className="exercise-wrapper w-100 overflow-auto flex-grow-1">
          <ul className="w-100">
            {this.state.exercise.map((item) => {
              return (
                <li key={item.id}>
                  <div className="d-flex justify-content-between">
                    <div className="font-15">{item.name}</div>
                    <div className="font-18 primary-color font-inter">
                      {item.duration} min
                    </div>
                  </div>
                  <div className="font-15 primary-color font-inter">{item.energy}kcal</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyExercise;
