import React from 'react';
import './Nav.css';
import requests from './Requests';
const Nav = ({ Seto }) => {
return(
    <>
<div className="nav">
<h2 onClick={() => Seto(requests.fetchTrending)}> Treanding</h2>
<h2 onClick={() => Seto(requests.fetchTopRated)}> Top rated</h2>
<h2 onClick={() => Seto(requests.fetchActionMovies)}> Action</h2>
<h2 onClick={() => Seto(requests.fetchHorrorMovies)}> Horror</h2>
<h2 onClick={() => Seto(requests.fetchMystery)}> Mystery</h2>
<h2 onClick={() => Seto(requests.fetchRomanceMovies)}> Romance</h2>
<h2 onClick={() => Seto(requests.fetchComedyMovies)}> Comedy</h2>
<h2 onClick={() => Seto(requests.fetchSciFi)}> Sci-Fi</h2>
<h2 onClick={() => Seto(requests.fetchTV)}> Movie</h2>
<h2 onClick={() => Seto(requests.fetchWestern)}> Western </h2>
<h2 onClick={() => Seto(requests.fetchAnimation)}> Animation</h2>


</div>

</>
);

}
export default Nav;
