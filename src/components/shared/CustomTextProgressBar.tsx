import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CustomTextProgressBarProps {
  value: number;
  children?: any;
}

interface CustomTextProgressBarState {}

class CustomTextProgressBar extends React.Component<
  CustomTextProgressBarProps,
  CustomTextProgressBarState
> {
  constructor(props: CustomTextProgressBarProps) {
    super(props);
  }
  render() {
    return (
      <div
        className="position-relative margin-center"
        style={{
          width: "180px",
          height: "180px",
        }}
      >
        <div className="position-absolute">
          <CircularProgressbar
            value={this.props.value}
            strokeWidth={2}
            styles={buildStyles({
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </div>
        <div className="position-absolute w-100 h-100 align-center flex-column justify-content-center">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CustomTextProgressBar;
