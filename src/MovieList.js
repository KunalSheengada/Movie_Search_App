import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (

                <div className="col-md-3 ">
                    <div className="movie-card" onClick = { () => props.openPopup(movie.imdbID)}>
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : ""}
                            alt=""
                            className="img img-responsive"
                        />
                        <div className="movie-title">{movie.Title}</div>
                        <div className="movie-year">{movie.Year}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
