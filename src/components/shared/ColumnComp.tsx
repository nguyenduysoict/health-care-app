import React from "react";
import { Recommendation } from "../../model/Recommendation";
import "../../styles/ColumnComp.scss";
import { format } from "date-fns";

interface ColumnCompProps {
  recommendationItem: Recommendation;
}

interface ColumnCompState {}

class ColumnComp extends React.Component<ColumnCompProps, ColumnCompState> {
  constructor(props: ColumnCompProps) {
    super(props);
  }
  render() {
    return (
      <div className="column-item-wrapper mb-4">
        <div className="column-item mb-2 background-cover" style={{backgroundImage: `url(${this.props.recommendationItem?.image})`}}>
          <div className="time-info font-15 light-color pl-2 pr-2 font-inter">
            {format(this.props.recommendationItem?.time, "yyyy.MM.dd")}
            <span className="ml-2">
            {format(this.props.recommendationItem?.time, "HH:mm")}

            </span>
          </div>
        </div>
        <div className="font-15">{this.props.recommendationItem?.description}</div>
        <div>
          {this.props.recommendationItem.hashTag?.map((item, index) => {
            return <span key={index} className="mr-1 font-12 primary-1-color">#{item}</span>;
          })}
        </div>
      </div>
    ); 
  }
}

export default ColumnComp;
