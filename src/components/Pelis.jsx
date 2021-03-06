
import React,{useState,useEffect} from "react";
import axios from 'axios';
const apiKey='9dc31d864e1a0bd73a7bb222ad77ad36';

const Pelis=()=>{

    const [pelis, setPelis]=useState([]);
    const [tele, setTele]=useState([]);
    const verPelis=()=>{
        //datos de películas
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey)
            .then(res=>{
                //Se introducen los datos de la petición dentro del objeto resultado
                setPelis(res.data.results)
                //Console log que muestra el objeto resultado con los datos de la petición
                //console.log(pelis);
            });
        //datos de tv
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key='+apiKey)
            .then(res=>{
                //Se introducen los datos de la petición dentro del objeto resultado
                setTele(res.data.results)
                //Console log que muestra el objeto resultado con los datos de la petición
                //console.log(pelis);
            });
        }
        useEffect(() => {
            verPelis()
            }
        
        ,[]);

        
    
        return(
        <div>
        {//Recorro las películas en la página principal
        pelis.map((i) =>{
            return(
                <div className="contenidoPelis" key={i.id}>
                        <div className="card" id="contenedorCard" >
                            <img src={'https://image.tmdb.org/t/p/w500/'+i.poster_path} id="imagenCard" className="card-img-top" width="300" heigth="300" alt="poster"/>
                            <div className="card-body">
                            
                                <div className="tituloPelis">
                                    <h3>{i.original_title} - {i.release_date}</h3>
                                </div>
                                <div className="contenido">
                                    <h5>{i.overview}</h5>
                                </div>
                            </div>
                        </div>
                    
                </div>
                
            );
        } )}
        {//Recorro las películas en la página principal
        tele.map((i) =>{
            return(
                <div className="contenidoPelis" key={i.id}>
                        <div className="card" id="contenedorTele" >
                            <img src={'https://image.tmdb.org/t/p/w500/'+i.poster_path} id="imagenCard" className="card-img-top" width="300" heigth="300" alt="poster"/>
                            <div className="card-body">
                            
                                <div className="tituloPelis">
                                    <h3>{i.original_title} - {i.release_date}</h3>
                                </div>
                                <div className="contenido">
                                    <h5>{i.overview}</h5>
                                </div>
                            </div>
                        </div>
                    
                </div>
                
            );
        } )}
        
        </div>
        
        );
    
        
    
}
    export default Pelis;