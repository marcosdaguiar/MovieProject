   export const SaveInStorage = (key, element) => {

        //Get exiting elements in the local storage
        let elements = JSON.parse(localStorage.getItem(key));

        //Verify if it is an arroy
        if(Array.isArray(elements)){
            //Add a new element in the array
            elements.push(element);
        }else{
            //create an array with the new element
            elements = [element];
        }

        //save in local storage
        localStorage.setItem(key, JSON.stringify(elements));

        //return object
        return element;
    }
