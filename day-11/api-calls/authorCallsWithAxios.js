import axios from "axios";

const getAllAuthors = () => {
    return axios.get("http://localhost:44299/api/authors")
    .then(resp => resp.data);
}

const createOneAuthor = () => {

    const methodbody = {
        "firstName":"Nazan",
        "lastName":"Bekiroğlu"
    };
    
    return axios.post("http://localhost:44299/api/authors",methodbody);
}

createOneAuthor().then(resp=> console.log(resp))
getAllAuthors().then(resp => console.log(resp));