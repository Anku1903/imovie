import React,{ useState , useEffect } from 'react';
import Cardbox from './Cardbox';
import './Box.css';
import axios from './axios';
import FlipMove from 'react-flip-move';
import requests from './Requests';
const Box = ({ sopt }) => {
    const [movies,Set] = useState([]);
    useEffect(() => {
        async function fetchData() {
         const request = await axios.get(sopt);
         Set(request.data.results);
        }
        fetchData();
    }, [sopt]);
return(
    <>
    <div className="box">
    <FlipMove>
    {
        movies.map((movi) => (<Cardbox movie={movi} key={movi} /> ))
    }
</FlipMove>
</div>
    </>
);
}
export default Box;
