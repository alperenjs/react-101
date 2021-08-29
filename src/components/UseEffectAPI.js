import React, { useState, useEffect } from "react";
import axios from 'axios';

function UseEffectAPI() {
    const select = {
        width: "180px",
        margin: "0 auto",
    };
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");
    useEffect(() => {
        async function getData(){
            const response = await axios.get(`https://swapi.dev/api/films/${number}`);
            setMovie(response.data);
        }
        getData();
    }, [number]) /* this parameter says, this useffect will run only if the number changes. */
    return (
        <div>
            <h1>Pick a Movie</h1>
            <p>the film is: {movie.title}</p>
            <p>{movie.opening_crawl}</p>
            <select value={number} onChange={e=> setNumber(e.target.value)} className="form-control" style={select}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>
    );
}

export default UseEffectAPI;
