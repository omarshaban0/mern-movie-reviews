import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movie"
import { Link } from "react-router-dom";


const MoviesList = props => {
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [searchGenre, setSearchGenre] = useState("");
    const [searchLanguage, setSearchLanguage] = useState("");

    useEffect(() => {
        retrieveMovies();
        retrieveGenres();
    }, []);

    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    }

    const onChangeSearchGenre = e => {
        const searchGenre = e.target.value;
        setSearchGenre(searchGenre);
    }

    const onChangeSearchLanguage = e => {
        const searchLanguage = e.target.value;
        setSearchLanguage(searchLanguage);
    }

    const retrieveMovies = () => {
        MovieDataService.getAll()
            .then(response => {
                console.log(response.data);
                setMovies(response.data.movies);

            })
            .catch(e => {
                console.log(e);
            });
    };

    const retrieveGenres = () => {
        MovieDataService.getGenres()
            .then(response => {
                console.log(response.data);
                MovieDataService.setGenres(["All Genres"].concat(response.data));

            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveMovies();
    };

    const find = (query, by) => {
        MovieDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setMovies(response.data.movies);
            })
            .catch(e => {
                console.log(e);
            });

    };

    const findByTitle = () => {
        find(searchTitle, "title")
    };

    const findByGenre = () => {
        if (searchGenre === "All Genres") {
            refreshList();
        } else {
            find(searchGenre, "Genre")
        }
    };

    const findByLanguage = () => {
        find(searchLanguage, "langauge")
    };

    return (
        <div>
            <div className="row pb-1">
                <div className="input-group col-lg-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="input-group col-lg-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by genre"
                        value={searchGenre}
                        onChange={onChangeSearchGenre}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByGenre}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="input-group col-lg-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by language"
                        value={searchLanguage}
                        onChange={onChangeSearchLanguage}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByLanguage}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                {movies.map((movie) => {
                    return (
                        <div className="col-lg-4 pb-1">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">
                                        <strong>Genre</strong> <br/>
                                        <strong>Languages</strong>
                                    </p>
                                    <div className="row">
                                        <Link to={"/movies/" + movie._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                                            View Reviews
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default MoviesList;