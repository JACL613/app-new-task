import React, { Component } from 'react'
import  iconmenu from './icon/PNG/menu.png';


export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    view = () =>{
        this.setState({show: !this.state.show})
    }
    render() {
        if (this.state.show) {
            
        return (
            <div id="main_menu">
            		<nav className="navegacion">
                    <ul className="menu">
               <button onClick={this.view}><img src={iconmenu}/></button>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Servicios</a>
                            <ul className="submenu">
                                <li><a href="#">Servicio #1</a></li>
                                <li><a href="#">Servicio #2</a></li>
                                <li><a href="#">Servicio #3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        )
        } else {
         
        return (
            <div id="menu_button">
                <button onClick={this.view}><img src={iconmenu}/></button>
            </div>
        )   
        }
    }
}
