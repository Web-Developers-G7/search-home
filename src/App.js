import React from 'react';
import 'antd/dist/antd.css';
import HeaderSection from './sections/header';
import PopularSection from './sections/popular';
import Valuation from "./sections/valuation";
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <PopularSection />
      <Valuation />
    </div>
  );
}

export default App;
