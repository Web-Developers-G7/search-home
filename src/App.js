import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HeaderSection from './sections/header';
import PopularSection from './sections/popular';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <PopularSection />
    </div>
  );
}

export default App;
