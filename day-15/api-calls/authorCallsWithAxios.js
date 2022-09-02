import axios from "axios";

const getAllAuthors = () => {
  return axios
    .get("http://localhost:44299/api/authors")
    .then((resp) => resp.data);
};

const createOneAuthor = () => {
  const methodbody = {
    firstName: "Nazan",
    lastName: "Bekiroğlu",
  };

  return axios.post("http://localhost:44299/api/authors", methodbody);
};

const updateOneAuthor = () => {
  const methodbody = {
    authorId: 8,
    firstName: "Meltem",
    lastName: "Barut",
  };

  return axios({
    url: "http://localhost:44299/api/authors/8",
    data: methodbody,
    method: "PUT",
  }).then(resp => resp.data);
};

// createOneAuthor().then(resp=> console.log(resp));
updateOneAuthor().then((resp) => console.log(resp));
getAllAuthors().then((resp) => console.log(resp));
