import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
      <div>
        <Header/>
        <Sidebar/>
        <Home/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
