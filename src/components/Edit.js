import React from 'react'

export const Edit = () => {

    const componentTitle = "Edit Movie";

  return (
    <div className='editForm'>
        <h3 className='title'>{componentTitle}</h3>
        <form>
            <input  type='text'
                    name='title'
                    className='editedMovie'
                    defaultValue='Original Movie Title'/>
            
            <textarea
                    name='Description'
                    defaultValue='Original Description'
                    className='Edited Description'/>
            
            <input type='submit' className='edit' value="Update"/>
        </form>

    </div>
  )
}
