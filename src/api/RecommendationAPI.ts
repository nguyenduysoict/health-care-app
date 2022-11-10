import { Recommendation } from "./../model/Recommendation";
import col1 from "../resources/column-1.jpg";
import col2 from "../resources/column-2.jpg";
import col3 from "../resources/column-3.jpg";
import col4 from "../resources/column-4.jpg";
import col5 from "../resources/column-5.jpg";
import col6 from "../resources/column-6.jpg";
import col7 from "../resources/column-7.jpg";
import col8 from "../resources/column-8.jpg";

// get diaries by page
export async function getRecommendationPaging(
  pageIndex: number,
  pageSize: number = 8
) {
  // fake api call
  var response: Recommendation[] = [];
  var images = [col1, col2, col3, col4, col5, col6, col7, col8];

  for (let index = 0; index < pageSize; index++) {
    let img = images[Math.floor(Math.random() * 8)];
    response.push(
      new Recommendation(
        new Date(),
        img,
        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        ["魚料理", "和食", "DHA"]
      )
    );
  }
  return response;
}
