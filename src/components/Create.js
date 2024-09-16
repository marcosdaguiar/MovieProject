import React, {useState} from 'react'
import { SaveInStorage } from './helpers/SaveInStorage';


export const Create = ({setListState}) => {

    const compTitle = "Add Movie";
    const [movieState, setMovieState] = useState({
        title: '',
        description:''
    })



    const getFormData = e=> {
        e.preventDefault();

        // get data from forms
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;


        //Create object to save the movie
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }
        //save state
        setMovieState(movie);


        //Update the list 
        setListState(elements => {
            return[...elements, movie];
        });

        //save in the local storage

        SaveInStorage("movies", movie); 

    }


  return (
    <div className="add">
        <h3 className="title">{compTitle}</h3>


        <form onSubmit={getFormData}> 
            <input  type="text" 
                    id='title'
                    name='title' 
                    placeholder="Title" />
            <textarea 
                    id='description'
                    name='description' 
                    placeholder="Description"></textarea>
            
                    
            <input  type="submit" 
                    id='save' 
                    value="Save" />
                
        </form>
    </div>
  )
}
