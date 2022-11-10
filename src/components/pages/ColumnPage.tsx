import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/ColumnPage.scss";
import { Recommendation } from "../../model/Recommendation";
import * as RecommendationAPI from "../../api/RecommendationAPI";
import DynamicGrid from "../shared/DynamicGrid";
import ColumnComp from "../shared/ColumnComp";
import * as AnimationUtils from "../../utils/AnimationUtils";

interface ColumnPageProps {}

interface ColumnPageState {
  recommendation: Recommendation[];
  currentPageIndex: number;
}

const recommendCols = [
  { label: "COLUMN", more: "オススメ" },
  { label: "DIET", more: "ダイエット" },
  { label: "BEAUTY", more: "美容" },
  { label: "HEALTH", more: "健康" },
];

class ColumnPage extends React.Component<ColumnPageProps, ColumnPageState> {
  constructor(props: ColumnPageProps) {
    super(props);
    this.state = {
      recommendation: [],
      currentPageIndex: 0,
    };
    this.getRecommendation = this.getRecommendation.bind(this);
  }

  componentDidMount(): void {
    this.getRecommendation();
  }

  getRecommendation(isLoadMore: boolean = false) {
    var nextPage = this.state.currentPageIndex + 1;
    RecommendationAPI.getRecommendationPaging(nextPage).then(
      (res) => {
        if (res) {
          this.setState(
            {
              recommendation: [...this.state.recommendation, ...res],
              currentPageIndex: nextPage,
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
        <Container className="column-page-container">
          <Row>
            {recommendCols.map((item, index) => {
              return (
                <Col key={index}>
                  <div className="column-box">
                    <div className="primary-color font-22 font-inter">
                      <span className="d-block">RECOMMENDED </span>
                      <span>{item.label}</span>
                    </div>
                    <div className="line"></div>
                    <span className="font-18 light-color">{item.more}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="column-wrapper">
          <DynamicGrid colCount={4}>
            {this.state.recommendation.map((item) => {
              return <ColumnComp key={item.id} recommendationItem={item} />;
            })}
          </DynamicGrid>
        </div>
        <div
          className="load-more-btn"
          onClick={() => this.getRecommendation(true)}
        >
          コラムをもっと見る
        </div>
      </>
    );
  }
}

export default ColumnPage;
