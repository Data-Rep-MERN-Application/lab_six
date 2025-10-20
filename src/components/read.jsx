import { useEffect, useState } from "react";
import axios from 'axios';
import Movies from "./movies";
const Read = () => {
    const [myMovies, setMovie] = useState([]);

    useEffect(
        () => {
            //do some http client work
            axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json')
                .then((response) => {
                    console.log(response.data.myArray);
                    setMovie(response.data.myArray);
                })
                .catch((error) => { console.log(error) });
        }, []
    );

    
    return (
        <div>
            <h1>Hello from Read component</h1>
            <Movies myMovies={myMovies}></Movies>
        </div>
    );
}

export default Read;