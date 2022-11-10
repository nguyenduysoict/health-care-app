import React from "react";
import "../../styles/HomePage.scss";
import { ReactComponent as KnifeIcon } from "../../resources/icon_knife.svg";
import { ReactComponent as CupIcon } from "../../resources/icon_cup.svg";
import HexagonComp from "../shared/HexagonComp";
import CustomTextProgressBar from "../shared/CustomTextProgressBar";
import { Meal } from "../../model/Meal";
import { MealType } from "../../constant/MealType";
import PercentageGraph from "../shared/PercentageGraph";
import * as MealAPI from "../../api/MealAPI";
import { format } from "date-fns";
import DynamicGrid from "../shared/DynamicGrid";
import { IntervalType } from "../../constant/IntervalType";
import * as AnimationUtils from "../../utils/AnimationUtils";

interface HomePageProps {}

interface HomePageState {
  achievementRate: number;
  dateAchievement: Date;
  meals: Meal[];
  currentMealPageIndex: number;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      achievementRate: 75,
      dateAchievement: new Date(),
      meals: [],
      currentMealPageIndex: 0,
    };
    this.getMeal = this.getMeal.bind(this);
  }

  componentDidMount(): void {
    this.getMeal();
  }

  getMeal(isLoadMore: boolean = false) {
    var nextPage = this.state.currentMealPageIndex + 1;
    MealAPI.getMealPaging(nextPage).then(
      (res) => {
        if (res) {
          this.setState(
            {
              meals: [...this.state.meals, ...res],
              currentMealPageIndex: nextPage,
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
      <div className="home-page-container">
        <div className="achievement-container d-flex">
          <div className="achievement-rate-block background-cover align-center">
            <CustomTextProgressBar value={this.state.achievementRate}>
              <div>
                <span className="date-achievement font-18">
                  {format(this.state.dateAchievement, "MM/dd")}
                </span>
                <span className="achievement-rate font-25 ml-1">
                  {this.state.achievementRate}%
                </span>
              </div>
            </CustomTextProgressBar>
          </div>
          <PercentageGraph interval={IntervalType.Month} />
        </div>
        <div className="hexagon-container d-flex">
          {[
            { type: MealType.Morning },
            { type: MealType.Lunch },
            { type: MealType.Dinner },
            { type: MealType.Snack },
          ].map((item, index) => {
            return (
              <div key={index}>
                <HexagonComp>
                  {item.type == MealType.Snack ? <CupIcon /> : <KnifeIcon />}
                  <span className="font-20 font-inter">{item.type}</span>
                </HexagonComp>
              </div>
            );
          })}
        </div>

        <div className="meal-history-container">
          <DynamicGrid colCount={4}>
            {this.state.meals.map((item) => {
              return (
                <div
                  key={item.id}
                  className="history-item-block background-cover"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="meal-info font-15 font-inter">
                    {format(item.date, "MM.dd")} {item.type}
                  </div>
                </div>
              );
            })}
          </DynamicGrid>
        </div>
        <div className="load-more-btn" onClick={() => this.getMeal(true)}>
          記録をもっと見る
        </div>
      </div>
    );
  }
}

export default HomePage;
