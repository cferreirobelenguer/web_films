
import React,{useState,useEffect} from "react";
import axios from 'axios';
const apiKey='9dc31d864e1a0bd73a7bb222ad77ad36';

const SearchBar=()=>{
    const [titulos, setTitulos]=useState([]);
    const [titulos2, setTitulos2]=useState([]);
    const [busqueda, setBusqueda]=useState([]);
    const [pelis, setPelis]=useState([]);
    const verTitulos=()=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey)
            .then(res=>{
                setTitulos(res.data.results)
            });
        }
        useEffect(() => {
            verTitulos()
            }
        
        );

        
    return(
        <div>
            
        </div>
    )
}
export default SearchBar;