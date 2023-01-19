import React from 'react';
import '../styles/Header.css';

function Header(){
    return (
        <header>
        <div className='header-container'>
            <div className='header-list'>
            <h2>logo</h2>
               <ul>
                <li>
                    Quienes Somos
                </li>
                <li>
                    Comprar Online
                </li>
                <li>
                    Localiza tu tienda
                </li> 
                </ul>
            </div>
        </div>
     </header>
    
    )
}

export default Header;