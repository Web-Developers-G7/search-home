import React from 'react';
import 'antd/dist/antd.css';
import HeaderSection from './sections/header';
import CityProperty from './sections/CityProperty';
import TopRated from './sections/topRated';
import PopularSection from './sections/popular';
import Valuation from './sections/valuation';
import RecentSection from './sections/recent';
import Consultation from './sections/consultation';
import About from './sections/About';
import Footer from './sections/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <CityProperty />
      <TopRated />
      <PopularSection />
      <Valuation />
      <RecentSection />
      <Consultation />
      <About />
      <Footer />
    </div>
  );
}

export default App;
