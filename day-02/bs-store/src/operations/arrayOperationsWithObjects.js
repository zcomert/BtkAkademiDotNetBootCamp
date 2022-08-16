const data =[
    {id:1, title:"Devlet", price:50},
    {id:2, title:"Beyaz Zambaklar Ülkesi", price:70},
    {id:3, title:"Pembe İncili Kaftan", price:90}
]; 

const tobeAddBook = {id:4, title:"Olasılıksız", price:110}
const newArr = [...data, tobeAddBook];

const arr = data.filter(book => book.id!==2);
console.log(data);
console.log(arr);
console.log(newArr);