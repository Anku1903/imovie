import React,{ forwardRef } from 'react';
import './Card.css';
import TextTruncate from 'react-text-truncate';
const Cardbox = forwardRef(({movie},ref) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    return(
        <>
        <div ref={ref} className="cardbox">
<img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie" />
<p className="pera"> {`Release : ${movie.release_date || movie.first_air_date}`}</p>
<h2> { movie.title || movie.original_name } </h2>

<p className="last_pera">
{movie.media_type && `${movie.media_type} .`} 
{`Rates : ${movie.vote_count}`}</p>
        </div>
</>
    );
})
export default Cardbox;