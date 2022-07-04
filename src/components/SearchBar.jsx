
import React,{useState,useEffect} from "react";
import axios from 'axios';
const apiKey='9dc31d864e1a0bd73a7bb222ad77ad36';

const SearchBar=()=>{
    const [titulos, setTitulos]=useState([]);
    const [titulos2, setTitulos2]=useState([]);
    const [busqueda, setBusqueda]=useState("");
    const [tele1, setTele1]=useState([]);
    const [tele2, setTele2]=useState([]);

    const verTitulos=()=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey)
            .then(res=>{
                setTitulos(res.data.results)
                
            });
             //datos de tv
        axios.get('https://api.themoviedb.org/3/discover/tv?api_key='+apiKey)
            .then(res=>{
            //Se introducen los datos de la petición dentro del objeto resultado
                setTele1(res.data.results)
                console.log(tele1);
            });
        }

        useEffect(() => {
            verTitulos()
            },[]
);
    const handlerChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    const filtrar=(terminoBusqueda)=>{
        console.log(tele1);
        var resultados=titulos.filter((i)=>{
            if(i.original_title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                console.log(i);
                return i
            }
        })
        var resultadosTele=tele1.filter((j)=>{
            if(j.original_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                console.log(j);
                return j
            }
        })
        setTitulos2(resultados);
        setTele2(resultadosTele);
        console.log(titulos2);
        console.log(tele2);
    }
        
    
    return(
        <div className="SearchTittle">
            <div className="input-group" id="busquedaTitle">
                <div className="form-outline">
                    <input 
                    value={busqueda}
                    id="search-input" type="search"
                    placeholder="Title"
                    onChange={handlerChange}
                    className="form-control inputBuscar" />
                    <label className="form-label" htmlFor="form1">Search Title</label>
                </div>
            
            <button className="btn btn-success" id="search-button" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
                </svg>
            </button>
            </div>
            <div className="linea">
                <hr></hr>
            </div>
            {titulos2.map((i) =>{
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
        {tele2.map((j) =>{
            return(
                <div className="contenidoPelis" key={j.id}>
                        <div className="card" id="contenedorCard" >
                            <img src={'https://image.tmdb.org/t/p/w500/'+j.poster_path} id="imagenCard" className="card-img-top" width="300" heigth="300" alt="poster"/>
                            <div className="card-body">
                                <div className="tituloPelis">
                                    <h3>{j.original_title} - {j.release_date}</h3>
                                </div>
                                <div className="contenido">
                                    <h5>{j.overview}</h5>
                                </div>
                            </div>
                        </div>
                    
                </div>
            );
        } )}
        </div>
    )
}
export default SearchBar;