import React, { useEffect, useState } from 'react'
import axios from "./axios"
import "./Row.css"

function Row({title , fetchUrl, isLargeRow = false}) {
    const [movies , setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();

    },[fetchUrl])
    return (
        <div className="row">
            <h2>{title}</h2>
         <div className="row_posters">
         {movies.map(movie => (
                <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movies.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt=""/>
            ))}
         </div>
        </div>
    )
}

export default Row
