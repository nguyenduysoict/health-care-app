import React from "react";
import { Line } from "react-chartjs-2";
import "../../styles/PercentageGraph.scss";
import { IntervalType } from "../../constant/IntervalType";
import { YearLabels } from "../../constant/GraphLabel";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import * as BodyFatPercentageAPI from "../../api/BodyFatPercentageAPI";
import { format } from "date-fns";
import clsx from "clsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#777777",
        drawBorder: false,
      },
    },
    y: {
      grid: {
        color: "transparent",
        borderColor: "transparent",
      },
      ticks: {
        display: false,
      },
    },
  },
};

const intervalSelector = [
  { type: IntervalType.Day, label: "日" },
  { type: IntervalType.Week, label: "週" },
  { type: IntervalType.Month, label: "月" },
  { type: IntervalType.Year, label: "年" },
];

interface PercentageGraphProps {
  interval: IntervalType;
  isShowInterval?: boolean;
  isShowTitle?: boolean;
}

interface PercentageGraphState {
  data: any;
  activeInterval: IntervalType;
}

class PercentageGraph extends React.Component<
  PercentageGraphProps,
  PercentageGraphState
> {
  constructor(props: PercentageGraphProps) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            borderColor: "#FFCC21",
            backgroundColor: "#FFCC21",
          },
          {
            data: [],
            borderColor: "#8FE9D0",
            backgroundColor: "#8FE9D0",
          },
        ],
      },
      activeInterval: IntervalType.Year,
    };
    this.onSelectInterval = this.onSelectInterval.bind(this);
  }

  componentDidMount(): void {
    this.getBodyFatPercentage(this.props.interval);
  }

  getBodyFatPercentage(interval = IntervalType.Year){
    let labels = this.getLabel(interval);
    BodyFatPercentageAPI.getBodyFatPercentage(interval).then(
      (res) => {
        if (res) {
          this.setState({
            data: {
              labels: labels,
              datasets: this.state.data.datasets.map(
                (item: any, index: number) => {
                  return { ...item, data: res[index] };
                }
              ),
            },
          });
        }
      }
    );
  }


  // get label by interval type
  getLabel(interval: IntervalType) {
    switch (interval) {
      case IntervalType.Day:
        return YearLabels;
      case IntervalType.Week:
        return YearLabels;
      case IntervalType.Month:
        return YearLabels;
      case IntervalType.Year:
        return YearLabels;
      default:
        return YearLabels;
    }
  }

  onSelectInterval(selectedInterval: IntervalType) {
    this.getBodyFatPercentage(selectedInterval);
    this.setState({
      activeInterval: selectedInterval,
    });
  }

  render() {
    return (
      <div className="chart-container flex-grow-1 d-flex flex-column">
        {this.props.isShowTitle && (
          <div className="align-center light-color font-inter">
            <div className="font-15">
   
              <span className="d-block">BODY</span> <span>RECORD</span>
            </div>
            <div className="font-22 ml-4">

              {format(new Date(), "yyyy.MM.dd")}
            </div>
          </div>
        )}
        <div className="position-relative flex-grow-1">
          <Line id="chart" options={options} data={this.state.data} />
        </div>

        {this.props.isShowInterval && (
          <div className="align-center">
            {intervalSelector.map((item, index) => {
              return (
                <div
                  key={index}
                  className={clsx("interval-item mr-3 mt-1 font-15", {
                    active: this.state.activeInterval === item.type,
                  })}
                  onClick={() => this.onSelectInterval(item.type)}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default PercentageGraph;
