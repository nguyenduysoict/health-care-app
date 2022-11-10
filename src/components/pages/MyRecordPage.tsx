import clsx from "clsx";
import React from "react";
import { IntervalType } from "../../constant/IntervalType";
import "../../styles/MyRecordPage.scss";
import MyDiary from "../DiaryComp";
import MyExercise from "../ExerciseComp";
import PercentageGraph from "../shared/PercentageGraph";

const sectionBoxs = [
  { title: "BODY RECORD", button: "自分のカラダの記録", image: "body-record" },
  { title: "MY EXERCISE", button: "自分の運動の記録", image: "my-exercise" },
  { title: "MY DIARY", button: "自分の日記", image: "my-diary" },
];

interface MyRecordPageProps {}

interface MyRecordPageState {}

class MyRecordPage extends React.Component<
  MyRecordPageProps,
  MyRecordPageState
> {
  constructor(props: MyRecordPageProps) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {}

  render() {
    return (
      <div className="record-page-container">
        <div className="d-flex justify-content-between">
          {sectionBoxs.map((item, index) => {
            return (
              <div key={index} className="section-box">
                <div
                  className={clsx(
                    "img w-100 h-100 background-cover",
                    item.image
                  )}
                ></div>
                <div className="w-100 box-content">
                  <div className="section-title font-inter">{item.title}</div>
                  <div className="record-btn pointer font-14">{item.button}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="body-record-chart-block d-flex">
          <PercentageGraph
            interval={IntervalType.Month}
            isShowInterval={true}
            isShowTitle={true}
          />
        </div>
        <MyExercise />
        <MyDiary />
      </div>
    );
  }
}

export default MyRecordPage;
