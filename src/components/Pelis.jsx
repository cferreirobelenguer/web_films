
import React,{useState,useEffect} from "react";
import axios from 'axios';
const apiKey='9dc31d864e1a0bd73a7bb222ad77ad36';

const Pelis=()=>{

    const [pelis, setPelis]=useState([]);
    const verPelis=()=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey)
            .then(res=>{
                //Se introducen los datos de la petición dentro del objeto resultado
                setPelis(res.data.results)
                //Console log que muestra el objeto resultado con los datos de la petición
                //console.log(pelis);
            });
        }
        useEffect(() => {
            verPelis()
            }
        
        );

        
    
        return(
        //Recorro las películas en la página principal
        pelis.map((i) =>{
            return(
                <div className="contenidoPelis">
                    <img src={'https://image.tmdb.org/t/p/w500/'+i.poster_path} width="250" heigth="250" alt="poster"/>
                    <div className="tituloPelis">
                        <h3>{i.original_title} - {i.release_date}</h3>
                    </div>
                    <h5>{i.overview}</h5>
                    
                </div>
            );
        } )
        );
    
}
    export default Pelis;