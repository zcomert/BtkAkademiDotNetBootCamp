import fetch from "node-fetch";

const getAllBooksAsync = async () => {
    return fetch("http://localhost:44299/api/books")
    .then(resp => resp.json())
    .catch(err => console.log(err))
}

const getAllBooks = () => {
    return fetch("http://localhost:44299/api/books")
    .then(resp => resp.json())
    .catch(err => console.log(err));
}

const dataAsync = await getAllBooksAsync();
console.log(dataAsync);

const data = await getAllBooks();
data.then(resp => resp.data);



