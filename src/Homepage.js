import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./MovieList";
import MovieHeading from "./MovieHeading";
import SearchBox from "./SearchBox";
import Popup from "./Popup";

let Homepage = () => {
    let [movies, setMovies] = useState([]);
    let [searchMovie, setSearchMovie] = useState("");
    const [aboutValue, setaboutValue] = useState("");

    const getMovieRequest = async (searchMovie) => {
        let url = `http://www.omdbapi.com/?s=${searchMovie}&apikey=ec9a8ce0`;
        let response = await fetch(url);
        let responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    let openPopup = async (id) => {
        let url2 = `http://www.omdbapi.com/?i=${id}&apikey=ec9a8ce0`;
        let response2 = await fetch(url2);
        let responseJson2 = await response2.json();
        setaboutValue(responseJson2);
    };

    const closePopup = () => {
        setaboutValue("");
    };

    useEffect(() => {
        getMovieRequest("Thor");
    }, []);

    useEffect(() => {
        getMovieRequest(searchMovie);
    }, [searchMovie]);

    return (
        <div className="container-fluid movie-app">
            <div className="row d-flex align-items-center my-4">
                <MovieHeading heading="Movie Mania" />
                <SearchBox
                    searchMovie={searchMovie}
                    setSearchMovie={setSearchMovie}
                />
            </div>
            <div className="row">
                <MovieList movies={movies} openPopup={openPopup} />
            </div>

            {(typeof aboutValue.Title != "undefined") ? <Popup Selected={aboutValue} closePopup={closePopup} /> : false}
        </div>
    );
};

export default Homepage;
