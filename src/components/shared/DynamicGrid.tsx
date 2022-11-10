import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface DynamicGridProps {
  colCount: number;
  children: any[];
}

interface DynamicGridState {}

class DynamicGrid extends React.Component<DynamicGridProps, DynamicGridState> {
  constructor(props: DynamicGridProps) {
    super(props);
    this.renderGrid = this.renderGrid.bind(this);
  }

  renderGrid() {
    let rowCount =
      Math.floor(this.props.children.length / this.props.colCount) + 1;
    let rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push(<Row key={i}>{this.renderCols(i)}</Row>);
    }
    return rows;
  }

  renderCols(rowIndex: number) {
    let cols = [];
    let startIndex = rowIndex * this.props.colCount;
    let endIndex = startIndex + this.props.colCount - 1;
    endIndex =
      endIndex >= this.props.children.length
        ? this.props.children.length - 1
        : endIndex;
    for (let i = startIndex; i <= endIndex; i++) {
      cols.push(<Col key={i}>{this.props.children[i]}</Col>);
    }
    return cols;
  }

  render() {
    return <Container>{this.renderGrid()}</Container>;
  }
}

export default DynamicGrid;
