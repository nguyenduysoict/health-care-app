import React from "react";
import { Diary } from "../model/Diary";
import { format } from "date-fns";
import * as DiaryAPI from "../api/DiaryAPI";
import "../styles/MyDiary.scss";
import * as AnimationUtils from "../utils/AnimationUtils";

interface MyDiaryProps {}

interface MyDiaryState {
  diaries: Diary[];
  currentDiaryPageIndex: number;
}

class MyDiary extends React.Component<MyDiaryProps, MyDiaryState> {
  constructor(props: MyDiaryProps) {
    super(props);
    this.state = {
      diaries: [],
      currentDiaryPageIndex: 0,
    };
    this.getDiary = this.getDiary.bind(this);
  }

  componentDidMount(): void {
    this.getDiary();
  }

  getDiary(isLoadMore: boolean = false) {
    var nextPage = this.state.currentDiaryPageIndex + 1;
    DiaryAPI.getDiaryPaging(nextPage).then(
      (res) => {
        if (res) {
          this.setState(
            {
              diaries: [...this.state.diaries, ...res],
              currentDiaryPageIndex: nextPage,
            },
            () => {
              if (isLoadMore) {
                AnimationUtils.scrollToBottom();
              }
            }
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <>
        <div className="my-diary-container">
          <div className="font-22">MY DIARY</div>
          <div className="diary-wrapper">
            {this.state.diaries.map((item) => {
              return (
                <div key={item.id} className="diary-item">
                  <div className="font-18 font-inter">
                    <span className="d-block">
                      {format(item.time, "yyyy.MM.dd")}
                    </span>
                    <span>{format(item.time, "HH:mm")}</span>
                  </div>

                  <div className="font-12 mt-2">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="load-more-btn" onClick={() => this.getDiary(true)}>
          コラムをもっと見る
        </div>
      </>
    );
  }
}

export default MyDiary;
