import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {

    const componentTitle = "Edit Movie";

    const saveEdit = (e, id) =>{
        e.preventDefault();
        
        //get event target
        let target = e.target;

        const savedMovieList = getMovies();

       const index = savedMovieList.findIndex(movie => movie.id === id);

        

        //create object with index pulled, adding title and description from form
        let movieToUpdate = {
            id,
            title: target.title.value,
            description: target.description.value,
        }

        //update element in the array
        savedMovieList[index] = movieToUpdate;

        //save new array in local storage
        localStorage.setItem("movies", JSON.stringify(savedMovieList));

        //update

        setListState(savedMovieList);
        setEdit(0);


    }

  return (
    <div className='editForm'>
        <h3 className='title'>{componentTitle}</h3>
        <form onSubmit={e => saveEdit (e, movie.id)}> 
            <input  type='text'
                    name='title'
                    className='editedMovie'
                    placeholder='Movie Title'/>
            
            <textarea
                    name='description'
                    placeholder='Description'
                    className='Edited Description'/>
            
            <input type='submit' className='update' value="Update"/>
        </form>

    </div>
  )
}
