import fetch from "node-fetch";

const getAllAuthors = () => {
  return fetch("http://localhost:44299/api/authors")
  .then((resp) => resp.json());
};

const createOneAuthor = () => {
    // post request
}

getAllAuthors().then(resp => console.log(resp))