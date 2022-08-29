import fetch from "node-fetch";

const

fetch("http://localhost:44299/api/books")
    .then(resp => resp.json())
    .then(resp => console.log(resp))
