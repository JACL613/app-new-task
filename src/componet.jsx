import React, { Component } from 'react';
import Card from './card';
import './css/cards.css';

import img1 from './img/reloj_1.png';
import img2 from './img/reloj_2.png';
import img3 from './img/reloj_3.jpeg';
import img4 from './img/reloj_4.jpg';


const cards = [
    {
        id: 1 ,
        image: img1,
        precio:'50.000',
        marca: "rolex" 
    },
    {
        id: 2 ,
        image: img2,
        precio:'70.000',
        marca: "Cat"
    },
    {
        id:3 , 
        image:img3,
        precio:'60.000',
        marca:"MG.ORKINA"
    }
    ,
    {
        id: 4 , 
        image: img4,
        precio: '80.000',
        marca: 'Mini Focus'
    }
];

export default class componet extends Component {
    render() {
        return (
            <div id="assg">
                 {
                cards.map(card => (
                    <div id="cards" key={card.id}>
                    <Card imagen={card.image} cash={card.precio} marc={card.marca}/> 
                    </div>

                ))
            }     
                         
            </div>
        )
    }
}



