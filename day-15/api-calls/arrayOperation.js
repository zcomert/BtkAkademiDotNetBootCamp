const state = [
    {categoryId:1, categoryName:"Computer Science"},
    {categoryId:2, categoryName:"Sofware Engineering"},
    {categoryId:3, categoryName:"RDMS"},
    {categoryId:4, categoryName:"Network"},
]
const payload =  {categoryId:2, categoryName:"AI"};
const newArr = [...state.filter(c => c.categoryId!==2), payload]

console.log(newArr);