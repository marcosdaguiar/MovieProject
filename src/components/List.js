import React, {useEffect, useState} from 'react'

export const List = ({listState, setListState}) => {

    useEffect(() =>{
        console.log("loaded components of the list of movies");

        getMovies();
    }, []);

    const getMovies = () =>{
        let movies = JSON.parse(localStorage.getItem("movies"));
        
        setListState(movies);

        return movies;
    }

    const deleteMovie = (id) => {
        //get movies in the storage
        let savedMovies = getMovies();

        //filter movies to eliminate from array
        let newArrayMovies = savedMovies.filter(movie => movie.id !== parseInt(id));

        //update state from list

        setListState(newArrayMovies);

        //update data in localstorage
        localStorage.setItem('movies', JSON.stringify(newArrayMovies));
    }

  return (
    <>
        {listState != null ? listState.map(movie => {
                return(
                    <article key={movie.id} className="movie-item">
                        <h3 className="title">{movie.title}</h3>
                        <p className="description">{movie.description}</p>
                        <button className="edit">Edit</button>
                        <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
                </article>
                );
            })
            :<h2> There are no movies to show</h2>
        }

            
    </>

  )
}
