import fetch from "node-fetch";

const getAllAuthors = () => {
  return fetch("http://localhost:44299/api/authors")
  .then((resp) => resp.json());
};

const createOneAuthor = () => {
    // post request
    return fetch("http://localhost:44299/api/authors",{
        method : 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:{
            "firstName":"Ahmet",
            "lastName":"Hakan"
        }
    }).then(resp => resp.json());
}


getAllAuthors().then(resp => console.log(resp))