import React , {useState , useEffect} from 'react'
import './Banner.css'
import axios from "./axios"
import requests from "./Request";

function Banner() { 
    const [movie , setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
                //we pick random number of movie comming from 0 to last movie..number between zero are droped
            ]);
            return request;
        }
        fetchData();

    }, [])
    console.log(movie);


    // string break
    function truncate(string , n) {
        return string?.length > n ?string.substr(0, n-1) + '....':string;

    }
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/")`,
            backgroundPosition: "center center"
        }}> 
        <div className="banner__contents">
             <h1 className="banner__title">Movie Name</h1>
             <div className="banner__buttons">
                 <button className="banner__button">Play</button>
                 <button className="banner__button">My List </button>

             </div>
             <h1 className="banner__description">{truncate('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',150)}
             </h1>
        </div>
        <div className="banner--fadeButton" />
            
        </header>
    )
}

export default Banner
