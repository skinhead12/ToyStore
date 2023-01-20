import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import UpdateForm from './views/UpdateForm';


function App() {
  return (
    <>
      <div>
        <Header/>
        <Sidebar/>
        <br></br>
        <Home/>
        <UpdateForm/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
