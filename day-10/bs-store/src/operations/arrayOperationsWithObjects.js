const data =[
    {id:1, title:"Devlet", price:50},
    {id:2, title:"Beyaz Zambaklar Ülkesi", price:70},
    {id:3, title:"Pembe İncili Kaftan", price:90}
]; 

const tobeAddBook = [
    {id:4, title:"Olasılıksız", price:110},
    {id:5, title:"Yalnızlık Sözleri", price:45},
    {id:6, title:"Yoldaki İşaretler", price:55},
    {id:7, title:"Kitab-ı Aşk", price:65},
]
const newArr = [...data, ...tobeAddBook];

const arr = data.filter(book => book.id!==2);
console.log(data);
console.log(arr);
console.log(newArr);