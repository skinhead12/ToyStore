import React from 'react';
import CRUD from './CRUD';

function Home() {
    return ( 
    <>
    <div className="container-products">
          
            <div className="list-container">
            <CRUD/>
            </div>        
        </div>
    </>
        
     );
}

export default Home;
