import React from 'react';
import './App.css';
import HeaderSection from './sections/header';
import Valuation from './sections/valuation';

// add recent section

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Valuation />
    </div>
  );
}

export default App;
