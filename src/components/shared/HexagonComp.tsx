import React from "react";
import { ReactComponent as HexagonIcon } from "../../resources/hexagon.svg";

interface HexagonCompProps {
  children: any;
}

interface HexagonCompState {}

class HexagonComp extends React.Component<HexagonCompProps, HexagonCompState> {
  constructor(props: HexagonCompProps) {
    super(props);
  }
  render() {
    return (
      <div
        className="position-relative margin-center pointer"
        style={{
          width: 116,
          height: 134,
        }}
      >
        <div className="position-absolute">
          <HexagonIcon />
        </div>
        <div className="position-absolute w-100 h-100 align-center flex-column justify-content-center">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HexagonComp;
