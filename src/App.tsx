import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MyRecordPage from "./components/pages/MyRecordPage";
import ColumnPage from "./components/pages/ColumnPage";
import * as AnimationUtils from './utils/AnimationUtils';

function App() {
  const scrollToTop = () => {
    AnimationUtils.scrollToTop();
  };
  
  return (
    <div className="App d-flex flex-column">
      <Header></Header>
      <div className="main-container flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-record" element={<MyRecordPage />} />
          <Route path="/column" element={<ColumnPage />} />
        </Routes>
        <div
          className="go-top-btn background-cover"
          onClick={scrollToTop}
        ></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
