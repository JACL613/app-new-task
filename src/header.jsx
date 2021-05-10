import React from 'react'
import imgLogo from './img/logo.png'
import  './css/header.css';
import './css/menu.css';
// import Menu from './Menu';
function header() {
    return (
        <div id="header">
           <div id="logo">
           <img src={imgLogo} />
           </div>
                <div id="Titulo">
                    <h1 className="icon-home">Tienda Online</h1>
                </div>
                <div id="menu_all">
                    {/* <Menu/>    */}
                
                </div>
           
        </div>
    )
}


 

export default header;
