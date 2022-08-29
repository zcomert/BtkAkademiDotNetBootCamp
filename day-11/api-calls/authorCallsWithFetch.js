import fetch from "node-fetch";

const getAllAuthors = () => {
  return fetch("http://localhost:44299/api/authors")
  .then((resp) => resp.json());
};

const createOneAuthor = () => {

    const methodbody = {
        "firstName":"Ahmet",
        "lastName":"Hakan"
    };

    // post request
    return fetch("http://localhost:44299/api/authors",{
        method : 'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(methodbody)
    }).then(resp => resp.json());
}

createOneAuthor().then(resp => console.log(resp));
getAllAuthors().then(resp => console.log(resp))