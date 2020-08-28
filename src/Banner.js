import React,{ useState, useEffect } from 'react';
import axios from"./axios"
import requests from "./requests"


function Banner() {
  const {movie, setMovies}= useState([]);

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovies(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
            );
            return request;  

    }
    fetchData();
      }
  );

  console.log(movie);
    return (

        <header>


        </header>
    )
}

export default Banner;