import React, { Component } from 'react';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger , faInstagram , faTwitter , faWhatsapp , faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import './css/footer.css';


 export default class footer extends Component {
    render() {
        return (
            <div id="footer">
                <a href="">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a href="">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <h2 id="DA">Autor:<strong>J.A.C.L &#169;</strong></h2>
                <p id="derechos">Todos los derechos Reservados <strong>&#174; Marca</strong></p>
            </div>
        )
    }
}
