import fetch from "node-fetch";

const getAllAuthors = () => {
  return fetch("http://localhost:44299/api/authors").then((resp) =>
    resp.json()
  );
};

const createOneAuthor = () => {
  const methodbody = {
    firstName: "Ahmet",
    lastName: "Hakan",
  };

  // post request
  return fetch("http://localhost:44299/api/authors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(methodbody),
  }).then((resp) => resp.json());
};

const updateOneAuthor = () => {
  const methodbody = {
    authorId: 7,
    firstName: "Senai",
    lastName: "Demirci",
  };

  return fetch("http://localhost:44299/api/authors/7", {
    method: "PUT",
    body: JSON.stringify(methodbody),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => resp.json());
};

const deleteOneAuthor = (id) => {
    const url = `http://localhost:44299/api/authors/${id}`;
    return fetch(url,{
        method:'DELETE',
        headers : {
            'Content-Type' : 'application/json'
        }
    }).then(resp => resp);
}

// createOneAuthor().then((resp) => console.log(resp));
// updateOneAuthor().then((resp) => console.log(resp));
deleteOneAuthor(6);
getAllAuthors().then((resp) => console.log(resp));
