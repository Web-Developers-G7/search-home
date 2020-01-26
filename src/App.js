import React from "react";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderSection from "./sections/header";
import TopRated from "./sections/topRated";
import PopularSection from "./sections/popular";
import Valuation from "./sections/valuation";
import RecentSection from "./sections/recent";
import Footer from "./sections/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <TopRated />
      <PopularSection />
      <Valuation />
      <RecentSection />
      <Footer />
    </div>
  );
}

export default App;
