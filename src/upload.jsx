import React, { Component } from 'react';
import './css/upload.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus , faMinus, faImage, faUpload, faImages } from "@fortawesome/free-solid-svg-icons";


export default class upload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    // Valores de archivo antes de upload
    result = () =>{
        const file = document.getElementById('input_imagen');
        const img = document.getElementById('imagen_view') ;
        const icon = document.getElementById('clouse') ;

        file.addEventListener("change" , () =>{  
        const archivo = file.files[0];
        const ruta = URL.createObjectURL(archivo);
        img.src = ruta;
        img.style.display = "block";
        icon.style.display = "none";
        document.getElementById('img_name').innerHTML= archivo.name;
    });
    };
   
    // Activador de estado 
    activeUpload = () => {
        this.setState({show: !this.state.show})
    };
    render() {
        if (this.state.show) {   
        return (
            <div id="btn-add">
                <button className="icon-icon-menu" onClick={this.activeUpload}><FontAwesomeIcon icon={faPlus}/></button>
            </div>
        )
        }   
        else{
            
        return (
            <div id="btn-min">    
        
              <form action="/upload" id="Form-upload" method="post" enctype="multipart/form-data">
            <button id="btn-minus" onClick={this.activeUpload}><FontAwesomeIcon  icon={faMinus}/></button>
            <div id="section-img">
                <label for="input_imagen" id="img_preview">
                    <FontAwesomeIcon for="input_imagen" id="clouse" icon={faImage}/>
                    <img id="imagen_view" src="" alt="" />
                 <h1 id="img_name">Undefine</h1>
                </label>
            <input type="file" onClick={this.result} name="input_imagen" id="input_imagen"/>
            </div>
            {/* <label id="btn-img"  for="input_imagen"><FontAwesomeIcon icon={faImages}/>Imagen</label> */}
            <input type="text" placeholder="Marca De Producto:" name="input_marca" id="input-marca" />
            <input type="number" placeholder="Valor:" name="input_precio" id="input-precio" />
               
            <button type="submit" id="btn-fin">
             <FontAwesomeIcon id="svg-final" icon={faUpload}/>
            </button>
        </form>
            </div>
        )
        }
    }
}
