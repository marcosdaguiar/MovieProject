import React, { useState } from 'react'


export const Search = ({listState, setListState}) => {

    const [searching, setSearching] = useState('');
    const [notFound, setNotFound] = useState(false);


    const searchMovie = (e) => {
        //create state and update
        setSearching(e.target.value);
        //get current list of movies
        let foundMovies = listState.filter(movie => {
            return movie.title.toLowerCase().includes(searching.toLowerCase());
        });
        //filter to find 
        if(searching.length <= 1 || foundMovies <= 0){
            foundMovies = JSON.parse(localStorage.getItem("movies"));
            setNotFound(true);
        }else{
            setNotFound(false);
        }

        //validate result

        //get value from localstorage

        //update the main list state
        setListState(foundMovies);
    }
  return (
    <div className="search">
        <h3 className="title">Search</h3>
        {(notFound == true && searching.length > 2 ) && (
            <span className='not_found'>Movie not found!</span>
        )}
        
        <form>
            <input  type="text"
                    id= "search_field"
                    name= "searching"
                    autoComplete='off'
                    placeholder="Movie Title"
                    onChange={searchMovie}
            />
            <button>search</button>
        </form>
    </div>
    )
}
