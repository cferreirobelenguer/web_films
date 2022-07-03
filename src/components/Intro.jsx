import React from 'react';
import imagen from '../assets/images/intro.gif'
const Intro=(props)=>{
    return(
        <div className="intro">
            <div className="imagen" >
                <img src={imagen} className="img-fluid" width="800" heigth="800" alt="foto intro"/>
            </div>
            <div className="informacion" data-aos="fade-left">
                <h2>{props.frase}</h2>
            </div>
            <div className="informacion" data-aos="fade-right">
                <h2>{props.frase2}</h2>
            </div>
        </div>
    )
}
export default Intro;