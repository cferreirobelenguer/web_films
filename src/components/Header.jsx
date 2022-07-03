import React from 'react'
import portada from '../assets/images/portada.png'
const Header=()=>{
    return(
        <div className="portada">
            <img src={portada} className="img-fluid" width="350" heigth="350" alt="portada"/>
        </div>
    )
}
export default Header;