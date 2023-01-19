import React from 'react';
import './index.css';
import Home from './views/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" id="outer-container">
      <div id="page-wrap">
        <Header/>
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
